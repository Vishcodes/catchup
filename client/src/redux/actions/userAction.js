import axios from '../../components/config/axios'

export const startSetUserList = (name,history) => dispatch => {
  console.log(name)

    axios.get(`catchup/search/${name}`, {
        headers: {
          'x-auth': localStorage.getItem('user-auth')
        }
      })
      .then(response => {
        dispatch(setUserList(response.data))
        history.push('/catchup/users')
        console.log(response)
      })
}

export const setUserList = posts => {
    return {
        type: 'SET_USERLIST',
        payload: posts
    }
}