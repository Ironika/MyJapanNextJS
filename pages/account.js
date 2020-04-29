import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import { postApiDatas } from '../helpers'
import homescreen from '../public/img/homescreen3.jpg'
import { Loader } from '../components'

const PATH = {
    'sign-in': 'auth',
    'sign-up': 'users',
    'reset': 'reset_pwd'
}

const Account = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const [checked, setChecked] = useState('sign-in')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const _user = JSON.parse(sessionStorage.getItem('user'))
        if(_user) Router.push('/profile')
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoader(true)
        setError('')
        setMsg('')
        if(checked === 'sign-up' && checkPassword !== password) {
            setLoader(false)
            setError('Your password missmatch checked password !')
            return
        }

        const res = await postApiDatas(PATH[checked], {email, password})
        if(res.status !== 200) {
            setLoader(false)
            setError(res.err)
            return
        }

        if(checked === 'sign-in' || checked === 'sign-up') {
            sessionStorage.setItem('user', JSON.stringify(res.user))
            Router.push('/profile')
        } else {
            setLoader(false)
            setMsg(res.msg)
            setChecked('sign-in')
        }
    }

    return(
        <div className="Account">
            <div className="flex-wrap">
                <fieldset>
                    <img src={homescreen} />
                    <div className="shadow"></div>
                    <form onSubmit={handleSubmit}>
                        <input type="radio" name="rg" id="sign-in" checked={checked === 'sign-in'} onChange={() => setChecked('sign-in')}/>
                        <input type="radio" name="rg" id="sign-up" checked={checked === 'sign-up'} onChange={() => setChecked('sign-up')}/>
                        <input type="radio" name="rg" id="reset" checked={checked === 'reset'} onChange={() => setChecked('reset')}/>

                        <label htmlFor="sign-in">Sign In</label>
                        <label htmlFor="sign-up">Sign Up</label>
                        <label htmlFor="reset">Reset</label>

                        { loader ? <Loader /> :
                            <>
                                <input value={email} className="sign-up sign-in reset" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                <input value={password} className="sign-up sign-in" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                <input value={checkPassword} className="sign-up" type="password" placeholder="Repeat Password" onChange={(e) => setCheckPassword(e.target.value)}/>
                            </>
                        }
                        <button type="submit">Submit</button>
                        {msg && <p className="success">{msg}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Account