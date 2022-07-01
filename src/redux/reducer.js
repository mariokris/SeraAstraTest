const initialState = {
    dataMovie: {},
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SET_DATA'){
        return{
            ...state,
            dataMovie: action.inputValue,
        }
    }
    return state;
}

export default reducer;