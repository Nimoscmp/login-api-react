import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {

  const [checklogin, setCheckLogin] = useState(false);
  const [checkLogOut, setCheckLogOut] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const localUser = {
    userName: "Usuario",
    email: "usuario@usuario.com",
    password: "123456"
  }

  // if(checklogin){
  //   setLoggedIn(true);
  // } else if(checkLogOut) {
  //   setLoggedIn(false);
  // }

  //Hook from react router

  return (
    <>
    <Router>
      
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
          <Redirect exact from="/" to="/login"/>
          <Route exact path="/login">
            
            <Login 
              setCheckLogin={setCheckLogin}
              setCheckLogOut={setCheckLogOut}
              checklogin={checklogin}
              localUser={localUser}
            />
            
          </Route>
          <Route path="/home">
            <Home
              setCheckLogin={setCheckLogin} 
              setCheckLogOut={setCheckLogOut}
              checklogin={checklogin}
              checkLogOut={checkLogOut}
              loggedIn={loggedIn}
              localUser={localUser}
            />
          </Route>
          <Route path="/">
            <Loading/>
          </Route>
        </Switch>
      
    </Router>
    </>
  );
}

export default App;
