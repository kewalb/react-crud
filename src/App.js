import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Create />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
