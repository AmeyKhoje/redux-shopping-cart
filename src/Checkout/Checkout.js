import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Select from 'react-select'

const Checkout = (props) => {
    const [ currency, setCurrency ] = useState({value: 'rupee', label: 'Rupee'})

    const [ finalPrice, setFinalPrice ] = useState(0)
    // console.log(price);
    const currencyOpt = [
        { value: 'rupee', label: 'Rupee' },
        { value: 'pound', label: 'Pound' },
        { value: 'usd', label: 'USD' }
    ]

    const prodStyle = {
        padding: '10px',
        width: '300px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0px 3px 8px 0px rgba(0,0,0,0.1)',
        margin: '10px 10px'
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
        padding: '10px'
    }

    const finalPriceText = {
        color: '#fff',
        fontSize: '20px',
        fontWeight: '600',
        textAlign: 'center'
    }

    const makePayment = {
        backgroundColor: 'red',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        border: 'none',
        padding: '8px 20px',
        borderRadius: '3px',
        cursor: 'pointer'
    }

    const textStyled = {
        fontSize: '22px',
        margin: '0 auto',
        padding: '5px 7px',
        borderRadius: '5px',
        color: '#fff',
        marginBottom: '7px',
        backgroundColor: '#c11776',
        width: 'max-content'
    }

    const btnGoStore = {
        border: '0',
        outline: 'none',
        boxShadow: '0px 3px 5px 0px rgba(255, 255, 255, 0.2)',
        textDecoration: 'none',
        backgroundColor: '#3456a7',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '4px',
        margin: '10px 0',
        position: 'relative',
        fontSize: '20px'
    }

    const arrCount = []
    // let finalPrice = 0
    useEffect(() => {
        props.prod.map (prod => {
            arrCount.push(prod.count * prod.price)
            // finalPrice = arrCount.reduce((a, b) => a + b, 0)
            setFinalPrice(arrCount.reduce((a, b) => a + b, 0))
        })
    },[])

    const currencyChangeHandler = (currency, price) => {
        setCurrency({ value: currency.value, label: currency.label })
        switch(currency.value){
            case 'rupee':
                setFinalPrice(finalPrice)
            case 'usd':
                const usdVal = finalPrice
                setFinalPrice(usdVal / 70)
            case 'pound':
                const poundVal = finalPrice
                setFinalPrice(poundVal / 97)

        }
    }

    console.log(currency.value);

    return (
        <React.Fragment>
            <div style={{ display: 'flex', padding: '110px 20px 30px 20px' }}>
                {props.prod.map(product => (
                    <div style={prodStyle}>
                        <img style={prodImg} src={product.img} />
                        <div>
                            <p style={textStyle}>{product.name}</p>
                        </div>
                        <div>
                            <p style={textStyle}>{product.price} x {product.count}</p>
                        </div>
                    </div>
                ))}
            </div>
            {
                props.prod.length > 0 ? <div>
                    <div>
                      <p style={finalPriceText}>Total Checkout Amount: <span> {
                              finalPrice
                          } </span></p>
                    </div>
                    <div>
                      <button style={makePayment} type="button">Make Payment</button>
                    </div>
                </div> :
                <div>
                    <p style={textStyled}>You Don't Have Any Products In Cart...</p>
                    <p style={textStyled}>Do Shop With Us, Add Products To Cart, Go To Store</p>
                    <p style={textStyled}>Enjoy Shopping</p>
                    <div style={{ padding: '10px 0' }}>
                        <Link to="/" style={btnGoStore}>Go To Store</Link>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

// <div>
//     <div style={{ width: '30%', margin: 'auto' }}>
//       <Select defaultValue={currency} value={currency} onChange={currencyChangeHandler} options={currencyOpt} />
//     </div>
// </div>
//

const mapState = state => {
    return {
        prod: state.checkoutProducts
    }
}

export default connect( mapState )(Checkout)
