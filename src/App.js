import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {

  const [checklogin, setCheckLogin] = useState(false);
  const [checkLogOut, setCheckLogOut] = useState(false);
  //Hook from react router

  return (
    <>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Loading</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login 
              setCheckLogin={setCheckLogin}
              setCheckLogOut={setCheckLogOut}
              checklogin={checklogin}
            />
          </Route>
          <Route path="/home">
            <Home
              setCheckLogin={setCheckLogin} 
              setCheckLogOut={setCheckLogOut}
              checkLogOut={checkLogOut}
            />
          </Route>
          <Route path="/">
            <Loading/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
