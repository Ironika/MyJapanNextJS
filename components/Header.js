import React, { useState } from 'react'
import Link from './Link'
import debounce from "lodash.debounce"
import logo from '../public/img/cerisier.png'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [isMini, setIsMini] = useState(false)

    if (process.browser) {
        window.addEventListener('scroll', debounce(() => {
            let scroll = document.documentElement.scrollTop
            if(scroll > 0 && !isMini)
                setIsMini(true)
            else if (scroll === 0 && isMini)
                setIsMini(false)
        }, 0))
    }

    const handleClickMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleClickCloseMenu = () => {
        setMenuIsOpen(false)
    }

    return (
        <nav className="header">
            <ul className="nav">
                {/* <li>
                    <Link href={'/'}><a>Home</a></Link>
                </li> */}
                <li>
                    <Link href={'/newsdev'}><a>Dev</a></Link>
                </li>
                <li>
                    <Link href={'/news'}><a>News</a></Link>
                </li>

                <li className="logo">
                    <Link href={'/'}>
                        <img src={logo} className={isMini ? 'mini': ''} alt="logo" />
                    </Link>
                </li>

                <li>
                    <Link href={'/scans'}><a>Scans</a></Link>
                </li>
                <li>
                    <Link href={'/animes'}><a>Animes</a></Link>
                </li>

                <li className="burger" onClick={handleClickMenu}>
                    <i className="fa fa-bars"></i>
                </li>
            </ul>
            <ul className={menuIsOpen ? 'nav-mobile menuIsOpen' : 'nav-mobile'}>
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/'}>
                        <a>
                            Home
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/newsdev'}>
                        <a>
                            Dev
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/news'}>
                        <a>
                            News
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/scans'}>
                        <a>
                            Scans
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/animes'}>
                        <a>
                            Animes
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header