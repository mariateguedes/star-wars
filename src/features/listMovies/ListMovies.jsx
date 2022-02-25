import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
} from "@material-ui/core";
import MoviesDetails from "./moviesDetails/MoviesDetails";
import {
  getMovies,
  getMoviesSearch,
  resetState,
  setMovie,
} from "../StarWarsSlice";
import SearchInput from "../../components/searchInput/SearchInput";
import { isMobile } from "react-device-detect";
import { Container } from "./styles";
import NavBar from "../../components/navBar/NavBar";

const ListMovies = ({ openMovie }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(openMovie ? openMovie : false);

  const { moviesData, characterMovies, movie, id } = useSelector(
    (state) => state.rootReducer.starWars
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [open, id]);

  function clickMovie(row) {
    dispatch(setMovie(row));
    dispatch(resetState());
    setOpen(true);
  }

  function handleSearch(search) {
    dispatch(getMoviesSearch(search));
    setOpen(false);
  }

  if (moviesData === undefined) return null;
  return (
    <>
      <NavBar />
      <Container>
        <TableContainer style={{ marginTop: "5rem", flex: "1" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableRow>
              <TableCell style={{ display: "flex", alignItems: "center", height: '3.4rem' }}>
                {isMobile ? (
                  <Typography variant="h6">Películas</Typography>
                ) : (
                  <Typography variant="h4">Películas</Typography>
                )}
                <SearchInput onClick={handleSearch} />
              </TableCell>
            </TableRow>
            <TableBody>
              {moviesData?.map((row) => {
                return (
                  <TableRow hover role="checkbox" key={row.episode_id}>
                    <TableCell
                      key={row.title}
                      style={{ height: "2.6rem" }}
                      onClick={() => clickMovie(row)}
                    >
                      {row.title}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {open | id && (
          <MoviesDetails
            id={id}
            characterMovies={characterMovies}
            isMobile={isMobile}
            open={open}
          />
        )}
      </Container>
    </>
  );
};

export default ListMovies;
