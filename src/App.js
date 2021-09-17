import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body/Body";

function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
