import { useEffect, useState } from "react";
import api from "../../Services";
import { Container } from "./style"

export const Schedule = () => {
  
  const schedule = [
    { data: "22/10/2022", time: "diurno", isEvent: true },
    { data: "22/10/2022", time: "noturno", isEvent: false },
    { data: "23/10/2022", time: "noturno", isEvent: false }
  ];

  return (
    <Container>
      <h2>Agenda</h2>
      <div>
        {schedule.map((event) => (
          event.isEvent ? (
          <div className="scheduleEvent" key={event.id}>  
            <p>Data: {event.data}</p>
            <p>Horário: {event.time}</p>
          </div>
          ) : (
          <div className="scheduleEvent">  
            <p>Data: {event.data}</p>
            <p>Horário: {event.time}</p>
          </div>
          )
        ))}
      </div>
    </Container>
  )
}