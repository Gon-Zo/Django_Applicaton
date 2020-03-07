import name from "../../../static/json/name";

export default {
    changeNameByProd(data){
       return setChangeNameByProd(data)
    }
}

let setChangeNameByProd = (data) => {
    return name.product[data]
}
