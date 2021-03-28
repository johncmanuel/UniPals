import { Component } from "react";
import SignUp from "../components/Auth/SignUp";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class SignUpPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          {/* <Navbar /> */}
          <SignUp />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default SignUpPage;
