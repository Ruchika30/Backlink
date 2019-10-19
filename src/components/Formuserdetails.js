import React, { Component } from "react";
import { TextField, Toolbar } from "material-ui";
import Button from "@material-ui/core/Button";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles, createStyles, withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
// import { withStyles } from "@material-ui/styles/withStyles";

const stylethis = {
  navbar: {
    textAlign: "center"
  },
  toolbar: {
    backgroundColor: "#3f51b5"
  },
  textField: { width: "55%", margin: "auto", display: "block" },
  button: {
    width: "30%",
    margin: "auto",
    display: "block",
    justifyContent: " space-between",
    display: "flex"
  }
};

// const useStyles = theme =>
//   createStyles({
//     root: {
//       flexGrow: 1
//     },
//     paper: {
//       height: 140,
//       width: 100
//     },
//     control: {
//       paddingLeft: 20
//     }
//   });

class Formuserdetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };

  handlePageChange() {
    // window.location.href = { Register };
  }

  render() {
    const { classes } = this.props;
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

      <MuiThemeProvider>
        <React.Fragment>
          <Toolbar style={stylethis.toolbar} title="Login form" id="toot">
            <Typography variant="h6">Get Ready!</Typography>
          </Toolbar>

          {/* <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
          </Grid>
        </div> */}
          <div style={stylethis.textField}>
            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Enter Name"
              // className={styles.textField}
              style={stylethis.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />

            <br />

            <TextField
              id="standard-with-placeholder"
              label="With placeholder"
              placeholder="Email Id"
              style={stylethis.textField}
              margin="normal"
              // onChange={handlechange("firstname")}
              defaultValue={this.firstname}
            />
          </div>

          <br />
          <br />
          <div style={stylethis.button}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "auto", display: "inline-block" }}
              // className={classes.button}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              onClick={this.handlePageChange}
            >
              Register
            </Button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

// export default withStyles(useStyles)(Formuserdetails);
export default Formuserdetails;
