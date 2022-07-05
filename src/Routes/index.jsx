import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";

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
        <LoginPage/>
      </Route>
      <Route exact path="/register">
        <RegisterPage/>
      </Route>
    </Switch>
  );
};
