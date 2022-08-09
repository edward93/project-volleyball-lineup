import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LineupComponent } from "./Lineup.Component";
import { HeaderComponent } from "./Header.Component";

import "../styles/app.scss";
import { FooterComponent } from "./Footer.Component";

function App() {
  return (
    <div className="pvl-app-container">
      <HeaderComponent />
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
      <FooterComponent />
    </div>
  );
}

export default App;
