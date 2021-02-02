import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import logo from './logo.svg';
import './App.css';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[100],
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
    backgroundColor: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function ThemedApp() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="overline">
            News
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography>
            College Student A
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            College Student B
          </Typography>
        </Grid>

        <Grid item>
          <Typography>
            College Student C
          </Typography>
        </Grid>
      </Grid>

      

      <Typography>
        College Student B
      </Typography>

      <Typography>
        College Student C
      </Typography>

      <Typography>
        College Student D
      </Typography>
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
