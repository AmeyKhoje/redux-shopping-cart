import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';
import { AuthContext } from '../context/context';
import './Cart.scss'

const Cart = (props) => {
    const [products, setProducts] = useState(props.prod)
    const [checkProd, setCheckProd] = useState([])
    const [count, setCount] = useState(1)
    const darkContext = useContext(AuthContext)
    console.log(products);
    const prodStyle = {
        padding: '20px 10px',
        width: '300px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '-5px -5px 22px rgba(255,255,255,0.5), 5px 5px 22px rgba(0,0,0,0.6)',
        margin: '10px auto',
        borderRadius: '5px'
    }

    const prodImg = {
        width: '100%',
        maxWidth: '100%'
    }

    const textStyle = {
        fontSize: '18px',
        margin: '0',
        marginBottom: '8px',
        marginTop: '7px'
    }

    const btnStyle = {
        padding: '7px 15px',
        border: '0',
        borderRadius: '5px',
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.05)',
        backgroundColor: '#f44562',
        fontSize: '16px',
        fontWeight: '600',
        color: '#fff'
    }

    const counter = {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center'
    }

    const counterDiv = {
        margin: '10px',
        padding: '10px',
        height: 'max-content'
    }

    const counterBtn = {
        padding: '5px 10px',
        margin: '10px',
        borderRadius: '5px',
        background: 'red',
        color: '#fff',
        fontWeight: '600',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        height: 'max-content'
    }

    const btnCheckout = {
        padding: '8px 40px',
        margin: '10px auto',
        border: 'none',
        borderRadius: '3px',
        boxShadow: '3px 3px 12px rgba(0,0,0,0.2), -3px -3px 10px rgba(255, 255, 255, 0.2)',
        backgroundColor: 'slategrey',
        fontSize: '18px',
        fontWeight: '600',
        color: '#fff',
        textDecoration: 'none'
    }

    const headText = {
        color: '#fff',
        textAlign: 'center'
    }

    const linkStyle = {
        color: 'red',
        background: '#fff',
        width: 'max-content',
        padding: '7px 15px',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '5px',
        boxShadow: '0px 5px 20px 0px rgba(255, 255, 255, 0.3)'
    }

    let newProd = 0
    const incrementHandler = (product) => {
        if (product.id) {
            setCount(count + 1)
            product.countt.push(count)
        }
        else {
            newProd = 0
        }
    }

    const darkClass = darkContext.isDark ? 'home-dark' : 'home-light'

    const darkProd = darkContext.isDark ? 'prod-dark' : 'prod-light'

    return (
        <div className={` home-page ${darkClass} `}>
            <div className="products-row">
                {
                    props.prod.length <= 0 && (
                        <div className="info-sec">
                            <h1 className="info-sec_text">Nothing in Cart.. Please add items to shop..</h1>
                            <Link className="info-sec_link" to="/">Go To Store</Link>
                        </div>
                    )
                }
                {props.prod.map(product => (
                    <div className={` product-card ${darkProd} `} key={product.id}>
                        <img src={product.img} />
                        <div className="product-card_cont">
                            <div>
                                <h5 className="product-name">{product.name}</h5>
                            </div>
                            <div>
                                <p className="product-price"><span>Price: </span>{product.price}</p>
                            </div>
                            <div className="product-cart_count">
                                <button className="product-cart_count-btn">
                                    -
                                </button>
                                <div className="product-count_num">
                                    {product.countt.length}
                                </div>
                                <button className="product-cart_count-btn" onClick={ () => incrementHandler(product) }>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                props.prod.length > 0 && (
                    <Link to="/checkout" className="btn-checkout" onClick={ () => props.addToCheckoutHandler(products) }>Go To Checkout</Link>
                )
            }
        </div>
    )
}

const mapState = state => {
    return {
        prod: state.products,
        itCount: state.itemCount
    }
}

const mapDispatch = dispatch => {
    return {
        productIncHandler: (product) => {
            console.log(product);
            dispatch({ type: actionType.INC_PROD, payload: product })
        },
        addToCheckoutHandler: (products) => {
            console.log('check', products);
            dispatch({ type: actionType.ADD_TO_CHECKOUT, payload: products })
        }
    }
}

export default connect( mapState, mapDispatch )(Cart)
