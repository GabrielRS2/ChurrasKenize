import { useEffect, useState } from "react";
import { Container } from "./style.js"
import api from '../../Services/index.js'

    

export const CardCombo = () => {
  const [detail, setDetail] = useState(false);

   const [combos, setCombos] = useState([]);

   useEffect(() => {
       api.get("/combos")
      .then(response=>{
        setCombos(response.data)
      })
      },[])

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
          {combos.map((combo) => {
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
                  <button onClick={detailOn} id={combo.id}>Detalhes</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};
