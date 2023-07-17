import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Dashboard from "./Dashboard";
import { useState } from "react";

function App() {
  const [loggedin, setLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Login handleLog={setLoggedIn} />}
          ></Route>
          <Route
            path="/register"
            element={<Register handleLog={setLoggedIn} />}
          ></Route>
          <Route
            path="/Dashboard"
            exact
            element={loggedin ? <Dashboard /> : "NOT AUTHORISED"}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
