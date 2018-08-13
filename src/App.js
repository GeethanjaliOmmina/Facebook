import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Forgotpassword from './Forgotpassword/Forgotpassword';
import Landingpage from './Landingpage/Landingpage';
import Createcelpage from './Createcelpage/Createcelpage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
            <Route exact path='/' component={Landingpage} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Createcelpage' component={Createcelpage} />
            <Route exact path='/Forgotpassword' component={Forgotpassword} />
            <Route exact path='/Signup' component={Signup} />
           </Switch>
        </div>
      </Router>
    );
  }
}
export default App;