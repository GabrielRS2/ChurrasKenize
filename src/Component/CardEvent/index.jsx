import { BsTrash } from "react-icons/bs";

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, OtherInfos, TitleAndImage } from "./styles";
import { ApiContext } from "../../Providers/Api";

export const CardEvent = ({
  event,
  setEvents,
  events
}) => {
  const [combo, setCombo] = useState({});

  const { getComboById, deleteEvent } = useContext(ApiContext);

  useEffect(() => {
    getComboById(event.combo, setCombo);
  }, [event]);

  function deleteEventHandle() {
    const newEvents = events.filter((evento) => {return evento.id !== event.id})
    setEvents(newEvents)
    deleteEvent(event.id, events, setEvents);
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
