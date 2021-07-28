import {Route, Router, Switch} from "react-router";
import { createBrowserHistory } from "history";
import Products from "../Products/Products";
import {useDispatch} from "react-redux";
import {getProducts, getCategories} from "../../actions";

const history = createBrowserHistory();

const App = () => {
    const dispatch = useDispatch();
    dispatch(getProducts());
    dispatch(getCategories());

  return (
      <Router history={history}>
          <Switch>
              <Route exact path="/">
                  <Products />
              </Route>
          </Switch>
      </Router>
  );
};

export default App;
