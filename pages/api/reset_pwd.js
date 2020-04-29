import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import bcrypt from 'bcrypt'
import nodeMailer from 'nodemailer'

const ResetHandler = nextConnect();
ResetHandler.use(middleware);

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.mailer_user,
      pass: process.env.mailer_pwd
    }
});

ResetHandler.post(async (req, res) =>  {
    const { body: { email } } = req

    const password = Math.random().toString(36).slice(-8);
    const pwd_hash = await bcrypt.hash(password, 10)

    const update = await req.db.collection("users").updateOne({ email }, { $set: {pwd_hash} })
    if(update.matchedCount === 0)
        return res.json({err: 'Email not found !', status: 400})

    const mailOptions = {
        from: process.env.mailer_user,
        to: email,
        subject: 'IronikaSpace - Your new password',
        text: `This is your new password for login to IronikaSpace : ${password}`
    };
    const mailSent = await transporter.sendMail(mailOptions)
    if(mailSent.response)
        return res.json({status: 200, msg: 'Your new password has been sent !' })
})

export default ResetHandler;