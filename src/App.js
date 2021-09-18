import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/index";
import Home from "./view/Home/index";
import Signin from "./view/auth/signin/signin";
import Register from "./view/auth/register/Register";
import Adddetail from "./view/add-detail/Index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    // <>
    //   <Header />
    //   <Home />
    //   <Adddetail />
    //   <Footer />
    // </>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home">
          <Adddetail />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
