import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';

const Demo1 = (props) => {
    const [ addedToCart, setAddedToCart ] = useState(false)
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
            count: 0,
            countt: []
        },
        {
            id: 2,
            name: 'One Plus Mobile 1',
            price: '55000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            count: 0,
            countt: []
        },
        {
            id: 3,
            name: 'One Plus Mobile 2',
            price: '59000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwYNLRJHnP4Y7cG9gOXbEYKkLtfVDuVzh8Yg&usqp=CAU',
            count: 0,
            countt: []
        }
    ]

    console.log(props.prod);

    return (
        <div style={{ padding: '110px 30px 30px 30px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    products.map(product => (
                        <div style={prodStyle}>
                            <img style={prodImg} src={product.img} />
                            <div>
                                <p style={textStyle}>{product.name}</p>
                            </div>
                            <div>
                                <p style={textStyle}>{product.price}</p>
                            </div>
                            <div>
                                <button style={btnStyle} onClick={() => props.onIncHandler(product)}>Add To cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.count,
        prod: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncHandler: (product) => {
            // console.log(id);
            dispatch({ type: actionType.INCREMENT, payload: product })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo1)
