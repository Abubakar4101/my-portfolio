
import {transporter} from "@/lib/nodemailer";

export default function handler(req, res) {
  if(req.method === 'POST')
  {
    const data = req.body;
    const htmlMessage =
        `<div style="display: grid; background-color: #f5f5f5; color: #1c1c1c; width: 40%; margin: auto;padding: 20px">
            <h2 style="text-align: center">Subject: ${data.subject}</h2>
            <p style="column-span: all"><b>Name:</b> ${data.name}</p>
            <p style="column-span: all"><b>Email:</b> ${data.email}</p>
            <p style="column-span: all"><b>Message:</b> ${data.message}</p>
        </div>`
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: 'Bad Request' });
    }
    try {
      transporter.sendMail({
        sender: data.email,
        to: 'dev.abubakarsiddique@gmail.com',
        from: data.email,
        replyTo: data.email,
        subject: data.subject,
        html: htmlMessage
      }).then(() => {
        return res.status(200).json({ message: 'Success' });
      })
    }
    catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  else
    return res.status(400).json({ message: 'Bad Request' });

}
