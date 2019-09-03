import React from 'react';
import { withRouter } from 'react-router-dom'
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
import { startSetAllFriends} from '../../redux/actions/userAction';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import _ from 'lodash'

const useStyles = makeStyles({
  card: {
    margin: '3rem 0',
    width: '20rem',
    height: '25rem'
  },
});

function FriendCard(props) {
  const classes = useStyles();
  props.startSetAllFriends()

  return (
   
    <Card className={classes.card}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={ defaultImg }
          title={props.username}
          background-size= "cover"
        />
        <CardContent>
    
          <Typography gutterBottom variant="h5" component="h2">
            {props.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ borderTop: '1px solid #eee' }}>
        
          {
            !_.includes((props.user.sentrequests || props.user.sentrequests), props.id )?(
                <PersonAddIcon
                  id={props.id}
                  color='primary'
                  style={{ cursor: 'pointer' }}
                />
            ) : (
                <PersonAddDisabledIcon
                  id={props.id}
                  color='primary'
                  style={{ cursor: 'pointer'}}
                />
                )
          }
   
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

export default connect(mapStateToProps, {startSetAllFriends})(withRouter(FriendCard))
