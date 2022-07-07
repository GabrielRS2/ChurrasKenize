import { useEffect, useState } from "react";
import { Container } from "./style.js";
import api from "../../Services/index.js";
import { CardProduct } from "../CardProduct/index.jsx";

export const CardCombo = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    api.get("/combos").then((response) => {
      setCombos(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="card__container">
        {combos.map((combo,index) => {
          return <CardProduct key={index} combo={combo}/>
        })}
      </div>
    </Container>
  );
};
