import { Container } from "./style.js";
import { useState } from "react";

export const CardCombo = ({ combo }) => {
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
        <>
        <p>{combo.description}</p>
        <button onClick={detailOff}>X</button>
        </>
      ) : (
        <div className="card__container">
          {combo.map((combo) => {
            return (
              <div className="card" key={combo.id}>
                <div className="card__info">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-9BhAquXWRan3TnaL_ndnjAG0pXWkbxCkg&usqp=CAU"
                    alt="foto do usuário"
                  />
                  <div>
                    <p>{combo.name}</p>
                    <p>
                      {combo.city} - {combo.state}
                    </p>
                  </div>
                </div>

                <div className="card__combo">
                  <h2>{combo.name}</h2>
                  <img src={combo.img} alt="foto do card" />
                </div>

                <div className="card__button">
                  <button className="active">Solicitar Acesso</button>
                  <button onClick={detailOn}>Detalhes</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};
