
import React from "react";
import './css/Home.css';
import Badge from 'react-bootstrap/Badge'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <img
              className=" row img-fluid mb-4 mb-lg-0"
              id="home-picture"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHi6uNRD1yodw/profile-displayphoto-shrink_800_800/0/1642138219659?e=1647475200&v=beta&t=01aKrJiTY0XDwTpKyxc2PWUxucNcw_TSkNFqPIj2Sss"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h1>Ahoy, I'm Mariah DeMarco</h1>
            <p>
                I am a fourth year software engineering student at Western University. 
                I have completed a 15 month internship at a financial instituition where I worked on projects starting with UML diagrams to finishing with deployment. 
                Through this experience, I had the opportunity to be a productive member of a team, and to learn from mentors and peers.
                As I approach the end of my degree, I am seeking a position that will continuously challenge me and 
                foster my journey in becoming the best software engineer I can be.
            </p>
            <h5>Skills</h5>
            <h5> 
                <Badge className="badge" bg="secondary">Java</Badge>
                <Badge className="badge" bg="secondary">React</Badge>
                <Badge className="badge" bg="secondary">SQL</Badge>
                <Badge className="badge" bg="secondary">JavaScript</Badge>
                <Badge className="badge" bg="secondary">Knockout.JS</Badge>
                <Badge className="badge" bg="secondary">.NET</Badge>
                <Badge className="badge" bg="secondary">Visual Basic</Badge>
                <Badge className="badge" bg="secondary">C++</Badge>
                <Badge className="badge" bg="secondary">Node.js</Badge>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;