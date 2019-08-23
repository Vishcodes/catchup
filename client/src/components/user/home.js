import React from 'react'
// import { Link } from 'react-router-dom'
// import _ from 'lodash'
import {connect} from 'react-redux'
import MainNav from '../common/mainNav'

class ListPost extends React.Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <MainNav/>
            </div>
        )
    }



}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ListPost)