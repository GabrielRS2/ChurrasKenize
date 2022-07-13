import { useState } from "react";
import { Container } from "./style"
import Modal from "react-modal";
import { ScheduleModal } from "../ScheduleModal";
import { useEffect } from "react";
import api from "../../Services";
import { useContext } from "react";
import { TokenContext } from "../../Providers/Token";
import { UserContext } from "../../Providers/User";
import { BsFillCalendar2CheckFill, BsFillCalendar2XFill } from 'react-icons/bs';

export const Schedule = ({ schedule, setSchedule }) => {
  
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext)

  useEffect(() => {
    api
    .get(`/schedule?userId=${user.id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => setSchedule(res.data))
  }, [])

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ScheduleModal handleCloseModal={handleCloseModal} setSchedule={setSchedule}/>
      </Modal>
      <div className="scheduleTitle">
        <h2>Agenda</h2>
        <button className="addScheduleBtn" onClick={handleOpenModal}>Adicionar data</button>
      </div>
      <div>
        {schedule.map((event) => (
          event.isEvent ? (
          <div className="scheduleEvent" key={event.id}>  
            <p>Data: {event.date}</p>
            <p>Horário: {event.period}</p>
            <p><BsFillCalendar2CheckFill /></p>
          </div>
          ) : (
          <div className="scheduleEvent" key={event.id}>  
            <p>Data: {event.date}</p>
            <p>Horário: {event.period}</p>
            <p><BsFillCalendar2XFill /></p>
          </div>
          )
        ))}
      </div>
    </Container>
  )
}