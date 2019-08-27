import React from 'react'
import {connect} from 'react-redux'
import MainNav from '../common/mainNav'
import {startSetUserList} from '../../redux/actions/userAction'
import ImgMediaCard from '../common/userCard'
import '../../styleSheet/userList.css'


class ListUser extends React.Component{
    

    render(){
        return(
            <div>
                <MainNav/>
                <div className="userlist">
                {this.props.userlist.map(user => 
                    <ImgMediaCard
                        key={user._id}
                        title={user.username}
                        friends={user.createdAt}
                    />
                )}
                </div>
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