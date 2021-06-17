import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage, ERC20Page, FaucerPage, AccountPage } from "./Pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ERC20" component={ERC20Page} />
      <Route exact path="/Faucer" component={FaucerPage} />
      <Route exact path="/Account" component={AccountPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
