import React from 'react';
import {
  Switch, Route,
} from "react-router-dom";
import $ from 'jquery';
import './css/animate.css';
import './css/bootstrap.css';
import './css/colors.css';
import './css/ekko-lightbox.css';
import './css/font-awesome.min.css';
import './css/responsive.css';
import './App.css';
import Components from './compoments';

function App() {
  const _compoments = Object.entries(Components).map(compoment => {
    const View = compoment[1].view;
    const path = compoment[1].path;
    return <Route exact path={path} render={rest => <View {...rest} />} />
  });
  
  return (
    <Switch>
    {_compoments}
    </Switch>
  );
}

export default App;
