import React from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu'
import {logoutUser} from '../../redux/actions/authAction'
import {startSetAllFriends} from '../../redux/actions/userAction'




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    height: 'auto'
  },
});

function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const handleLogout = () => {
    props.logoutUser(props.history)
  }
  
  const handleFriends = () => {
    // const userId = props.user._id
    props.startSetAllFriends(props.user._id)
  }


const sidebarItems = [ 
  {
    text: 'New feed', icon: <FiberNewIcon color="primary" />, link: '/catchup/home'
  },
  {
    text: 'Add Post', icon: <AddPhotoAlternateIcon color="primary"/>, link: '/catchup/home'
  },
  {
    text: 'Friends', icon: <GroupIcon color="primary" onClick={handleFriends}/>, link: '/catchup/friends'
  },
  {
    text: 'Friend Requests', icon: <PersonAddIcon color="primary" />, link: '/catchup/friendreq'
  }
]

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {sidebarItems.map((item, index) => (
          <Link to={item.link} style={{textDecoration: 'none', color: 'black', marginBottom: '200' }} key={item.text}>
          <ListItem button  >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text) => (
          <ListItem button key={text}  onClick={handleLogout} >
            <ListItemIcon><ExitToAppIcon color="primary" /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <div>
      <span>
        <MenuIcon
          fontSize="large"
          onClick={toggleDrawer('right', true)}
          style={{ cursor: 'pointer' }}
        >Open Right</MenuIcon>
      </span>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  userlist: state.userlist
})

export default connect(mapStateToProps, {logoutUser, startSetAllFriends})(withRouter(SideBar))
