import React, { useState } from 'react'
import Link from './Link'

import logo from '../public/img/cerisier.png'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <nav className="header">
            <ul className="nav">
                <li>
                    <Link href={'/'}><a>Home</a></Link>
                </li>
                <li>
                    <Link href={'/news'}><a>News</a></Link>
                </li>

                <li className="logo bounceIn"><img src={logo} alt="logo" /></li>

                <li>
                    <Link href={'/scans'}><a>Scans</a></Link>
                </li>
                <li>
                    <Link href={'/animes'}><a>Animes</a></Link>
                </li>
                <li className="burger" onClick={(e) => setMenuIsOpen(!menuIsOpen)}>
                    <i className="fa fa-bars"></i>
                </li>
            </ul>
            <ul className={menuIsOpen ? 'nav-mobile menuIsOpen' : 'nav-mobile'}>
                <li onClick={(e) => setMenuIsOpen(false)}>
                    <Link href={'/'}>
                        <a>
                            Home
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={(e) => setMenuIsOpen(false)}>
                    <Link href={'/news'}>
                        <a>
                            News
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={(e) => setMenuIsOpen(false)}>
                    <Link href={'/scans'}>
                        <a>
                            Scans
                            <i className="fa fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li onClick={(e) => setMenuIsOpen(false)}>
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