import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../StarWarsSlice";
import ListCharactersData from "./listCharactersData/ListCharactersData";
import NavBar from "../../components/navBar/NavBar";

const ListCharacters = ({ children }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div>
      <NavBar />
      <ListCharactersData />
    </div>
  );
};

export default ListCharacters;
