import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Login";

export const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">

      </Route>
      <Route exact path="/home">
       
      </Route>
      <Route exact path="/dashboardBbc">
      
      </Route>
      <Route exact path="/dashboardUser">
      
      </Route>
      <Route exact path="/login">
      <LoginPage></LoginPage>
      </Route>
      <Route exact path="/register">
      
      </Route>
    </Switch>
  );
}