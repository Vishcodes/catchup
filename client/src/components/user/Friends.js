import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import 'react-toastify/dist/ReactToastify.css';
import MainNav from '../common/mainNav'
import {startSetAllFriends} from '../../redux/actions/userAction'
import FriendCard from '../common/friendCard'
import '../../styleSheet/userList.css'


class ListFriend extends React.Component{

    render(){
        return(
            <div>
                <MainNav/>
              
                {
                    !_.isEmpty(this.props.user.friends) ? (
                        <div className="userlist">
                            {this.props.userlist.map(user => 
                                <FriendCard
                                    id={user._id}
                                    key={user._id}
                                    username={user.username}
                                    friends={user.friends}
                                    
                                />
                            )}
                        </div>
                    ) : (
                        <div className="message">
                            No Friends
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
        userlist: state.userlist
    }
}

export default connect(mapStateToProps, {startSetAllFriends})(ListFriend)