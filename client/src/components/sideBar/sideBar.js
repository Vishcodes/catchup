import React from 'react'

class SideBar extends React.Component{
    rende(){
        return(
            <div className="sidebar">
                <div>
                    Add Post
                </div>
                <div>
                    Add Event
                </div>
                <div>
                    New Feed
                </div>
                <div>
                    Friends
                </div>
                <div>
                    Friend Requests
                </div>
                <div>
                    Logout
                </div>
            </div>
        )
    }
}