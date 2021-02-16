import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import logo from './logo.svg';
import logo2 from './logo2.jpg';
import './App.css';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: '#f4FFFFFF',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    textAlign: 'left',
  },
  appBar: {
    backgroundColor: '#282828',
    color: '#5DD1F1'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  media: {
    height: 200,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));


function ThemedApp() {
  const classes = useStyles();

  const [expanded1, setExpanded1] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="overline">
            College Students
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >

        {/* Jonath Shi */}
        <Grid item xs={12} sm={6} md={4}>

          <Card className={classes.root}>
            <CardHeader
              title="Jonathan Shi"
              subheader="College Student at UCLA"
            />
            <CardMedia
              component="img"
              height="200"
              image={logo}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded1,
                })}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Email: jshi3512@g.ucl.edu
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Major: 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                About Jonathan: 
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Waylen Lam */}
        <Grid item xs={12} sm={6} md={4}>

          <Card className={classes.root}>
            <CardHeader
              title="Waylen Lam"
              subheader="College Student at UCLA"
            />
            <CardMedia
              component="img"
              height="200"
              image={logo}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Email: waylen.lam@gmail.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Major: 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                About Waylen: 
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Vivian Lam */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vivian Lam
                </Typography>
                <Typography variant="body2" color="black" component="p">
                  College Student at Harvey Mudd
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: vivianhlam00@gmail.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Major:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  About Vivian
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Connect
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Fontanna Shee */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fontanna Shee
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  College Student at UCLA
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Connect
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Caleb Kang */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Caleb Kang
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  College Student at UCSD
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Connect
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Kelalni Luong-Kha */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Kelalni Luong-Kha
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  College Student at UCLA
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Connect
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Alvin Vo */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Alvin Vo
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  College Student at UCLA
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Connect
              </Button>
            </CardActions>
          </Card>
        </Grid>




      </Grid>
      

    </ThemeProvider>

  );
}


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ThemedApp />
    </div>
  );
}

export default App;
