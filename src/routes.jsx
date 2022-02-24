import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ListCharacters from "./features/listCharacters/ListCharacters";
import ListMovies from "./features/listMovies/ListMovies";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListCharacters} />
      <Route path={'/movies'} exact={false} component={ListMovies}/>
    </BrowserRouter>
  );
}

export default Routes;