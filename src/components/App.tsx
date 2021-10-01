import { LineupComponent } from "./Lineup.Component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/app.scss";

function App() {
  return (
    <div className="pvl-app-container">
      <div className="pvl-app-header">
        <h1>Volleyball Line Up</h1>
      </div>
      <div className="pvl-lineup-container">
        <Router>
          <Switch>
            <Route exact path="/">
              <LineupComponent />
            </Route>
            <Route path="/:urlData">
              <LineupComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
