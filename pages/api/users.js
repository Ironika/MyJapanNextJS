import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import bcrypt from 'bcrypt'

const UsersHandler = nextConnect();
UsersHandler.use(middleware);

UsersHandler.get(async (req, res) =>  {
    req.db.collection('users').find({}).toArray(function(err, users) {
        if (err) throw err
        if(users) return res.json({status: 200, users})
        return res.json({status: 400, err: 'An error Occured'})
    });
})

UsersHandler.post(async (req, res) =>  {
    const { body: { email, password } } = req
    if(!email || !password)
        return res.json({status: 400, err: 'Email & password are required'})

    const exist = await req.db.collection('users').countDocuments({ email })
    if (exist > 0)
        return res.json({err: 'Email already exist !', status: 400})

    const pwd_hash = await bcrypt.hash(password, 10)

    const response = await req.db.collection('users').insertOne({email, pwd_hash})
    if(response) {
        const user = await req.db.collection('users').findOne({email})
        return res.json({status: 200, user: {id: user._id, email: user.email}})
    }
    return res.json({status: 400, err: 'An error Occured !'})
});

export default UsersHandler;