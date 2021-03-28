import { Component } from "react";
import { Redirect } from "react-router-dom";
import { isLoggedIn, logout } from "../AuthHelper";

class LogoutPage extends Component {
  render() {
    // if (isLoggedIn) {
    //   logout();
    //   console.log("Logging out!");
    // }
    logout();
    console.log("Logging out!");
    return <Redirect to="/login" />;
  }
}

export default LogoutPage;
