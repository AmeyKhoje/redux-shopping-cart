import * as actionType from './actions'

const initialState = {
    count: 0,
    products: [],
    itemCount: 0,
    checkoutProducts: []
}

const reducerFunc = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                products: state.products.concat(action.payload)
            }
        case actionType.INC_PROD:
            return {
                ...state,
                itemCount: state.itemCount + 1,
                checkoutProducts: state.checkoutProducts.concat(action.payload)
            }
    }
    return state;
}

export default reducerFunc
// state.products.concat(action.payload)
