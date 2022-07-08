import { Switch, Route } from "react-router-dom";
import { Welcome } from "../Pages/Welcome/index";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { EventsPage } from "../Pages/Events";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/aboutUs">
        <Welcome/>
      </Route>
      <Route exact path="/dashboardBbc"></Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/events">
        <EventsPage />
      </Route>
    </Switch>
  );
};
