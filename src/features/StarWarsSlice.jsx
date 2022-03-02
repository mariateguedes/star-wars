import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharactersApi, getCharactersSearchApi, getMoviesApi } from "../api/Api";

export const getCharacters = createAsyncThunk("getCharacters", async (next) =>
  getCharactersApi(next)
);

export const getCharactersSearch = createAsyncThunk(
  "getCharactersSearch",
  async (input) => getCharactersSearchApi(input)
);

export const getMovies = createAsyncThunk("getMovies", async (url) =>
  getMoviesApi(url)
);

const initialState = {
  inputSearch: "",
  charactersData: [],
  next: "https://swapi.dev/api/people",
  character: {},
  characterMovies: [],
  scroll: false,
  moviesData: [],
  movie: {},
  movies: []
};

export const starWarsSlice = createSlice({
  name: "starWars",
  initialState,
  reducers: {
    resetState: (state) => {
      state.id = initialState.id;
    },
    setCharacter: (state, action) => {
      state.character = action.payload;
      state.characterMovies = state.character.films.map((filmUrl) => {
        return state.moviesData.filter((x) => x.url === filmUrl)[0];
      });
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
    getMoviesByCharacter: (state, action) => {
      state.scroll = action.payload;
    },
    setInputSearch: (state, action) => {
      state.inputSearch = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setMovieId: (state, action) => {
      state.id = action.payload;
    },
    getMoviesSearch: (state, action) => {
      console.log('action', action.payload);
      if (action.payload !== undefined || action.payload !== "") state.moviesData = state.moviesData.filter((x) => x.title.includes(action.payload));
      else state.moviesData = state.movies;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.next = action.payload.next;
      if (action.payload.previous == null) {
        state.charactersData = action.payload.results;
      } else {
        state.charactersData = [
          ...state.charactersData,
          ...action.payload.results,
        ];
      }
      state.scroll = false;
    });
    builder.addCase(getCharactersSearch.fulfilled, (state, action) => {
      state.charactersData = action.payload.results;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.moviesData = action.payload.results;
      state.scroll = false;
    });
  },
});

export const { setCharacter, setScroll, setMovie, setInputSearch, setMovieId, getMoviesSearch, resetState } =
  starWarsSlice.actions;

export default starWarsSlice.reducer;
