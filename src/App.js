import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
