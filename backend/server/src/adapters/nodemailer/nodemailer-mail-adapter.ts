import { MailAdapter,SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "42734a61cfeae9",
      pass: "4ba6045609274b"
    }
  });

  
export class NodemailerMailAdapter implements MailAdapter{


async sendMail({subject,body}:SendMailData){
        
    await transport.sendMail ({
        from:"Equipe Feedget <info@feedget.com>",
        to: "Alysson Araújo <alysson14araujo@gmail.com>",
        subject:subject,
        html:body,
    })
    }
}