// import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Document from "./components/Document";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/document/:id" component={Document}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
