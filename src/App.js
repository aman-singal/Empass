import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Quiz from './components/quiz/Quiz'
import Video from './components/vid/Video'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <div className={classes.root}>
          <Grid container spacing={2} style={{overflowX: 'hidden'}}>
            <Grid item lg={8} md={12} xs={12}>
              <Paper className={classes.paper}>
                <Video />
              </Paper>
            </Grid>
            <Grid item lg={4} md={12} xs={12}>
              <Paper className={classes.paper}>
                <Quiz />
              </Paper>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}

export default App;
