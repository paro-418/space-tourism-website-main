import classes from "./App.module.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Header from "./components/Header/Header";
function App() {
  return (
    <main className={classes.main}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/destination">
          <Destination />
        </Route>

        <Route path="/crew">
          <Crew />
        </Route>

        <Route path="/technology">
          <Technology />
        </Route>

        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
