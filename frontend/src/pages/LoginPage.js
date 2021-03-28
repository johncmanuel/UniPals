import { Component } from "react";
import Login from "../components/Auth/Login";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class LoginPage extends Component {
  render() {
    const { onLogin } = this.props;
    return <Login onLogin={onLogin} />;
    // if (!isLoggedIn) {
    //   return <Login onLogin={onLogin} />;
    // } else {
    //   return <Redirect to="/feed" />;
    // }
  }
}

export default LoginPage;
