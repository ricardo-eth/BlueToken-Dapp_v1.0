import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage, ERC20Page, FaucetPage, AccountPage } from "./Pages";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ERC20" component={ERC20Page} />
        <Route exact path="/Faucet" component={FaucetPage} />
        <Route exact path="/Account" component={AccountPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
