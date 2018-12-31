import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <nav className='navStyle'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
              </ul>
            </nav>
            <div>
              <Route path ='*' component={AuthRedirect}/>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/signup' component={Landing}/>
              <Route exact path='/login' component={Landing}/>
              <Route exact path='/dashboard' component={Dashboard}/>
            </div>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}
export default App;
