import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import postReducer from '../reducers/postReducer'
import userReducer from '../reducers/userReducer'




const configureStore = () => {
    const state = createStore(combineReducers({
        user: authReducer,
        posts: postReducer,
        userlist: userReducer
        
    
        // posts: postReducer
    }), applyMiddleware(thunk))
    return state
}

export default configureStore