import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../store/actions'

const Cart = (props) => {
    const [products, setProducts] = useState(props.prod)
    const [checkProd, setCheckProd] = useState([])
    const [count, setCount] = useState(0)
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
        margin: '5px auto',
        border: 'none',
        borderRadius: '3px',
        boxShadow: '3px 3px 12px rgba(0,0,0,0.2), -3px -3px 10px rgba(255, 255, 55, 0.5)',
        backgroundColor: 'slategrey',
        fontSize: '18px',
        fontWeight: '600',
        color: '#fff'
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


    return (
        <>
            <div style={{ display: 'flex', padding: '110px 20px 30px 20px' }}>
                {
                    props.prod.length <= 0 && (
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <h1 style={headText}>Nothing in Cart.. Please add items to shop..</h1>
                            <Link to="/" style={linkStyle}>Go To Store</Link>
                        </div>
                    )
                }
                {props.prod.map(product => (
                    <div style={prodStyle} key={product.id}>
                        <img style={prodImg} src={product.img} />
                        <div>
                            <p style={textStyle}>{product.name}</p>
                        </div>
                        <div>
                            <p style={textStyle}>{product.price}</p>
                        </div>
                        <div style={counter}>
                            <div style={counterBtn}>
                                -
                            </div>
                            <div style={counterDiv}>
                                {product.countt.length}
                            </div>
                            <div style={counterBtn} onClick={ () => incrementHandler(product) }>
                                +
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                props.prod.length > 0 && (
                    <button type="button" style={btnCheckout}>Checkout</button>
                )
            }
        </>
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
        }
    }
}

export default connect( mapState, mapDispatch )(Cart)
