import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import MainNav from '../common/mainNav'
import {startSetUserList} from '../../redux/actions/userAction'
import UserCard from '../common/userCard'
import '../../styleSheet/userList.css'


class ListUser extends React.Component{
    

    render(){
        return(
            <div>
                <MainNav/>
                {
                    !_.isEmpty(this.props.userlist) ? (
                        <div className="userlist">
                            {this.props.userlist.map(user => 
                                <UserCard
                                    key={user._id}
                                    title={user.username}
                                    friends={user.createdAt}
                                />
                            )}
                        </div>
                    ) : (
                        <div className="message">
                            No Profile found
                        </div>
                    )
                }
                
            </div>
        )
    }



}
const mapStateToProps = (state) => {
    return {
        userlist: state.userlist      
    }
}

export default connect(mapStateToProps, {startSetUserList})(ListUser)