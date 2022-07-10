import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { EventsPage } from "../Pages/Events";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/aboutUs">
        <AboutUs/>
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
