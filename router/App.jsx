import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Agent from "./Agent";
import Contact from "./Contact";
import Tickets from "./Tickets";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/agent" component={Agent} />

          <Route path="/contact" component={Contact} />
          <Route path="/tickets" component={Tickets} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
