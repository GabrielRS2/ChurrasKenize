import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ApiContext } from "../../Providers/Api";
import api from "../../Services";
import { Container, TitleAndImage } from "./styles";

export const CardEvent = ({ event }) => {
  const [combo, setCombo] = useState({});

  const { getComboById } = useContext(ApiContext);

  useEffect(() => {
    getComboById(event.combo, setCombo);
  }, []);

  return (
    <Container>
      <TitleAndImage>
        <h3>{combo.name}</h3>
        <img src={combo.img} alt="" />
      </TitleAndImage>
      <p className="dark">R${combo.price}</p>
      <p>{event.time}h</p>
      <p>Até {combo.quantity} pessoas.</p>
    </Container>
  );
};

export default CardEvent;
