import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainNav from '../common/mainNav'
import {startSetUserList} from '../../redux/actions/userAction'
import UserCard from '../common/userCard'
import '../../styleSheet/userList.css'


class ListUser extends React.Component{

    render(){
        return(
            <div>
                <MainNav/>
                <ToastContainer
                    position="bottom-right"
                    autoClose={ 3000 }
                    hideProgressBar={ false }
                    newestOnTop
                    closeOnClick
                    rtl={ false }
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    draggablePercent={ 60 }
                />
                {
                    !_.isEmpty(this.props.userlist) ? (
                        <div className="userlist">
                            {this.props.userlist.map(user => 
                                <UserCard
                                    id={user._id}
                                    key={user._id}
                                    username={user.username}
                                    friends={user.friends}
                                    
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