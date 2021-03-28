import { Component } from "react";
import Notifications from "../components/Notifications";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class NotificationsPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <Navbar />
          <Notifications />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default NotificationsPage;
