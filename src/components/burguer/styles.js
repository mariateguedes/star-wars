import styled from "styled-components";

export const StyledBurger = styled.div`
  top: 15px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#333" : "#ccc")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(0)" : "rotate(45deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      opacity: ${({ open }) => (open ? 0 : 6)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(0)" : "rotate(-45deg)")};
    }
  }
`;
