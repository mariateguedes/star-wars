import React from "react";
import { ContainerData, ContainerIcon, ContainerMobile } from "./styles";
import { IconButton, Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function MobileContainer({ children, open, onClick }) {
  return (
    <Modal open={open}>
      <ContainerMobile>
        <ContainerIcon>
          <IconButton onClick={onClick}>
            <Close />
          </IconButton>
        </ContainerIcon>
        <ContainerData>{children}</ContainerData>
      </ContainerMobile>
    </Modal>
  );
}

export default MobileContainer;
