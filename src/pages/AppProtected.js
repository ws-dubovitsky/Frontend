import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { checkLogin } from "../utils/axios";
import Navbar from "../Navbar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import LoginComponent from "./Login";
import RegisterForm from "./Register/index";

const publicPages =  ['/login', '/register']

class AppProtected extends React.PureComponent {
  state = {};
  componentDidMount() {
    const pathname = this.props.location.pathname;
    const isPublic = !!(publicPages.indexOf(pathname) !== -1);
    const token = localStorage.getItem("usertoken");
    if(!token && !isPublic) return this.props.history.push("/login");
    this.checkLogin();
  }

  componentDidUpdate(prevProps) {
    const pathname = this.props.location.pathname;
    const isPublic = !!(publicPages.indexOf(pathname) !== -1);
    console.log('prevProps', prevProps);
    console.log('pathname', pathname);
    if (pathname !== prevProps.location.pathname  && pathname !== '/') return this.checkLogin();
    if (pathname !== prevProps.location.pathname && pathname === '/') return this.props.history.push("/dashboard");
  }

  
  checkLogin = () => {
    return checkLogin().then(res => {
      this.setState({
          user: res.data
      }, () => {
          if (!this.state.user._id) {
            this.props.history.push("/login");
          }
          // if (this.state.user._id) {
          //   return this.props.history.push("/dashboard");
          // }
        }
      );
    });
  };

  render() {
    const { user } = this.state;
    const pathname = this.props.location.pathname;
    const isPublic = !!(publicPages.indexOf(pathname) !== -1);
    return (
      <>
        <Switch>
          <Route
            exact
            path="/login"
            render={({ history }) => (this.state.user && this.state.user._id && isPublic) ? <Redirect to="/dashboard" /> :  <LoginComponent history={history} />}
          />
          <Route
            exact
            path="/register"
            render={({ history }) => (this.state.user && this.state.user._id && isPublic) ? <Redirect to="/dashboard" /> : <RegisterForm history={history} />}
          />
          {user && user._id && (
            <>
              <Navbar />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/settings" component={Settings} />
              {/* <Redirect to="/dashboard" /> */}
            </>
          )}
        </Switch>
      </>
    );
  }
}

export default AppProtected;
