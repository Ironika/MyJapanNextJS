import React, {useState} from 'react'
import Link from 'next/link.js'
import { postApiDatas } from '../helpers'

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await postApiDatas('users', {email, password})
        if(res.err)
            setError(res.err)
        console.log(res)
    }

    return (
        <div className="Signup">
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Signup