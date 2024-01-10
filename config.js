const path = require("path");
module.exports = {
    mailData: function(name){
        return {

        from: "birappanchappan@gmail.com",
        to: "yarvind307@gmail.com",
        subject: "Application for the Job Testing",
        attachments: [
            {
                filename: 'sample.pdf', // <= Here: made sure file name match
                path: path.join(__dirname, '/output/sample.pdf'), // <= Here
                contentType: 'application/pdf'
            }
        ],
        text: `Hello ${name},
    
I hope this message finds you well. My name is Arvindkumar Yadav, and I currently work as a software tester at RWS GROUP, primarily on the Photoshop desktop project for both Windows and Mac, as well as Photoshop for iPad. I have been with the company for approximately 2 years and am now exploring new opportunities to further my career.
    
Over my 4.3 years of professional experience, I have gained expertise in both automation and manual testing. I have extensive experience in automation using Cypress with JavaScript, and I have effectively utilized tools such as Phabricator and Jira for task and project management.
        
I recently came across an exciting job opening at your organization via LinkedIn, and I am eager to apply for the position. I have attached my updated resume for your reference. If you require any additional information or have any questions, please feel free to reach out to me.
        
Mobile Number: 9920918954
Email: yarvind307@gmail.com
        
Thank you for considering my application.

Warm regards,
Arvind`
        }
    }
} 