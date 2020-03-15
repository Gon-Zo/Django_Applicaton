let SETTINGDATA = "setting/setData"

export const setStore = (data) => ({type: SETTINGDATA, data: data})

let initSetting = {
    store: {}
};

const settingReducer = (state = initSetting, action) => {
    switch (action.type) {
        case SETTINGDATA :
            state.store = action.data
            break;
    }
    return state
}

export default settingReducer
