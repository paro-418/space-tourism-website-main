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
        <Route path="https://paro-810.github.io/space-tourism-website-main/" exact>
          <Redirect to="https://paro-810.github.io/space-tourism-website-main/home"></Redirect>
        </Route>

        <Route path="https://paro-810.github.io/space-tourism-website-main/home">
          <Home />
        </Route>

        <Route path="https://paro-810.github.io/space-tourism-website-main/destination">
          <Destination />
        </Route>

        <Route path="https://paro-810.github.io/space-tourism-website-main/crew">
          <Crew />
        </Route>

        <Route path="https://paro-810.github.io/space-tourism-website-main/technology">
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
