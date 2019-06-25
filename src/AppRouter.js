import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from './routes/routeMap'

const AppRouter = () => (
  <Switch>
    {
      routes.map((item, index) => {
        return (
          <Route exact key={index} path={item.path} component={item.component} ></Route>
          // <Route exact key={index} path={item.path} render={
          //   () => {
          //     if (item.auth) { // 该路由需要Token验证
          //       let token = localStorage.getItem('token')
          //       if (!token) {
          //         return <Redirect to="/login" />
          //       }
          //     }
          //     return <item.component />
          //   }
          // } ></Route>
        )
      })
    }
  </Switch>
);

export default AppRouter;