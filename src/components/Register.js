import React, { Component } from "react";
import { TextField, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStyles, withStyles, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

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
      backgroundColor: "Orange"
    },
    textField: { width: "55%", margin: "auto", display: "block" },
    button: {
      width: "23%",
      margin: 0,
      display: "block",
      justifyContent: " space-between"
      // display: "flex"
    },
    wrapper: {
      width: "70%",
      backgroundColor: "pink"
    },
    paper: {
      padding: theme.spacing(3, 2),
      width: "30%",
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

class Register extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };

  handleback = e => {
    e.preventDefault();
    this.props.prevstep();
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar} title="Login form" id="toot">
          <Typography className={classes.typo} variant="h6">
            Regsiter page
          </Typography>
        </Toolbar>

        <Paper className={classes.paper}>
          <div className="wrapper">
            <TextField
              id="standard-with-placeholder"
              label="Enter Namer"
              className={classes.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />

            <TextField
              id="standard-with-placeholder"
              label="Email Id"
              className={classes.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />
            <TextField
              id="standard-with-placeholder"
              label="password"
              className={classes.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />
            <TextField
              id="standard-with-placeholder"
              label="Confirm password"
              className={classes.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />
          </div>

          <br />
          <Grid item="true" container justify="space-evenly" className="grid">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleback}
            >
              Back
            </Button>
          </Grid>

          <br />
          <br />
        </Paper>
      </React.Fragment>
    );
  }
}

// export default withStyles(useStyles)(Formuserdetails);
export default withStyles(useStyles)(Register);
