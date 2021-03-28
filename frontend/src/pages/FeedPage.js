import { Component } from "react";
import Main from "../components/Feed/Main";
import Navbar from "../components/Navbar";
import { Redirect } from "react-router-dom";
import { isLoggedIn } from "../AuthHelper";

class FeedPage extends Component {
  render() {
    if (isLoggedIn) {
      return (
        <>
          <Navbar /> <Main />
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default FeedPage;
