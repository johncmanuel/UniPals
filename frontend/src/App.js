import Main from "components/Main";
import Login from "components/Login";
import Navbar from "components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "components/Profile";
import Groups from "components/Groups";
import Notifications from "components/Notifications";
import Messages from "components/Messages";
import CharacterForm from "components/CharacterForm";
import Footer from "components/Footer";

function App() {
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
          <div style={{ flex: 1, overflow: "auto" }}>
            <Switch>
              {/* Keep most specifc paths at the top */}
              <Route path="/profile" component={Profile} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/groups" component={Groups} />
              <Route path="/messages" component={Messages} />
              <Route path="/characterForm" component={CharacterForm} />
              <Route path="/login" component={Login} />

              <Route path="/" exact component={Main} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
