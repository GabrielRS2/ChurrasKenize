import { useEffect, useState } from "react";
import { Container } from "./style.js";
import api from "../../Services/index.jsx";
import { CardProduct } from "../CardProduct/index.jsx";

export const CardCombo = ({filteredName}) => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    api.get("/combos").then((response) => {
      
      if(filteredName.length > 0){
        setCombos(filteredName)
      }else{
        setCombos(response.data);
      }
    });
  }, [filteredName])

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
