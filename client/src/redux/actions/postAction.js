import axios from '../../components/config/axios'

export const startSetPosts = () => dispatch => {
    axios.get(`catchup/posts`, {
        headers: {
            'x-auth': localStorage.getItem('user-auth')
        }
    })
        .then(res => {
            dispatch(setPost(res.data))
        })
        .catch(err => {
            console.log(err)
        })
}

export const startAddPost = () => dispatch => {
    axios.post(`catchup/posts`, {
        headers: {
            'x-auth': localStorage.getItem('user-auth')
        }
    })
    .then(res => {
        dispatch(setPost(res.data))
    })
    .catch(err => {
        console.log(err)
    })
}

export const setPost = posts => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}