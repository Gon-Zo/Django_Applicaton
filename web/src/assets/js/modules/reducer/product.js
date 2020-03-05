// import {} from 'react-async'

export const setProducts = (data) => ({type: 'product/setProducts', data: data})

export const setProduct = (data) => ({type: "product/setProduct", data: data})

export const onOpen = () => ({type : 'product/isOpen'})

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
        case "product/setProduct":
            state.product = action.data
            break;
        case "product/isOpen":
            state.isOpen = !state.isOpen
            break;
    }
    return state;
}

export default productReducer
