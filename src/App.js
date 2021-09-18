import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/index";
import Home from "./view/Home/index";
import Signin from "./view/auth/signin/signin";
import Register from "./view/auth/register/Register";
import Schedule from "./view/Schedule/index";
import Userdetail from "./view/userDetail/Index";
import Adddetail from "./view/add-detail/Index";
import Finddoctor from "./view/Finddoctor/Finddoctor";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/record">
          <Adddetail />
        </Route>
        <Route exact path="/userdetail">
          <Userdetail />
        </Route>
        <Route exact path="/finddoctor">
          <Finddoctor />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
