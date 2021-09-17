import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";

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
        <Route path="/contact">Contact Me</Route>
      </Switch>
    </Router>
  );
}

export default App;
