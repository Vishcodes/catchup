import React from 'react'
// import { Link } from 'react-router-dom'
// import _ from 'lodash'
import {connect} from 'react-redux'
import MainNav from '../common/mainNav'
import ImgMediaCard from '../common/postCard'
import {startSetPosts} from '../../redux/actions/postAction'
import SimpleCard from '../common/addPost'
import '../../styleSheet/home.css'


class ListPost extends React.Component{
    componentDidMount(){
        this.props.startSetPosts()
    }
    render(){
        return(
            <div>
                <MainNav/>
                <div className="list">
                <SimpleCard/>

                    {this.props.posts.map(post => 
                        <ImgMediaCard
                            creator={post.creator}
                            title={post.title}
                            body={post.body}
                            image={post.image}
                            createdAt={post.createdAt}
                        />)}
                </div>
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

export default connect(mapStateToProps, {startSetPosts})(ListPost)