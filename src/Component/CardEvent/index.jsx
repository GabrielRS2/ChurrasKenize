import { BsTrash } from "react-icons/bs";

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ApiContext } from "../../Providers/Api";
import api from "../../Services";
import { Container, OtherInfos, TitleAndImage } from "./styles";

export const CardEvent = ({
  event,
  setEvents,
  events,
  isDeleted,
  setIsDeleted,
}) => {
  const [combo, setCombo] = useState({});

  const { getComboById, deleteEvent } = useContext(ApiContext);

  useEffect(() => {
    console.log(events,event)
    getComboById(event.combo, setCombo);
  }, []);

  function deleteEventHandle() {
    console.log("listaInicial", events);
    console.log("idConsole", event.id);

    deleteEvent(event.id, events, setEvents, isDeleted, setIsDeleted);
  }

  return (
    <Container>
      <TitleAndImage>
        <h3>{combo?.name}</h3>
        <img src={combo?.img} alt="" />
      </TitleAndImage>
      <OtherInfos>
        <div>
          <p className="infoTitle">Preço:</p>
          <h3 className="dark">R${combo?.price}</h3>
        </div>
        <div>
          <p className="infoTitle">Periodo:</p>
          <h3>{event.time}</h3>
        </div>
        <div>
          <p className="infoTitle">Quantidade:</p>
          <h3>Até {combo?.quantity} pessoas.</h3>
        </div>
      </OtherInfos>
      <button className="deleteIcon" onClick={deleteEventHandle}>
        <BsTrash />
      </button>
    </Container>
  );
};

export default CardEvent;
