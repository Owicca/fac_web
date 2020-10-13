import React from 'react';
import {Route, Switch} from 'react-router-dom';

import IndexPage from './index_page.js';
import ListPage from './listPage.js';


class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let routes = this.props.routes.map((routeObj, idx) => {
      let href = `/${routeObj.route}/`;

      return <Route key={idx+1} path={href} render={routeProps => <ListPage {...this.props} previewName={routeObj.name} pageName={routeObj.route} api={this.props.api} />} />;
    });

    return <Switch>
      <Route key={0} exact path="/" children={IndexPage} />
      {routes}
    </Switch>;
  }
}

export default Main;
