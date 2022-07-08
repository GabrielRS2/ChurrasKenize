import { useState } from "react";
import { Container } from "./styles";

export const CardProduct = ({ combo}) => {
  const [detail, setDetail] = useState(false);

  function detailOn() {
    setDetail(true);
  }

  function detailOff() {
    setDetail(false);
  }

  return (
    <Container>
      {detail ? (
        <div className="cardDetail" key={combo.id}>
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
            <button className="active">Solicitar Evento</button>
            <button onClick={detailOn} id={combo.id}>
              Detalhes
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};
