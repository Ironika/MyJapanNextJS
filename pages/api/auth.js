import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import bcrypt from 'bcrypt'

const AuthHandler = nextConnect();
AuthHandler.use(middleware);

AuthHandler.post(async (req, res) =>  {
    const { body: { email, password } } = req
    const user = await req.db.collection('users').findOne({email})
    if(user) {
        const matchPwd = await bcrypt.compare(password, user.pwd_hash)
        if(matchPwd)
            return res.json({status: 200, user: {id: user._id, email: user.email} })
        return res.json({err: 'Password not match', status: 401})
    } else
        return res.json({err: 'Email not found', status: 400})
})

export default AuthHandler;