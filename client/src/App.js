import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
