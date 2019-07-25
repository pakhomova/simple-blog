import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import LatestPostsPage from './containers/latest-posts-page';
import ViewPostPage from './containers/view-post-page';

export default () => (
  <Switch>
    <Route exact path={routes.HOME} component={LatestPostsPage} />
    <Route path={routes.POSTS + '/:id'} component={ViewPostPage} />
  </Switch>
);
