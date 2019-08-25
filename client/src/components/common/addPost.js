import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  card: {
    width: '50rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create Post
        </Typography>
        <Typography variant="h5" component="h2">
          Got something on your mind... ?
        </Typography>
        <div style={{ padding: '1rem 0' }}>
            <form>
                <div>
                    <TextField
                        type="text" 
                        label="Post Title"
                        style={{  width: '30rem' }}
                    />
                </div>
                <div>
                    <TextField
                        label="Post Body"
                        multiline
                        style={{  width: '30rem' }}
                    />
                </div>
                <div style={{ paddingTop: '1.5rem'}}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" component="span" className={classes.button}>
                            Add Image
                        </Button>
                    </label>
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        style={{ marginLeft: '1rem', padding: '.3rem' }}
                    >Add Post</Button>
                </div>
            </form>
        </div>
      </CardContent>
    </Card>
  );
}