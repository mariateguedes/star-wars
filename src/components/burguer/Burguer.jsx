import React, { useState } from "react";
import { StyledBurger } from "./styles";
import { Menu } from "@material-ui/icons";
import LeftNav from "../leftNav/LeftNav";

function Burguer() {
  const [open, setOpen] = useState(false);

  return (
    <StyledBurger open={open}>
      <Menu
        style={{ color: "white", cursor: 'pointer' }}
        fontSize="large"
        onClick={() => setOpen(!open)}
      />
      <LeftNav open={open} />
    </StyledBurger>
  );
}

export default Burguer;
