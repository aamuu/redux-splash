import React from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ImageGallery} />
    </Switch>
  );
};

export default Routes;
