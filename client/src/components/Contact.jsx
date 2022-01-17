import axios from "axios";
import React from "react";
import './css/Contact.css';
class Contact extends React.Component{
    state = {
        text: {
            textMessage: ''
        },
        showing: true,
        sent: false,
        error: false,
        errorMessage: 'Message did not send'

    }


    sendText = _ =>{
        const { text } = this.state
        axios.get(`/sendText?textMessage=${text.textMessage}`)
        .catch(error => {
            console.error('There was an error!!', error);
            this.setState({ showing: false });
        })
        .then((response) => {
            if(!response.ok){
                response.text().then((data) => {
                    console.log(data);
                    if(data==="21602"){
                        this.setState({errorMessage: 'Message body is required'})
                    }
                });
                this.setState({ showing: false });
                this.setState({ error: true });
                setTimeout(function(){
                    this.setState({ showing: true });
                    this.setState({ error: false });
                }.bind(this),2000); 
            }
            else{
                console.log('hi');
                this.setState({sent: true});
                this.setState({ showing: false });
                this.setState(prevState => ({
                    text: {                   
                        ...prevState.text,    
                        textMessage: ''       
                    }
                }))
                setTimeout(function(){
                    this.setState({sent:false});
                    this.setState({ showing: true });
                }.bind(this),5000); 
                }
        });
    }
 render() {

    
    const {text} = this.state;
    const { showing } = this.state;
    const { sent } = this.state;
    const { error } = this.state;
    const { errorMessage } = this.state;

  return (
    
    <div className="contact">
      <div className="container">
        <div>
          <div>
          <h1> Contact me using Twilio </h1>
          
          <br />
          
          {showing ? <textarea id="messageArea" value={text.textMessage} 
            onChange={e => this.setState({ text: { ...text, textMessage: e.target.value } })} />: null}
          {error ? <p>{errorMessage}</p> : null}
          {sent ?  <p>Message sent!</p>:null}
            <br />
          {showing ?<button className=" btn" onClick={this.sendText}> Send Text </button>: null }

          </div>
          <div id="code">
              <p>See the code for this project <a href="https://github.com/mdemarc7/Resume-website">HERE</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Contact;