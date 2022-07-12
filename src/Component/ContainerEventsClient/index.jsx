import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Providers/Api";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import CardEvent from "../CardEvent";
import { Container, StyledTitles } from "./style";

export const ContainerEventsClient = () => {
  const [events, setEvents] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    api
      .get(`/events?userId=${user.id}`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <Container>
      <h2>Eventos Marcados</h2>
      <StyledTitles>
        <h3>Combo</h3>
        <h3>Preço</h3>
        <h3>Início</h3>
        <h3>Pessoas</h3>
      </StyledTitles>
      {events?.map((event, i) => {
        return <CardEvent key={i} event={event} />;
      })}
    </Container>
  );
};
