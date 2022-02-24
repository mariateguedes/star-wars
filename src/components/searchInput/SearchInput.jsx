import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import { SearchContainer } from "./styles";

const SearchInput = ({ onClick }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContainer>
      <TextField
      size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={() => onClick(search)}
        variant="outlined"
        color="primary"
        InputProps={{
          endAdornment: <Search onClick={() => onClick(search)} />,
        }}
      />
    </SearchContainer>
  );
};

export default SearchInput;
