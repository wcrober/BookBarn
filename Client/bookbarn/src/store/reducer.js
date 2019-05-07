const initiateState ={
    isAuthenticated:false
}

const reducer = (state = initiateState, action) => {
    switch(action.type){
        case 'ON_AUTHENTICATED':
        return {
            ...state,
            isAuthenticated:action.token != null ? true :false
        }
    }
    return state
    }

    export default reducer 
