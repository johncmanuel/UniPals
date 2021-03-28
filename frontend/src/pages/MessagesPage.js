import { Component } from "react";
import Messages from "../components/Messages";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class MessagesPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <Navbar />
          <Messages />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default MessagesPage;
