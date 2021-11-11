import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import BookList from "./components/BookList/index";
import Page404 from "./components/Page404/index";
import Search from "./components/Search/Search";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route path="/currently_reading">
        <BookList type={"currentlyReading"} />
      </Route>
      <Route path="/want_read">
        <BookList type={"wantToRead"} />
      </Route>
      <Route path="/read">
        <BookList type={"read"} />
      </Route>
      <Route path="/search/:value">
        <Search />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </Router>
);

export default App;
