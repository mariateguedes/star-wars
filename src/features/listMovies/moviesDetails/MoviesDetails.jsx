import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "../../StarWarsSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MobileContainer from "../../../components/mobileContainer/MobileContainer";
import { Container } from "./styles";

function MoviesDetails({ id, characterMovies, isMobile, open }) {
  const [openModal, setOpenModal] = useState(open);
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.rootReducer.starWars);
  const history = useHistory();

  useEffect(() => {
    if(id) {
      dispatch(setMovie(characterMovies?.filter((x) => x.episode_id === id)[0]));
    } 
    setOpenModal(true);
  }, [id, characterMovies, movie, dispatch]);

  function handleClick() {
    setOpenModal(false);
    history.push("/movies");
  }

  return isMobile ? (
    <MobileContainer onClick={handleClick} open={openModal}>
        <Typography variant="h5">Título: {movie.title}</Typography>
        <Typography variant="h6">Director: {movie.director}</Typography>
        <Typography variant="h6">Productor: {movie.producer}</Typography>
        <Typography variant="h6">Fecha de estreno: {movie.release_date}</Typography>
    </MobileContainer>
  ) : (
      <Container>
        <Typography variant="h4">Título: {movie.title}</Typography>
        <Typography variant="h5">Director: {movie.director}</Typography>
        <Typography variant="h5">Productor: {movie.producer}</Typography>
        <Typography variant="h5">Fecha de estreno: {movie.release_date}</Typography>
      </Container>
  );
  
}

export default MoviesDetails;
