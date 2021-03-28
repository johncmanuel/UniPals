import { Component } from "react";
import Groups from "../components/Groups";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class GroupsPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <Navbar />
          <Groups />
        </>
      );
    } else {
      return <Redirect to="/feed" />;
    }
  }
}

export default GroupsPage;
