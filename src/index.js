import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hard from './Hard'
import Medium from './Medium';
import Easy from './Easy';
import Menu from './Menu';
import 'tachyons';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

<link rel="stylesheet" type="text/css" href="style.css"/>






ReactDOM.render (

    <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/Hard' component={Hard}/>
    <Route exact path='/Medium' component={Medium}/>
    <Route exact path='/Easy' component={Easy}/>
    <Route exact path='/Menu' component={Menu}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')

 
);
