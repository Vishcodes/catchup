import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import MainNav from '../common/mainNav'
import {StartSetUser} from '../../redux/actions/authAction'
import FriendCard from '../common/friendCard'
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
                                <FriendCard
                                    id={this.props.userlist._id}
                                    key={user._id}
                                    name={this.props.user.username}
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

export default connect(mapStateToProps, {StartSetUser})(FriendReq)