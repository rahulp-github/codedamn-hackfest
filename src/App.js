// import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Document from "./components/Document";
import Commands from "./components/Commands";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch >
          <Route exact path="/codedamn-hackfest" component={Home}>
          </Route>
          <Route exact path="/codedamn-hackfest/document/:id" component={Document}>
          </Route>
          <Route exact path="/codedamn-hackfest/commands" component={Commands}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
