import { useEffect, useState } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";

function App() {

  const [checklogin, setCheckLogin] = useState(false);
  //Hook from react router

  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login 
              setCheckLogin={setCheckLogin}
              checklogin={checklogin}
            />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
