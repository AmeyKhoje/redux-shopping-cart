import React, { useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../components/Toast/Toast'
import './Demo1.scss';
import { AuthContext } from '../context/context'


const Demo1 = (props) => {
    const [ addedToCart, setAddedToCart ] = useState(false)

    const [ toastShow, setToastShow ] = useState(false)

    const contextMode = useContext(AuthContext);

    const prodStyle = {
        padding: '20px 10px',
        width: '25%',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '-5px -5px 22px rgba(255,255,255,0.5), 5px 5px 22px rgba(0,0,0,0.6)',
        margin: '10px 10px',
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
        boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.09)',
        backgroundColor: '#f44562',
        fontSize: '16px',
        fontWeight: '600',
        color: '#fff'
    }

    const products = [
        {
            id: 1,
            name: 'One Plus Mobile',
            price: '50000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            countt: [0],
            get count() {
                return this.countt.length
            }
        },
        {
            id: 2,
            name: 'One Plus Mobile 1',
            price: '55000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            countt: [0],
            get count() {
                return this.countt.length
            }
        },
        {
            id: 3,
            name: 'One Plus Mobile 2',
            price: '59000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            countt: [0],
            get count() {
                return this.countt.length
            }
        },
        {
            id: 4,
            name: 'One Plus Mobile 3',
            price: '65000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            countt: [0],
            get count() {
                return this.countt.length
            }
        }
    ]

    products.map (prod => {
        console.log(prod.cout);
    })

    console.log(props.prod);
    let text = ''
    const handleAddToCart = (product) => {
        setToastShow(true)
        props.onIncHandler(product)
    }

    const toast_class = toastShow ? 'show' : 'hide'

    const darkClass = contextMode.isDark ? 'home-dark' : 'home-light'

    const darkProd = contextMode.isDark ? 'prod-dark' : 'prod-light'

    return (
        <div className={` home-page ${darkClass} `}>
            <p>
                {
                    props.falseRes ? ( props.res && <Toast show Text={`${props.res}`} />) : (props.res && <Toast show Text={`${props.res}`} />)
                }
            </p>
            <div className="products-row">
                {
                    products.map(product => (
                        <div className={` product-card ${darkProd} `} key={product.id}>
                            <img src={product.img} />
                            <div className="product-card_cont">
                                <div>
                                    <h5 className="product-name">{product.name}</h5>
                                </div>
                                <div>
                                    <p className="product-price"><span>Price: </span>{product.price}</p>
                                </div>
                                <div>
                                    <button className="cart-btn" onClick={() => handleAddToCart(product)}>
                                        {
                                            !addedToCart ? 'Add To cart' : 'Added To Cart'
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.count,
        prod: state.products,
        falseRes: state.falseAction,
        res: state.res
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncHandler: (product) => {
            dispatch({ type: actionType.INCREMENT, payload: product })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo1)
