const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path');


let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'tejasbagade264@gmail.com',
        pass: '123456'
      }
    });

    let rendertemplate =(data, relativePath) => {
        let mailHTML;
        ejs.renderFile(
            path.join(__dirname, '../views/mailers', relativePath),
            data,
            function(err, template){
                if(err){console.log('error in rendering template'); return}

                mailHTML =template;
            }
        )
        return mailHTML;
    }


module.exports={
    transporter: transporter,
    rendertemplate: rendertemplate
}
