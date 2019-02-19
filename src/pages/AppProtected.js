import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";

import {checkLogin} from '../utils/axios'

import Navbar from '../Navbar'
import Dashboard from './Dashboard';
import Settings from './Settings';
import LoginComponent from "./Login";


class AppProtected extends React.PureComponent {
  state = {
  }
  componentDidMount() {
    this.checkLogin()
  }
 

  checkLogin = () => {
    console.log(this.props)
    return checkLogin()
      .then((res) => {
        console.log('res.data', res.data)
        this.setState({
          user: res.data
        }, () => {
          console.log('this.state', this.state)
          if(!this.state.user._id) {
            this.props.history.push('/login')
          }
          if(this.state.user._id && this.props.location.pathname === '/login') {
            return this.props.history.push('/dashboard')
          }
        })
      });
  }

  render() {
    const {user} = this.state;
    console.log('user in RENDER', this.state)
    return (
      <>
        <Switch>
          <Route
            exact
            path="/login"
            render={ ({history}) => <LoginComponent history={history}/>}
          />
          {user && user._id && (
            <>
              <Navbar />
                <Route
                  exact
                  path="/dashboard"
                  component={Dashboard}
                />
                <Route
                  exact
                  path="/settings"
                  component={Settings}
                />
                <Redirect to="/dashboard"/>
            </>
          )}
        </Switch>
      </>
    );
  }
}

export default AppProtected;
