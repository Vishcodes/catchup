import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import defaultImg from '../../images/user3.jpg'
import { connect } from 'react-redux'
import { startAddFriend,startRemoveFriend } from '../../redux/actions/authAction';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import _ from 'lodash'

const useStyles = makeStyles({
  card: {
    margin: '3rem 0',
    width: '20rem',
    height: '25rem'
  },
});

function UserCard(props) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    const id = e.target.id
    console.log(id)
    props.startAddFriend(id)
  }

  const handleCancel = (e) => {
    const id = e.target.id
    console.log(id)
    props.startRemoveFriend(id)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={ defaultImg }
          title="Contemplative Reptile"
          background-size= "cover"
        />
        <CardContent>
    
          <Typography gutterBottom variant="h5" component="h2">
            {props.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.friends.length} - Friends
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ borderTop: '1px solid #eee' }}>
        <Button size="small" color="primary" >
          {
            !_.includes(props.user.sentrequests, props.id )?(
            <PersonAddIcon id={props.id} onClick={handleSubmit}/>
            ) : (
            <PersonAddDisabledIcon id={props.id} onClick={handleCancel}/>
            )
          }
        </Button>
        <Button size="small" color="primary">
          <TextsmsIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts,
    userlist: state.userlist
  }
}

export default connect(mapStateToProps, {startAddFriend, startRemoveFriend})(UserCard)
