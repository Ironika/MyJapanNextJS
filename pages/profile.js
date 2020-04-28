import React, { useState, useEffect} from 'react'
import Router from 'next/router'

const Profile = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const _user = JSON.parse(sessionStorage.getItem('user'))
        if(!_user) Router.push('/signin')
        setUser(_user)
    }, [])

    return (
        <div className="Profile">
            <h2>Hello {user && user.email}</h2>
        </div>
    );
}

export default Profile