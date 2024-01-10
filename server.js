const express = require('express')
const app = express()
const port = 3000
const config = require('./config');

const nodemailer = require("nodemailer");
const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "birappanchappan@gmail.com",
        pass: "kvfzgpqzgptakbps"
    }
});


app.get('/', async (req, res) => {
    let userList = ["Aman",'Bhupendra','Ravi','Sunny'];
    let i=0;
    await sendMails(userList,i);
    res.send('Message sent')
})

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`)
})


async function sendMails(userList,index){
    if(userList[index]){
        let data = config.mailData(userList[index]);
        let success = await client.sendMail(data);
        index++;
        return sendMails(userList,index);    
    }else{
        console.log("done processing");
    }
    
}