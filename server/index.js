const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
console.log(process.env)

const accountSid = process.env.ACCOUNT_SID;
const myNumber = process.env.MY_NUMBER;
console.log(process.env.ACCOUNT_SID);
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid,authToken);

const app = express();

app.use(cors()); // blocks browser restricting data

app.use(express.static(path.resolve(__dirname, '../client/build')));

const PORT = process.env.PORT || 3001;

app.get('/send-text', (req, res) => {

    const {textMessage} = req.query;
    client.messages.create({
        body:textMessage,
        to:myNumber,
        from:process.env.TWILIO_NUM

    }).then((message) => {console.log(message.body)
        res.status(200);
        res.send();
    })
    .catch(e => { console.error('Got an error:', e.code, e.message);
    const code = e.code;
    res.status(400).send(code.toString());
     });
})
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
app.listen(PORT, () => console.log(`Server ${PORT}`)); 