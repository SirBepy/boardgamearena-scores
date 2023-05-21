import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useModalContext } from "./";
import "./style.js";
import {
  StyledHeader,
  StyledModal,
  StyledModalBackground,
  StyledModalWrapper,
} from "./style.js";
import { Hoverable } from "../";
import ModalContent from "./modalContent";
import { useOverflowHidden } from "../../hooks/useOverflowHidden";

const Modal = () => {
  const { isOpen, data, title, close } = useModalContext();
  const [showModal, setShowModal] = useState(isOpen);
  useOverflowHidden(showModal);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  useEffect(() => {
    if (isOpen === showModal) return;
    if (isOpen) return setShowModal(isOpen);

    setTimeout(() => {
      setShowModal(isOpen);
    }, 300);
  }, [isOpen]);

  if (!showModal) return <></>;

  return (
    <StyledModalWrapper>
      <StyledModal className={!isOpen ? "close-modal" : ""}>
        <StyledHeader>
          <span></span>
          <h1>{title}</h1>
          <Hoverable onClick={close} className="hoverable">
            <FontAwesomeIcon icon={faXmark} />
          </Hoverable>
        </StyledHeader>
        <ModalContent data={data} />
      </StyledModal>
      <StyledModalBackground onClick={close} />
    </StyledModalWrapper>
  );
};

Modal.propTypes = {};

export { Modal };
