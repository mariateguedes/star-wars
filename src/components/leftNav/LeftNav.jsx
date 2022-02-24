import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  grid-gap: 2rem;
  flex-flow: row nowrap;
  margin-left: -17rem;
  margin-top: 5rem;
  flex-flow: column nowrap;
  background-color: black;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 14rem;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Typography variant="h5" style={{ color: "white" }}>
          Personajes
        </Typography>
      </Link>
      <Link to="/movies" style={{textDecoration: 'none'}}>
        <Typography variant="h5" style={{ color: "white" }}>
        Películas
        </Typography>
      </Link>
    </Ul>
  );
};

export default LeftNav;
