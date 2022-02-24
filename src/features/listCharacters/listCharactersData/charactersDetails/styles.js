import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 6rem 1rem 4rem 6rem;
  margin-top: 5rem;
`;

export const ContainerMobile = styled.div`
  min-height: 50%;
  margin-top: 40%;
  background-color: white;
  column-gap: 12px;
  padding: 0.7rem 1.15rem 1.3rem 1.15rem;
  font-size: 15px;
  justify-content: center;
  box-shadow: 1px 1px 5px 0px rgb(0 0 0 / 20%);
  margin-bottom: 9px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 16px 22px -16px rgb(15 50 86 / 32%);
`;

export const LinkStyle = styled.div`
  display: list-item;
  margin-left: 2rem;
  text-decoration: underline;
  cursor: pointer;
`;
