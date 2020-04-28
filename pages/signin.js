import React, {useState} from 'react'
import Link from 'next/link.js'
import Router from 'next/router'
import { postApiDatas } from '../helpers'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await postApiDatas('auth', {email, password})
        if(res.status !== 200)
            return setError(res.err)
        sessionStorage.setItem('user', JSON.stringify(res.user))
        Router.push('/profile')
    }

    return (
        <div className="SignIn">
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignIn