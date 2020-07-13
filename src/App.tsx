import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import StatusBar from "./components/StatusBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div id="phone">
          <StatusBar/>
          <Switch>
            <Suspense fallback={<div>Loading</div>}>
              <Route component={Home} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
