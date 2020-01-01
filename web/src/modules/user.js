const CHECK_SUCCESS = 'user/LOGIN_SUCCESS';
const CHECK_FALL = 'user/LOGIN_FALL';


let token = localStorage.getItem("Token");

const loginYn = token !== null;

const users = (state = loginYn, action) => {
    switch (action.type) {
        case CHECK_SUCCESS :
            // Login Check to Success
            return state = true;
        case CHECK_FALL :
            // Login Check to fall
            return state = false;
        default:
            return state;
    }
};

export default users;
