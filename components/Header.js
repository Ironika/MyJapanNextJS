import React, { useState } from 'react'
import Link from './Link'
import debounce from "lodash.debounce"
import logo from '../public/img/cerisier.png'

const Header = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    if (process.browser) {
        window.addEventListener('scroll', debounce(() => {
            let scroll = document.documentElement.scrollTop
            if(scroll > 0 && !isScrolling)
                setIsScrolling(true)
            else if (scroll === 0 && isScrolling)
                setIsScrolling(false)
        }, 0))
    }

    const handleClickMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleClickCloseMenu = () => {
        setMenuIsOpen(false)
    }

    let classHeader = 'header'
    if(isScrolling)
        classHeader += ' isScrolling'
    if(menuIsOpen)
        classHeader += ' menuIsOpenHeader'

    return (
        <nav className={classHeader}>
            <ul className="nav">
                <li>
                    <Link href={'/scans'}><a>Scans</a></Link>
                </li>
                <li>
                    <Link href={'/animes'}><a>Animes</a></Link>
                </li>

                <li className="logo">
                    <Link href={'/'}>
                        <img src={logo} className={isScrolling ? 'mini': ''} alt="logo" />
                    </Link>
                </li>

                <li>
                    <Link href={'/news'}><a>News</a></Link>
                </li>
                <li>
                    <Link href={'/programming'}><a>Programming</a></Link>
                </li>

                <li className="burger" onClick={handleClickMenu}>
                    <i className={menuIsOpen ? 'fa fa-close' : "fa fa-bars"}></i>
                </li>

                <li className="profile" onClick={handleClickMenu}>
                    <Link href={'/profile'}><a><i className="fa fa-user"></i></a></Link>
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
                    <Link href={'/programming'}>
                        <a>
                            Programming
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
                <li onClick={handleClickCloseMenu}>
                    <Link href={'/profile'}>
                        <a>
                            Profile
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header