import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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
    }), compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    return state
}

export default configureStore