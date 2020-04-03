
export const setProducts = (data) => ({type: 'product/setProducts', data: data});

export const setProduct = (data) => ({type: "product/setProduct", data: data});

export const isOpenProd = () => ({type : 'product/isOpen'});

export const setType = (data) => ({type : "product/setMethod" , data : data});

// export const setIsOpenToCategory = () => ({type : "category/isOpen" });

// export const setCategory = (data) =>({type : "category/setData" , data : data});

const initProduct = {
    isOpen: false,
    isCategory : false,
    methodType : '',
    products: [],
    product: {},
    category : {},
};

const productReducer = (state = initProduct, action) => {
    switch (action.type) {
        case "product/setProducts":
            state.products = action.data;
            break;
        case "product/setProduct":
            state.product = action.data;
            break;
        case "product/isOpen":
            state.isOpen = !state.isOpen;
            break;
        case "product/setMethod":
            state.methodType = action.data;
            break;
    }
    return state;
};

export default productReducer
