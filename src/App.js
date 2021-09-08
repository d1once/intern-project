import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SignIn from "./components/Signin/SignIn";
import SignUp from "./components/Signup/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
