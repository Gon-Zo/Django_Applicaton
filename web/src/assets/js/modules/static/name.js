import name from "../../../static/json/name";
import _ from 'lodash'


export default {
    changeNameByProd(data) {
        return setChangeNameByProd(data)
    }
}

let setChangeNameByProd = (data) => {
    console.log("data" , data)

    let t = data.indexOf("_")

    let array = name.product
    let temp = _.sortBy(array, 'order')
    let result = temp.find((f) => f.key === data)
    return result.name
}

let under2camel = function (str) {
    return str.toLowerCase().replace(/(\_[a-z])/g, function (arg) {
        return arg.toUpperCase().replace('_', '');
    });
}

let camel2under=function(str){
    return str.replace(/([A-Z])/g, function(arg){
        return "_"+arg.toLowerCase();
    }).toUpperCase();
}
