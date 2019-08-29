import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import MainNav from '../common/mainNav'
import {startSetPosts} from '../../redux/actions/postAction'
import UserCard from '../common/userCard'
import '../../styleSheet/userList.css'


class Friends extends React.Component{
    
    
componentDidMount(){
    console.log(this.props)
}
    render(){
        return(
            <div>
                <MainNav/>
                {
                    !_.isEmpty(this.props.user.friends) ? (
                        <div className="userlist">
                            {this.props.user.friends.map(user => 
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

export default connect(mapStateToProps, {startSetPosts})(Friends)