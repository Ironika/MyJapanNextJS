import React, { useState, useEffect} from 'react'
import Router from 'next/router'

const Profile = (props) => {
    const [user, setUser] = useState({})

    if (process.browser) {
        const _user = JSON.parse(sessionStorage.getItem('user'))
        if(!_user) Router.push('/account')
    }

    useEffect(() => {
        const _user = JSON.parse(sessionStorage.getItem('user'))
        if(!_user) Router.push('/account')
        setUser(_user)
    }, [])

    const handleClickLogout = () => {
        console.log('toto')
        sessionStorage.removeItem('user')
        Router.push('/')
    }

    return (
        <div className="Profile">
            {
                user &&
                <div>
                    <h2>Hello {user && user.email}</h2>
                    <button onClick={() => handleClickLogout()}>Logout</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            }
        </div>
    );
}

export default Profile