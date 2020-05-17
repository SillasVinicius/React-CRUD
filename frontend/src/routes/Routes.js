import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Index from './../components/pages/index/Index';
import Login from './../components/pages/login/Login';
import NotFound from './../components/pages/notFound/NotFound';
import AdminHome from './../components/pages/admin/home/Home';
import AdminUsers from './../components/pages/admin/user/User';

export default (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/NotFound" component={NotFound}/>
            <Route exact path='/admin' component={AdminHome} />
            <Route path='/admin/users' component={AdminUsers} />
            <Redirect from="*" to="/NotFound"></Redirect>
        </Switch>
      </BrowserRouter> 
    </React.Fragment>
  );
}
