import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Registration.css";

function Registration({
  handleChange,
  handleSubmit,
  validateForm,
  ChasisNo,
  RegNo,
  Username,
  Password,
  Email,
  ConfirmPassword
}) {
  return (
    <div className="App">
      <div className="App__Aside"></div>

      <div className="App__Form">
        <form className="FormTitle" onSubmit={handleSubmit}>
          {/* <Router> */}

          <div className="PageSwitcher">
            <Link
              to="/login"
              activeClassName="PageSwitcher_Item-Active"
              className="PageSwitcher_Item"
            >
              Sign In
            </Link>
            <Link
              exact
              to="/"
              activeClassName="PageSwitcher_Item-Active"
              className="PageSwitcher_Item"
            >
              Sign Up
            </Link>
          </div>

          {/* </Router> */}

          <div className="form-content">
            <h2>Create Your Account</h2>

            <p>
              <input
                required
                placeholder="Registration Number"
                type="text"
                className="form-control"
                name="RegNo"
                value={RegNo}
                onChange={handleChange}
              ></input>
            </p>

            <p>
              <input
                required
                placeholder="Chasis Number"
                type="text"
                className="form-control"
                name="ChasisNo"
                value={ChasisNo}
                onChange={handleChange}
              ></input>
            </p>

            <p>
              <input
                required
                placeholder="Username"
                tyep="text"
                className="form-control"
                name="Username"
                value={Username}
                onChange={handleChange}
              ></input>
            </p>

            <p>
              <input
                required
                placeholder="Email"
                type="Email"
                className="form-control"
                name="Email"
                value={Email}
                onChange={handleChange}
              ></input>
            </p>

            <p>
              <input
                required
                placeholder="Password"
                type="Password"
                className="form-control"
                name="Password"
                value={Password}
                onChange={handleChange}
              ></input>
            </p>

            <p>
              <input
                required
                placeholder="Confirm Password"
                type="Password"
                className="form-control"
                name="ConfirmPassword"
                value={ConfirmPassword}
                onChange={handleChange}
              ></input>
            </p>

            <input
              type="Submit"
              disabled={!validateForm()}
              value="Create Account"
              class="btn btn-primary btn-lg btn-block"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
