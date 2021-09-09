import { Suspense } from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {routes } from "./utils/paths";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  const _Routes = Object.values(routes);

  return (
    <Suspense fallback={<Typography styles="h4">Loading....</Typography>}>
      <Router>
        <Switch>
          {_Routes.map((route) => (
            <PublicRoute
              path={route.path}
              component={route.component}
              key={`route-${route.name}`}
              exact
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
