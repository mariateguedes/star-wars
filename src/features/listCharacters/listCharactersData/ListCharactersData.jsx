import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacters,
  getCharactersSearch,
  setCharacter,
  setScroll,
} from "../../StarWarsSlice";
import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@material-ui/core";
import CharacterDetails from "./charactersDetails/CharacterDetails";
import SearchInput from "../../../components/searchInput/SearchInput";
import { isMobile } from "react-device-detect";
import { Container } from "./styles";

const ListCharactersData = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {
    charactersData,
    character,
    characterMovies,
    scroll,
    next,
  } = useSelector((state) => state.rootReducer.starWars);

  useEffect(() => {
    if (next) dispatch(getCharacters(next));
  }, [scroll]);

  const scrollToEnd = () => {
    dispatch(setScroll(true));
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  function clickCharacter(row) {
    dispatch(setCharacter(row));
    setOpen(true);
    window.scrollTo(0, 0);
  }

  function handleSearch(search) {
    dispatch(getCharactersSearch(search));
    setOpen(false);
  }

  if (charactersData === undefined) return null;
  return (
      <Container>
        <TableContainer style={{marginTop: '5rem', flex: '1'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableRow>
              <TableCell style={{ display: "flex", alignItems: 'center', height: '3.4rem' }}>
                {isMobile ? (
                  <Typography variant="h6">Personajes</Typography>
                ) : (
                  <Typography variant="h4">Personajes</Typography>
                )}
                <SearchInput onClick={handleSearch} />
              </TableCell>
            </TableRow>
            <TableBody>
              {charactersData.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.url}>
                    <TableCell
                      key={row.url}
                      onClick={() => clickCharacter(row)}
                      style={{height: '3rem'}}
                    >
                      {row.name}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {open && (
          <CharacterDetails
            character={character}
            movies={characterMovies}
            isMobile={isMobile}
            open={open}
          />
        )}
      </Container>
  );
};

export default ListCharactersData;
