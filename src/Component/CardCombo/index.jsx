import { useEffect, useState } from "react";
import { Container } from "./style.js";
import api from "../../Services/index.jsx";
import { CardProduct } from "../CardProduct/index.jsx";

export const CardCombo = ({filteredName, filteredPrice, filteredQuantity}) => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    api.get("/combos").then((response) => {
      
      if(filteredName.length > 0){
        setCombos(filteredName)
      }else{
        setCombos(response.data);
      }

      if(filteredPrice.length > 0){
        setCombos(filteredPrice)
      }

      if(filteredQuantity.length > 0){
        setCombos(filteredQuantity)
      }
    });
  }, [filteredName,filteredPrice,filteredQuantity])

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
