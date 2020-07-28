import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
    const headLogo = {
        width: 'max-content',
        marginRight: 'auto',
        color: '#fff'
    }
    return (
        <div style={{ width: '100%', position: 'fixed', top: '0', backgroundColor: '#433f79', padding: '2px 15px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={headLogo}>
                    <h1>Shopping Cart</h1>
                </div>
                <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'center', padding: '7px 20px', width: 'max-content', marginLeft: 'auto' }}>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/" style={{ position: 'relative', textShadow: '3px 3px rgba(0,0,0,0.2)', boxShadow: '-2px -2px 5px rgba(255, 255, 255, 0.5), 4px 4px 5px rgba(0, 0, 0, 0.5)',  borderRadius: '5px', padding: '7px 10px', color: '#fff', fontSize: '20px', fontWeight: '600', textDecoration: 'none', backgroundColor: 'red' }}>
                            Home
                        </Link>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <Link to="/cart" style={{ position: 'relative', textShadow: '3px 3px rgba(0,0,0,0.2)', boxShadow: '-2px -2px 5px rgba(255, 255, 255, 0.5), 4px 4px 5px rgba(0, 0, 0, 0.5)', borderRadius: '5px', padding: '7px 10px', color: '#fff', fontSize: '20px', fontWeight: '600', textDecoration: 'none', backgroundColor: 'red' }}>
                            <span style={{ position: 'absolute', backgroundColor: '#fff', padding: '3px 6px', color: '#000999', fontSize: '14px', fontWeight: '500', textDecoration: 'none', borderRadius: '50%', top: '-5px', right: '-10px' }}>{props.ctr}</span>
                            Cart
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
