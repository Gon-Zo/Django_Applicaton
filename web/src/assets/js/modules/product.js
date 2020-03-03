// import {} from 'react-async'

export const onProduct = (data) => ({type: 'product/test', data: data})

const initProduct = {
    isOpen: false,
    products: [],
    product: {},
}

const productReducer = (state = initProduct, action) => {
    switch (action.type) {
        case "product/test":
            state.products = action.data
            break;
        case "product/test1":
            state.products = action.data
            break;
    }
    return state;
}

export default productReducer
