import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../../StarWarsSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, LinkStyle } from "./styles";
import MobileContainer from "../../../../components/mobileContainer/MobileContainer";

function CharacterDetails({ character, movies, isMobile, open }) {
  const [openModal, setOpenModal] = useState(open);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setOpenModal(true);
  }, [character]);

  const goToMovie = (movie) => {
    dispatch(setMovieId(movie.episode_id));
    history.push("/movies");
  };

  function handleClick() {
    setOpenModal(false);
    history.push("/");
  }

  return isMobile ? (
    <MobileContainer onClick={handleClick} open={openModal}>
      <Typography variant="h5">Nombre: {character.name}</Typography>
      <Typography variant="h6">Color de ojos: {character.eye_color}</Typography>
      <Typography variant="h6">Altura: {character.height} cm</Typography>
      <Typography variant="h6">Peso: {character.mass} kg</Typography>
      <Typography variant="h6">Películas en las que apareció: </Typography>
      {movies.map((movie, i) => (
        <LinkStyle key={movie.episode_id}>
          <Typography variant="h6" onClick={() => goToMovie(movie)}>
            {movie.title}
          </Typography>
        </LinkStyle>
      ))}
    </MobileContainer>
  ) : (
    <Container>
      <Typography variant="h4">Nombre: {character.name}</Typography>
      <Typography variant="h5">Color de ojos: {character.eye_color}</Typography>
      <Typography variant="h5">Altura: {character.height} cm</Typography>
      <Typography variant="h5">Peso: {character.mass} kg</Typography>
      <Typography variant="h5">Películas en las que apareció: </Typography>
      <div>
        {movies.map((movie, i) => (
          <LinkStyle key={movie.episode_id}>
            <Typography variant="h5" onClick={() => goToMovie(movie)}>
              {movie.title}
            </Typography>
          </LinkStyle>
        ))}
      </div>
    </Container>
  );
}

export default CharacterDetails;
