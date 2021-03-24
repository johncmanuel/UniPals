import Main from "components/Main";
// import Login from "components/Login";
import Navbar from "components/Navbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Profile from "components/Profile";
import Groups from "components/Groups";
import Notifications from "components/Notifications";
import Messages from "components/Messages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Keep most specifc paths at the top */}
        <Route path="/profile" component={Profile} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/groups" component={Groups} />
        <Route path="/messages" component={Messages} />

        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
