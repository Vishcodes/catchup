import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import MainNav from '../common/mainNav'
import {startSetPosts} from '../../redux/actions/postAction'
import UserCard from '../common/userCard'
import '../../styleSheet/userList.css'


class FriendReq extends React.Component{
    
    
componentDidMount(){
    console.log(this.props)
}
    render(){
        return(
            <div>
                <MainNav/>
                {
                    !_.isEmpty(this.props.user.friendrequests) ? (
                        <div className="userlist">
                            {this.props.user.friendrequests.map(user => 
                                <UserCard
                                    id={user._id}
                                    key={user._id}
                                    title={user.username}
                                    friends={user.friends}

                                />
                            )}
                        </div>
                    ) : (
                        <div className="message">
                            No Friends yet
                        </div>
                    )
                }
                
            </div>
        )
    }



}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts,
        userlist: state.userlist
    }
}

export default connect(mapStateToProps, {startSetPosts})(FriendReq)