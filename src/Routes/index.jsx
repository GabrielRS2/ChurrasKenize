import { Switch, Route } from "react-router-dom";
import Welcome from '../Pages/Welcome/index'

export const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home">

      </Route>
      <Route exact path="/dashboardBbc">
      
      </Route>
      <Route exact path="/dashboardUser">
      
      </Route>
      <Route exact path="/login">
      
      </Route>
      <Route exact path="/register">
      
      </Route>
    </Switch>
  );
}