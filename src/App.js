import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ConnectWithMe from "./components/ConnectWithMe/ConnectWithMe";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/connect">
          <ConnectWithMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
