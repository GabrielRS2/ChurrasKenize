import { BsTrash, BsInfoCircleFill } from "react-icons/bs";

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, OtherInfos, TitleAndImage } from "./styles";
import { ApiContext } from "../../Providers/Api";
import api from "../../Services";
import { TokenContext } from "../../Providers/Token";
import { DetailEvent } from "../DetailEvent";

export const CardEvent = ({
  event,
  setEvents,
  events,
  schedule,
  setSchedule,
}) => {
  const [combo, setCombo] = useState({});
  const [detail, setDetail] = useState(false);

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

    const newSchedule = [
      ...schedule.filter((item) => {
        return item.id !== +event.scheduleId;
      }),
      {
        date: event.date,
        period: event.time,
        isEvent: false,
        userId: event.comboOnwer,
        id: +event.scheduleId,
      }];
      
    setEvents(newEvents);
    deleteEvent(event.id, events, setEvents);
    api
      .patch(`/schedule/${event.scheduleId}`, isEventSchedule, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        schedule.length > 0 && setSchedule(newSchedule);
      });
  }

  function detailOn() {
    setDetail(true);
  }

  function detailOff() {
    setDetail(false);
  }

  return (
    <Container>

      {detail ? (
        <DetailEvent event={event} detailOff={detailOff} />
      ) : (
        <>
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
          <div className="iconSection">
            <button className="icon" onClick={deleteEventHandle}>
              <BsTrash />
            </button>
            <button className="icon" onClick={detailOn} id={combo.id}>
              <BsInfoCircleFill />
            </button>
          </div>
        </>
      )}

    </Container>
  );
};

export default CardEvent;
