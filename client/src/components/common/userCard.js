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

const useStyles = makeStyles({
  card: {
    margin: '3rem 0',
    width: '20rem',
    height: '23rem'
  },
});

export default function UserCard(props) {
  const classes = useStyles();

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
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ borderTop: '1px solid #eee' }}>
        <Button size="small" color="primary">
          <PersonAddIcon />
        </Button>
        <Button size="small" color="primary">
          <TextsmsIcon />
        </Button>
      </CardActions>
    </Card>
  );
}