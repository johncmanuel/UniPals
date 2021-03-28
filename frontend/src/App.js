import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import FeedPage from "pages/FeedPage";
import ProfilePage from "pages/ProfilePage";
import GroupsPage from "pages/GroupsPage";
import NotificationsPage from "pages/NotificationsPage";
import MessagesPage from "pages/MessagesPage";
import CharacterFormPage from "pages/CharacterFormPage";
import SignUpPage from "pages/SignUpPage";
import LoginPage from "pages/LoginPage";
import LogoutPage from "pages/LogoutPage";
import MBTISuccess from "components/Forms/MBTISuccess";
import { getToken, setToken, getUser, setUser } from "AuthHelper";

class App extends Component {
  handleLogin = (token, user) => {
    setToken(token);
    setUser(user);
    console.log("user: " + getUser());
    console.log("token: " + getToken());
  };

  render() {
    return (
      <>
        <Router>
          <div
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column",
            }}
          >
            <Switch>
              <Route path="/profile" component={ProfilePage} />
              <Route path="/notifications" component={NotificationsPage} />
              <Route path="/groups" component={GroupsPage} />
              <Route path="/messages" component={MessagesPage} />
              <Route path="/characterForm" component={CharacterFormPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/feed" component={FeedPage} />
              <Route path="/success" component={MBTISuccess} />
              <Route
                path="/login"
                component={() => <LoginPage onLogin={this.handleLogin} />}
              />
              <Route path="/logout" component={LogoutPage} />

              <Route path="/" exact>
                {<Redirect to="/feed" />}
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
