import React, { Component } from "react";
// import Formuserdetails from "../components/Formuserdetails";
import FormuserdetailsNw from "../components/FormuserdetailsNw";
import Register from "../components/Register" ;

export default class Userform extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    Bio: ""
  };

  //Proceed to next step
  nextstep = () => {
    const { step } = this.state;
    console.log("step", step);
    this.setState({
      step: step + 1
    });
    console.log("after step", step);
  };

  //Proceed to previous step
  prevstep = () => {
    const { step } = this.state;
    console.log(step);
    this.setState({
      step: step - 1
    });
    console.log("prev step", step);
  };

  handlechange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstname, lastname, email, city, Bio } = this.state;
    const values = { firstname, lastname, email, city, Bio };

    switch (step) {
      case 1:
        return (
          <FormuserdetailsNw
            nextstep={this.nextstep}
            handlechange={this.handlechange}
            values={values}
          />
        );

      case 2:
        // return <h1>Forpersonldetails</h1>;
        return(
          <Register 
          prevstep={this.prevstep}
          values={values}
          />
        )

      case 3:
        return <h1>Confirm</h1>;

      case 3:
        return <h1>Success</h1>;
    }
  }
}
