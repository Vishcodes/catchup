import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import TextsmsIcon from '@material-ui/icons/Textsms';
import defaultImg from '../../images/sample.jpg'

const useStyles = makeStyles({
  card: {
    margin: '3rem 0',
    maxWidth: '50rem',
    height: '38rem'
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={ defaultImg }
          title="Contemplative Reptile"
          background-size= "cover"

        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            <span style={{ color: '#bbb', fontSize: '1rem' }}>Posted by -</span> {props.creator}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ borderTop: '1px solid #eee' }}>
        <Button size="small" color="primary">
          <StarIcon />
        </Button>
        <Button size="small" color="primary">
          <TextsmsIcon />
        </Button>
      </CardActions>
    </Card>
  );
}