import {setStore} from "../reducer/setting";
import axios from 'axios'

export function $httpStore(dispatch, payload) {
    axios.get(`/admin/store/1`)
        .then(res => dispatch(setStore(res.data)))
        .catch(err => console.log(err))
}
