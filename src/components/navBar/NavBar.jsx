import React from "react";
import starWars from "../../assets/starWars.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Burguer from "../burguer/Burguer";

export const Nav = styled.nav`
  width: 100%;
  background-color: black;
  height: 5rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

function NavBar() {
  const history = useHistory();
  return (
    <Nav>
      <Burguer />
      <div style={{ marginRight: "6rem" }}>
        <img
          src={starWars}
          alt="StarWars"
          width="100"
          onClick={() => history.push("/")}
        />
      </div>
    </Nav>
  );
}

export default NavBar;
