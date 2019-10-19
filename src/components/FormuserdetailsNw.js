import React, { Component } from "react";
import { TextField, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Register from "./Register";
import { createStyles, withStyles, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { createHashHistory } from "history";

import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

// import { withStyles } from "@material-ui/styles/withStyles";

// const stylethis = {
//   navbar: {
//     textAlign: "center"
//   },
//   toolbar: {
//     backgroundColor: "#3f51b5"
//   },
//   textField: { width: "55%", margin: "auto", display: "block" },
//   button: {
//     width: "30%",
//     margin: "auto",
//     display: "block",
//     justifyContent: " space-between",
//     display: "flex"
//   }
// };
export const history = createHashHistory();

const useStyles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      paddingLeft: 20
    },
    navbar: {
      textAlign: "center"
    },
    toolbar: {
      backgroundColor: "#673AB7"
    },
    textField: { width: "55%", margin: "auto", display: "block" },
    button: {
      // width: "23%",
      margin: 0,
      display: "block",
      justifyContent: " space-between"
      // display: "flex"
    },
    paper: {
      padding: theme.spacing(3, 2),
      width: "50%",
      margin: "auto",
      marginTop: "30px"
    },
    typo: {
      color: "white"
    },
    grid: {
      alignContent: "center"
    }
  });

class FormuserdetailsNw extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
    // console.log(this.state.step);
  };

  // handleReg = () => {
  //   history.push("/register");
  // };
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };

  render() {
    const { classes } = this.props;
    const { values, handlechange } = this.props;

    return (
      //   <ThemeProvider>
      //     <React.Fragment>
      //       <AppBar position="static">
      //         <Typography style={styles.navbar} variant="h6">
      //           Enter user details
      //         </Typography>
      //       </AppBar>
      //     </React.Fragment>
      //   </ThemeProvider>

      //   <MuiThemeProvider>

      <React.Fragment>
        <Toolbar className={classes.toolbar} title="Login form" id="toot">
          <Typography className={classes.typo} variant="h6">
            Get Ready!
          </Typography>
        </Toolbar>

        {/* <div style={stylethis.textField}> */}
        <Paper className={classes.paper}>
          <div>
            <TextField
              id="standard-with-placeholder"
              label="Enter Namer"
              // placeholder="Enter Name"
              className={classes.textField}
              //   style={stylethis.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />

            <br />

            <TextField
              id="standard-with-placeholder"
              label="Email Id"
              // placeholder="Email Id"
              //   style={stylethis.textField}
              className={classes.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />
          </div>

          <br />
          <br />

          <div>
            {/* <Router> */}
            <Grid item="true" container justify="space-evenly" className="grid">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                //   style={{ margin: 0 }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.continue}
              >
                Register
              </Button>
            </Grid>
          </div>
        </Paper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>

      //   </MuiThemeProvider>
    );
  }
}

// export default withStyles(useStyles)(Formuserdetails);
export default withStyles(useStyles)(FormuserdetailsNw);
