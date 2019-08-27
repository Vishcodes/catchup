import axios from '../../components/config/axios'

export const registerNewUser = (data, history) => dispatch => {
    axios.post(`catchup/register`, data)
        .then(res => {
            localStorage.setItem('user-auth', res.data.response.token)
            dispatch(setUser(res.data.response.user))
            history.push(`/catchup/home`)
        })
        .catch(err => console.log(err))
}

export const loginUser = (data, history) => dispatch => {   
    axios.post(`catchup/login`, data)
        .then(res => {
            localStorage.setItem('user-auth', res.data.response.token)
            dispatch(setUser(res.data.response.user))
            history.push(`/catchup/home`)
        })
        .catch(err => console.log(err))
}

export const logoutUser = history => dispatch => {
    axios.delete('catchup/logout',{
        headers: {
            'x-auth': localStorage.getItem('user-auth')
        }
    })
    .then( () => {
        localStorage.removeItem('user-auth')
        dispatch(setUser({}))
        history.push(`/catchup`)
    })
    .catch( err => console.log(err))
}


export const setUser = user => {
    return {
        type: 'AUTHENTICATE_USER',
        payload: user
    }
}

// account

export const StartSetUser = () => {
    return (dispatch) => {
        axios.get('/catchup/account', {
            headers: {
                'x-auth': localStorage.getItem('user-auth')
            }
        })
        .then((response) => {
            dispatch(setUser(response.data))
        })
    }
}



