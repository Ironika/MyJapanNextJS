import React, { useState } from 'react';
import Link from '../Link/Link';
import { useRouter } from 'next/router'

import logo from '../../public/img/cerisier.png'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const router = useRouter()

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
                    <i className="fas fa-bars"></i>
                </li>
            </ul>
            <ul className={menuIsOpen ? 'nav-mobile menuIsOpen' : 'nav-mobile'}>
                <li>
                    <Link href={'/'} exact={true} onClick={(e) => setMenuIsOpen(false)}>
                        <a>
                            Home
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/news'} onClick={(e) => setMenuIsOpen(false)}>
                        <a>
                            News
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/scans'} onClick={(e) => setMenuIsOpen(false)}>
                        <a>
                            Scans
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/animes'} onClick={(e) => setMenuIsOpen(false)}>
                        <a>
                            Animes
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Header;