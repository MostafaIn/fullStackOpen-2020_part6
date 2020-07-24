

export const setNotification = msg => {
    return {
        type: 'NOTIFICATION',
        data: msg
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