import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import { Zenodo } from "./Zenodo";
import { Button } from "react-bootstrap";

function Pages() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/upload">
        <Button>
          <span>Upload</span>
        </Button>
      </Link>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Zenodo} path="/upload" />
      </Switch>
    </div>
  );
}

export default Pages;
