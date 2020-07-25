

export const setNotification = (msg, time) => {
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'NOTIFICATION',
                data: ''
            });
        }, time * 500);

        dispatch({
            type: 'NOTIFICATION',
            data: msg
        })
    }
}


const reducer = (state = null , action) => {
    switch (action.type) {
        case 'NOTIFICATION':
            return state = action.data

        default:
            return state
    }
}

export default reducer