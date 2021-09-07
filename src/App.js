import { Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SignIn from "./components/Signin/SignIn";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Hero} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
