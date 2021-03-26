import Main from "components/Feed/Main";
import Login from "components/Auth/Login";
import Navbar from "components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Profile from "components/User/Profile";
import Groups from "components/Groups";
import Notifications from "components/Notifications";
import Messages from "components/Messages";
import CharacterForm from "components/Forms/CharacterForm";
import Footer from "components/Footer";
import SignUp from "components/Auth/SignUp";

function App() {
  const loggedIn = true;
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
          <Navbar />
          <Switch>
            {/* Keep most specifc paths at the top */}
            {/* Routing model:
                                                -> messages
                                                -> profile
                login -> characterForm -> feed -> notifications
                                                -> groups
                                                -> settings
              */}

            <Route path="/profile" component={Profile} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/groups" component={Groups} />
            <Route path="/messages" component={Messages} />
            <Route path="/characterForm" component={CharacterForm} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feed" component={Main} />

            <Route path="/" exact>
              {loggedIn ? <Redirect to="/feed" /> : <Login />}
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
