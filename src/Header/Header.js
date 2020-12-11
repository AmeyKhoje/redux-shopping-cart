import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthContext } from '../context/context'
import './Header.scss'

const Header = (props) => {
    const contextMode = useContext(AuthContext)
    console.log(contextMode.isDark);
    const headLogo = {
        width: 'max-content',
        marginRight: 'auto',
        color: '#fff'
    }
    const darkHeadClass = contextMode.isDark ? 'header-dark' : 'header-light'
    return (
        <div className={` header ${darkHeadClass} `}>
            <div className="header-cont">
                <div className="header-brand">
                    <h1>Shopping Cart</h1>
                </div>
                <ul className="header-list">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <span>{props.ctr}</span>
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={props.darkMode}>
                            Dark
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapProps = state => {
    return {
        ctr : state.count
    }
}

export default connect(mapProps)(Header)
