import React, { useState, useEffect} from 'react'
import Router from 'next/router'
import { getApiDatas } from '../helpers'
import { ListPaginate, CardScanVa } from '../components'
import jsCookie from 'js-cookie'
import { useUser } from '../hooks'

const Profile = (props) => {
    const { user } = useUser()
    const [checked, setChecked] = useState('scans')
    const [scans, setScans] = useState([])
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if(!user) {
            Router.push('/account')
            return
        }

        const fetchDatas = async() => {
            const response = await getApiDatas(`users/${user.id}`)
            setScans(response.bookmark.scans)
        }

        fetchDatas()
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
            const _scans = await getApiDatas(`users/${user.id}`)
            setScans(_scans.bookmark.scans)
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
                checked === 'settings' &&
                    <div className="settings-container">
                        <p>{user.email}</p>
                        <button onClick={() => handleClickLogout()}>Logout</button>
                    </div>
            }
            {
                checked === 'scans' &&
                <div className="card-container">
                    { scans.length > 0 && scans.map((scan, key) => <CardScanVa key={key} data={scan} isInProfile={true} />) }
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