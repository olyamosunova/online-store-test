import {Route, Router, Switch} from "react-router";
import { createBrowserHistory } from "history";
import Main from "../Main/Main";

const history = createBrowserHistory();

function App() {

  return (
      <Router history={history}>
          <Switch>
              <Route exact path="/">
                  <Main />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
