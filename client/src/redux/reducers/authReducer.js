const userReducer = (state ={}, action) => {
    switch(action.type){
        case 'AUTHENTICATE_USER':
            return {...action.payload}
        case 'SHOWUSER':
            return {...action.payload}
        default: 
            return {...state}
    }
}

export default userReducer