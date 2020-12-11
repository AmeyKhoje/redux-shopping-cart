import * as actionType from './actions'

const initialState = {
    count: 0,
    products: [],
    itemCount: 0,
    checkoutProducts: [],
    res: '',
    falseAction: false
}

const reducerFunc = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case actionType.INCREMENT:
            const check_duplicate = state.products.find(product => product.id === action.payload.id)

            if (check_duplicate) {
                return {
                    ...state,
                    falseAction: state.falseAction = true,
                    res: state.res = 'This item already added to cart'
                }

            }
            else {
                return {
                    ...state,
                    count: state.count + 1,
                    products: state.products.concat(action.payload),
                    falseAction: state.falseAction = false,
                    res: state.res = 'Successfully added to cart!!'
                }
            }

        case actionType.INC_PROD:
            return {
                ...state,
                itemCount: state.itemCount + 1
            }
        case actionType.ADD_TO_CHECKOUT:
            state.checkoutProducts.splice(0, state.checkoutProducts.length)
            const newArray = state.checkoutProducts.concat(action.payload)
            return {
                ...state,
                checkoutProducts: newArray
            }
    }
    return state;
}

export default reducerFunc
// state.products.concat(action.payload)
