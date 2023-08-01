import nodemailer from 'nodemailer';
const email = 'dev.abubakarsiddique@gmail.com';
const pass = 'bfohvtcqkhpijhqh';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    },
});
