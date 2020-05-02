import { useState, useEffect } from 'react'
import jsCookie from 'js-cookie'

export const useUser = () => {
    const [user, setUser] = useState(jsCookie.get('user') ? JSON.parse(jsCookie.get('user')) : null)

    // useEffect(() => {
    //     const _user = jsCookie.get('user') ? JSON.parse(jsCookie.get('user')) : null
    //     if(_user)
    //         setUser(_user)
    // }, [])

    return {
        user,
        setUser,
    }
}
