import React from 'react'
import { connect } from 'react-redux';

const Checkout = (props) => {
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
    return (
        <div style={{ display: 'flex', padding: '60px 20px' }}>
            {props.prod.map(product => (
                <div style={prodStyle}>
                    <img style={prodImg} src={product.img} />
                    <div>
                        <p style={textStyle}>{product.name}</p>
                    </div>
                    <div>
                        <p style={textStyle}>{product.price}</p>
                    </div>
                    <div style={counter}>
                        <div style={counterDiv}>
                            -
                        </div>
                        <div style={counterDiv}>

                        </div>
                        <div style={counterDiv}>
                            +
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapState = state => {
    return {
        prod: state.products
    }
}

export default connect( mapState )(Checkout)
