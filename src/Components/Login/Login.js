import React from "react";

function Login({ handleChange, handleSubmit, Username, Password }) {
  return (
    <div className="App">
      <div className="App__Aside"></div>

      <div className="App__Form">
        <form className="FormTitle" onSubmit={handleSubmit}>
          <div className="form-content">
            <h1 id="sign-in">Sign In</h1>

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
                placeholder="Password"
                type="Password"
                className="form-control"
                name="Password"
                value={Password}
                onChange={handleChange}
              ></input>
            </p>

            <input
              type="Submit"
              value="Log In"
              className="btn btn-primary btn-lg btn-block"
            ></input>
          </div>
          <br />
          <br />
          <br />
          <br />
        </form>
        <button className="btn btn-primary btn-lg btn-block left">
          Sign in with Google
        </button>
        <button className="btn btn-primary btn-lg btn-block right">
          Login with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
