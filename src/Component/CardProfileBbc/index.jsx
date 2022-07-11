import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { Container, ContainerAll } from "./style";
import Modal from "react-modal";
import { ModalEditUserProfile } from "../ModalEditUserProfile";

function CardProfileBbc() {

  const { user } = useContext(UserContext);
  const [modalIsOpen, setIsOpen] = useState(false);

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
    <ContainerAll>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <ModalEditUserProfile handleCloseModal={handleCloseModal} />
        </Modal>
      <h2>Meu perfil</h2>
      <Container>
        <div className="left_info">
          {user.category === "Churrasqueiro" && 
          <p>★★★☆☆</p>
          }
          <figure>
            <img src="#" alt="foto" />
          </figure>
        </div>
        <div className="right_info">
          <p>Nome: {user.name}</p>
          <p>Cidade: {user.city}</p>
          <p>Estado: {user.state}</p>
          <p>Contato: {user.contact}</p>
          <button className="edit_profile_button" onClick={handleOpenModal}>Editar</button>
        </div>
      </Container>
    </ContainerAll>
  );
}

export default CardProfileBbc;
