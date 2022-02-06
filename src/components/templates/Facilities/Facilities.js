import React from 'react'
import {
    ficilitiesWrapper,
    gridWrapper,
    titleWrapper,
    title,
    title__line,
    facilitie,
    facilitie__icon,
    facilitie__description,
    button,
} from './Facilities.module.scss'
import Desk from 'images/svgs/desk.svg'
import Coffe from 'images/svgs/coffe.svg'
import Drawers from 'images/svgs/drawers.svg'
import People from 'images/svgs/people.svg'
import Sits from 'images/svgs/sits.svg'
import Wallet from 'images/svgs/wallet.svg'
import Wifi from 'images/svgs/wifi.svg'

function Facilities() {
    return (
        <div className={ficilitiesWrapper}>
            <div className={gridWrapper}>
                <div className={titleWrapper}>
                    <h1 className={title}>Lorem ipsum dolor sit, amet conse</h1>
                    <div className={title__line}></div>
                </div>
                <div className={facilitie}>
                    <Desk className={facilitie__icon}></Desk>
                    <p className={facilitie__description}>
                        Lorem ipsum dolor sit.
                    </p>
                </div>
                <div className={facilitie}>
                    <Coffe className={facilitie__icon}></Coffe>
                    <p className={facilitie__description}>Lorem, ipsum.</p>
                </div>
                <div className={facilitie}>
                    <Drawers className={facilitie__icon}></Drawers>
                    <p className={facilitie__description}>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className={facilitie}>
                    <People className={facilitie__icon}></People>
                    <p className={facilitie__description}>Lorem, ipsum.</p>
                </div>
                <div className={facilitie}>
                    <Sits className={facilitie__icon}></Sits>
                    <p className={facilitie__description}>
                        Lorem, ipsum dolor.
                    </p>
                </div>
                <div className={facilitie}>
                    <Wallet className={facilitie__icon}></Wallet>
                    <p className={facilitie__description}>Lorem, ipsum.</p>
                </div>
                <div className={facilitie}>
                    <Wifi className={facilitie__icon}></Wifi>
                    <p className={facilitie__description}>Lorem, ipsum.</p>
                </div>
            </div>
            <button className={button}>
                <span>DOWIEDŹ SIĘ WIĘCEJ</span>
                <i className="bi bi-arrow-right"></i>
            </button>
        </div>
    )
}

export default Facilities
