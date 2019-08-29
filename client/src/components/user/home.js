import React from 'react'
import {connect} from 'react-redux'
import MainNav from '../common/mainNav'
import PostCard from '../common/postCard'
import {startSetPosts} from '../../redux/actions/postAction'
import AddPost from '../common/postForm'
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
                <AddPost/>

                {this.props.posts.map(post => 
                    <PostCard key={post._id}
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
        posts: state.posts,
        userlist: state.userlist
    }
}

export default connect(mapStateToProps, {startSetPosts})(ListPost)