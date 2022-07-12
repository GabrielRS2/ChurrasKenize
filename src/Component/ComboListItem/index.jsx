import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { Container } from "./style";
import Modal from "react-modal";
import { ModalEditCombo } from "../ModalEditCombo/index";
import { ModalDeleteCombo } from '../ModalDeleteCombo/index'
import { useState } from "react";

export const ComboListItem = ({ combo }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteCombo, setDeleteCombo] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenDeleteModal() {
    setDeleteCombo(true);
  }

  function handleCloseDeleteModal() {
    setDeleteCombo(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };
  
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalEditCombo handleCloseModal={handleCloseModal} combo={combo} />
      </Modal>

      <Modal
        isOpen={modalDeleteCombo}
        onRequestClose={handleCloseDeleteModal}
        style={customStyles}
      >
        <ModalDeleteCombo handleCloseDeleteModal={handleCloseDeleteModal} combo={combo}/>
      </Modal>

      <img src={combo.img} alt="combo image"/>
      <p>{combo.combo}</p>
      <p>R${combo.price}</p>
      
      <div className="buttonsComboCard">
      <button onClick={handleOpenModal}>
        <FaEdit />
      </button>
      <button onClick={handleOpenDeleteModal}>
        <BsTrash />
      </button>
      </div>
    </Container>
  );
};
