import axios from '../../components/config/axios'
import { toast } from 'react-toastify'

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

export const startAddFriend = (id, history) => dispatch => {
    axios.post(`catchup/add/${id}`,{},{
      headers: {
        'x-auth': localStorage.getItem('user-auth')
      }
    })
    .then(response => {
        dispatch(setUser(response.data))
        toast.success("Request sent successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60
        })
        history.push('/catchup/users')
    })
    .catch(err => {
        toast.error("Request could not be sent", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60
        })
    })
}

export const startRemoveFriend = (id, history) => dispatch => {
    console.log(id)
    axios.post(`catchup/cancel/${id}`,{},{
      headers: {
        'x-auth': localStorage.getItem('user-auth')
      }
    })
  
    .then(response => {
        console.log(response.data)
        dispatch(setUser(response.data))
        toast.success("Request Cancelled", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60
        })
        history.push('/catchup/users')
    })
    .catch(err => {
      (console.log(err))
        toast.error("Request could not be cancelled", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 60
        })
    })
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



