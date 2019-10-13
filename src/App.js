import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
//import Header from "./Components/Header/Header"; //!!!this is causing the component to not load
//import 'semantic-ui-css/semantic.min.css';

//->the problem is that there are many variables which are common

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      Username: "", //-->this variable is being used/refrenced at two different places
      Password: "", //-->this variable is being used/refrenced at two different places
      RegNo: "",
      ChasisNo: "",
      ConfirmPassword: "",
      Email:"",
      badgeLevel: "4"
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChangeReg = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  validateForm() {
    //from registration
    return (
      this.state.Email.length > 0 &&
      this.state.Password.length > 0 &&
      this.state.Password === this.state.ConfirmPassword
    );
  }

  handleSubmitReg(e) {
    //from registration
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  handleChangeLog = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmitLog(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////RENDERING SECTION//////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={props => (
            <Registration
              {...props}
              handleChange={this.handleChangeReg.bind(this)}
              handleSubmit={this.handleSubmitReg.bind(this)}
              validateForm={this.validateForm.bind(this)}
              ChasisNo={this.state.ChasisNo}
              RegNo={this.state.RegNo}
              ConfirmPassword={this.state.ConfirmPassword}
              Username={this.state.Username}
              Password={this.state.Password}
              Email={this.state.Email}
            />
          )}
        />

        <Route
          path="/login"
          exact
          render={props => (
            <Login
              {...props}
              handleChange={this.handleChangeLog.bind(this)}
              handleSubmit={this.handleSubmitLog.bind(this)}
              Username={this.state.Username}
              Password={this.state.Password}
            />
          )}
        />

        <Route
          path="/sb"
          exact
          render={props => (
            <Sidebar {...props} badgeLevel={this.state.badgeLevel} />
          )}
        />

        {/* <Route 
          path="/header"
          exact
          Component={Header}
        /> */}

      </Router>
    );
  }
}

export default App;
