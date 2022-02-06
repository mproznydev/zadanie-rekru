import React from 'react'
import {
    navigation,
    navigation__item,
    navigation__list,
    navigation__menu,
    logo,
    navigation__socials,
} from './Header.module.scss'
import fbIcon from 'images/fb.svg'
import instaIcon from 'images/insta.svg'

function Header() {
    return (
        <header className={navigation}>
            <ul className={navigation__list}>
                <li className={navigation__item}>
                    <button>
                        <h2 className={logo}>LOGO</h2>
                    </button>
                </li>
                <div className={navigation__menu}>
                    <li className={navigation__item}>
                        <button>
                            <p>Poznaj przestrzeń</p>
                        </button>
                    </li>
                    <li className={navigation__item}>
                        <button>
                            <p>Oferta</p>
                        </button>
                    </li>
                    <li className={navigation__item}>
                        <button>
                            <p>lokalizacja</p>
                        </button>
                    </li>
                    <li className={navigation__item}>
                        <button>
                            <p>Własne biuro</p>
                        </button>
                    </li>
                    <li className={navigation__item}>
                        <button>
                            <p>Kontakt</p>
                        </button>
                    </li>
                </div>
                <div className={navigation__socials}>
                    <li className={navigation__item}>
                        <button>
                            <img src={fbIcon} alt="facebook icon" />
                        </button>
                    </li>
                    <li className={navigation__item}>
                        <button>
                            <img src={instaIcon} alt="instagram icon" />
                        </button>
                    </li>
                </div>
            </ul>
        </header>
    )
}

export default Header
