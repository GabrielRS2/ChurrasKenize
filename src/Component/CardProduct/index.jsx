import { useState } from "react";
import { FormsEvent } from "../FormsEvent";
import { Container } from "./styles";
import Modal from "react-modal";

export const CardProduct = ({ combo}) => {
  const [detail, setDetail] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const comboId = combo.id;

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function detailOn() {
    setDetail(true);
  }

  function detailOff() {
    setDetail(false);
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
          <FormsEvent handleCloseModal={handleCloseModal} comboId={comboId}/>
        </Modal>
      {detail ? (
        <div className="cardDetail" key={combo.id} >
          <div className="headerCardDetail">
            <h4>Detalhes</h4>
            <button onClick={detailOff}>X</button>
          </div>
          <h3>{combo.combo}</h3>
          <p>
            Cidade: {combo.city}.
          </p>
          <p>
            Preço:{" "}
            {combo.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            .
          </p>
          <p>
            Atende até {combo.quantity} Pessoas.
          </p>
          <span>{combo.description}</span>
        </div>
      ) : (
        <div className="card" key={combo.id}>
          <div className="card__info">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-9BhAquXWRan3TnaL_ndnjAG0pXWkbxCkg&usqp=CAU"
              alt="foto do usuário"
            />
            <div>
              <p>{combo.name}</p>
              <p>{combo.city} - {combo.state}</p>
              <p>R$ {combo.price} - {combo.quantity} Pessoas</p>
            </div>
          </div>

          <div className="card__combo">
            <h2>{combo.combo}</h2>
            <img src={combo.img} alt="foto do card" />
          </div>

          <div className="card__button">
            <button onClick={handleOpenModal} className="active">Solicitar Evento</button>
            <button onClick={detailOn} id={combo.id}>
              Detalhes
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};
