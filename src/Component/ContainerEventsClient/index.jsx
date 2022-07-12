import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Providers/Api";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import CardEvent from "../CardEvent";
import { Container, StyledTitles } from "./style";

export const ContainerEventsClient = () => {
  const [events, setEvents] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const { user } = useContext(UserContext);
  const { getEventsByUser } = useContext(ApiContext);

  useEffect(() => {
    getEventsByUser(user.id, setEvents);
    // .then(setIsDeleted);
  }, [isDeleted]);

  return (
    <Container>
      <h2>Eventos Marcados</h2>

      {events?.map((event, i) => {
        return (
          <CardEvent
            key={i}
            event={event}
            events={events}
            setEvents={setEvents}
            isDeleted={isDeleted}
            setIsDeleted={setIsDeleted}
          />
        );
      })}
    </Container>
  );
};
