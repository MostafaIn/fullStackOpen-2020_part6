
export const filterList = value => {
    return {
        type: 'SET_FILTER',
        data: value
    }
}


const reducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_FILTER': 
            return state = action.data
    
        default:

        return state
    }
}
export default reducer
