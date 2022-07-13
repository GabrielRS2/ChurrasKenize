import { BsTrash } from "react-icons/bs";

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, OtherInfos, TitleAndImage } from "./styles";
import { ApiContext } from "../../Providers/Api";
import api from "../../Services";
import { TokenContext } from "../../Providers/Token";

export const CardEvent = ({ event, setEvents, events, schedule, setSchedule }) => {
  const [combo, setCombo] = useState({});

  const { getComboById, deleteEvent } = useContext(ApiContext);

  const isEventSchedule = { userId: event.comboOnwer, isEvent: false };

  const { token } = useContext(TokenContext);

  useEffect(() => {
    getComboById(event.combo, setCombo);
  }, [event]);

  function deleteEventHandle() {
    const newEvents = events.filter((evento) => {
      return evento.id !== event.id;
    });
    const newSchedule = [...schedule.filter((item) => {
      return item.id !== +event.scheduleId
    }),
    {
      "date": event.date,
      "period": event.time,
      "isEvent": false,
      "userId": event.comboOnwer,
      "id": +event.scheduleId
    }]
    console.log(newSchedule);
    setEvents(newEvents);
    deleteEvent(event.id, events, setEvents);
    api.patch(`/schedule/${event.scheduleId}`, isEventSchedule, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((_) => {
      schedule.length > 0 && setSchedule(newSchedule)
    })
  }

  return (
    <Container>
      <TitleAndImage>
        <h3>{combo?.combo}</h3>
        <img src={combo?.img} alt="" />
      </TitleAndImage>
      <OtherInfos>
        <div>
          <p className="infoTitle">Preço:</p>
          <h3 className="dark">R${combo?.price}</h3>
        </div>
        <div>
          <p className="infoTitle">Dia:</p>
          <h3>
            {event.date} - {event.time}
          </h3>
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
