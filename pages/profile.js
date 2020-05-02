import React, { useState, useEffect} from 'react'
import Router from 'next/router'
import { getApiDatas } from '../helpers'
import { CardAnime, ListPaginate } from '../components'
import jsCookie from 'js-cookie'

const Profile = (props) => {
    const [user, setUser] = useState({})
    const [checked, setChecked] = useState('scans')
    const [bookmarks, setBookmarks] = useState({})
    const [scans, setScans] = useState([])
    const [animes, setAnimes] = useState([])

    if (process.browser) {
        const _user = jsCookie.get('user') ? JSON.parse(jsCookie.get('user')) : null
        if(!_user) Router.push('/account')
    }

    useEffect(() => {
        const fetchDatas = async(uid) => {
            const { bookmark } = await getApiDatas(`bookmarks/${uid}`)
            setBookmarks(bookmark)
        }
        const _user = jsCookie.get('user') ? JSON.parse(jsCookie.get('user')) : null
        if(_user) {
            setUser(_user)
            fetchDatas(_user.id)
        } else
            Router.push('/account')
    }, [])

    const handleClickLogout = () => {
        jsCookie.remove('user')
        Router.push('/')
    }

    const handleChangeChecked = async (checked) => {
        if(checked === 'animes') {
            const _animes = await getApiDatas('animes', 1, null, user.id, true)
            setAnimes(_animes)
        } else if(checked === 'scans') {
            const _scans = await getApiDatas('scans', 1, null, user.id)
            setScans(_scans)
        }
        setChecked(checked)
    }

    return (
        <div className="Profile">
            <div className="tabs-container">
                <div className="tabs">
                    <input type="radio" id="scans" name="tabs" checked={checked === 'scans'} onChange={() => handleChangeChecked('scans')}/>
                    <label className="tab" htmlFor="scans">Scans{/*<span className="notification">2</span>*/}</label>
                    <input type="radio" id="animes" name="tabs" checked={checked === 'animes'} onChange={() => handleChangeChecked('animes')}/>
                    <label className="tab" htmlFor="animes">Animes</label>
                    <input type="radio" id="settings" name="tabs" checked={checked === 'settings'} onChange={() => handleChangeChecked('settings')}/>
                    <label className="tab" htmlFor="settings">Settings</label>
                    <span className="glider"></span>
                </div>
            </div>
            {
                checked === 'settings' && <button onClick={() => handleClickLogout()}>Logout</button>
            }
            {
                checked === 'scans' &&
                <div>
                    scans
                </div>
            }
            {
                (checked === 'animes' && animes.length > 0) &&
                    <ListPaginate datas={animes} type={'animes'} onlyBookmark={true} />
            }
        </div>
    );
}

export default Profile