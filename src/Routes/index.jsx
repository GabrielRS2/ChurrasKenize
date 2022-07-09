import { Switch, Route } from "react-router-dom";
import { Welcome } from "../Pages/Welcome/index";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { EventsPage } from "../Pages/Events";
import { DashboardUser } from "../Pages/DashboardUser";
import DashboardBbc from "../Pages/DashboardBbc";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home"></Route>
      <Route exact path="/dashboardBbc">
        <DashboardBbc />
      </Route>
      <Route exact path="/dashboardUser">
        <DashboardUser />
      </Route>
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
