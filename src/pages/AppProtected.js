import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { checkLogin } from "../utils/axios";
import Navbar from "../Navbar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
// import LoginComponent from "./Login";
// import RegisterForm from "./Register/index";

const publicPages =  ['/login', '/register']

class AppProtected extends React.PureComponent {
  state = {
    isAuthenticated: false,
    loaded: false
  };
  componentDidMount() {
    this.checkLogin();
  }


  
  checkLogin = () => {
    return checkLogin()
      .then(res => {
        console.log('res', res)
        this.setState({
          loaded: true,
          isAuthenticated: res.data._id ? true : false
        });
      })
      .catch((err)=> {
        this.setState({
          loaded: true,
          isAuthenticated: false
        });
      })
  };

  render() {
    const {loaded, isAuthenticated} = this.state;
    console.log('loaded', loaded);
    console.log('isAuthenticated', isAuthenticated);
    if(!loaded) return null;
    if(!isAuthenticated) return <Redirect to="/login" />
    return (
      <>
        <Navbar />
        <Route exact path="/" render={(props) => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/settings" component={Settings} />
      </>
      // <Switch>
      // </Switch>
    );
  }
}

export default withRouter(AppProtected);
