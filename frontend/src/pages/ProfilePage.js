import { Component } from "react";
import Profile from "../components/User/Profile";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class ProfilePage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <Navbar />
          <Profile />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default ProfilePage;
