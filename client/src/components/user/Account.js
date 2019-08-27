import React from 'react'
import {connect} from 'react-redux'


function Account(props) {
  
    return(
        <div>
            <p>id:{ props.user._id }</p>
            <p>username:{ props.user.username }</p>
            <p>email:{ props.user.email }</p>
        </div>
    )

 }

const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts
    }
}

 export default connect(mapStateToProps)(Account)