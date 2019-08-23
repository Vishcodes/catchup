import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'




const configureStore = () => {
    const state = createStore(combineReducers({
        user: authReducer
        
    
        // posts: postReducer
    }), applyMiddleware(thunk))
    return state
}

export default configureStore