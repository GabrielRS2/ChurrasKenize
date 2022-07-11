import { useContext, useState } from "react";
import { UserContext } from "../../Providers/User";
import { ModalEditUserProfile } from "../ModalEditUserProfile";
import { Container } from "./style";
import Modal from "react-modal";

function CardProfileBbc() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
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
    <div>
      <Container>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <ModalEditUserProfile handleCloseModal={handleCloseModal} />
        </Modal>
        <div className="left_info">
          <p>★★★☆☆</p>
          <figure>
            <img src="#" alt="foto" />
          </figure>
        </div>
        <div className="right_info">
          <p>Nome: {user.name}</p>
          <p>Cidade: {user.city}</p>
          <p>Estado: {user.state}</p>
          <p>Contato: {user.contact}</p>
          <button onClick={handleOpenModal} className="edit_profile_button">Editar</button>
        </div>
      </Container>
    </div>
  );
}

export default CardProfileBbc;
