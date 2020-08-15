import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNav from "./components/TopNav";
import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  return (
    <Router>
      <Container>
        <TopNav />
        <div className="py-3">
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route path="/create">
              <CreateBook />
            </Route>
            <Route path="/:id/edit" children={<UpdateBook />} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default App;
