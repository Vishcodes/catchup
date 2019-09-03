import axios from '../../components/config/axios'


export const startSetUserList = (name,history) => dispatch => {
    axios.get(`/catchup/search/${name}`, {
        headers: {
          'x-auth': localStorage.getItem('user-auth')
        }
      })
      .then(response => {
        console.log(response.data)
        dispatch(setUserList(response.data))
        history.push('/catchup/users')
      })
}

export const startSetAllFriends = () => dispatch => {
    axios.get(`catchup/friends`,{
      headers: {
        'x-auth': localStorage.getItem('user-auth')
      }
    })
    .then(response => {
      dispatch(setUserList(response.data))
    })
}

export const setUserList = userlist => {
    return {
        type: 'SET_USERLIST',
        payload: userlist
    }
}