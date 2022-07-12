import { useContext, useState } from "react";
import { useEffect } from "react";
import CardBbc from "../../Component/CardBbcHeader";
import CardProfileBbc from "../../Component/CardProfileBbc";
import { ComboListItem } from "../../Component/ComboListItem";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { ModalCreateCombo } from "../../Component/ModalCreateCombo";
import { Schedule } from "../../Component/Schedule";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { Container, ContentContainer } from "./style";
import Modal from "react-modal";
import { EventListItem } from "../../Component/EventsListItem";
import CardEvent from "../../Component/CardEvent";
import { ContainerEventsBbc } from "../../Component/ContainerEventsBbc";

function DashboardBbc() {
  const [combos, setCombos] = useState([]);
  const [combosId, setCombosId] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventsBbc, setEventsBbc] = useState([]);
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));

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

  async function getCombosUser() {
    await api
      .get(`/combos?userId=${user.id}`)
      .then((res) => {
        res.data.forEach((combo) => {
          combosId.push(combo.id)
        })
        setCombos(res.data)
      });
  }

  async function getEventsUser() {
    await api
    .get("/events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setEvents(res.data));
  }

  useEffect(() => {
    getCombosUser()
    getEventsUser()
  }, []);

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <ModalCreateCombo handleCloseModal={handleCloseModal} combos={combos} setCombos={setCombos}/>
      </Modal>
      <Header />
      <ContentContainer>
        <main>
          {/* <ContainerEventsBbc /> */}
          <div className="eventComboBbc">
            <div className="headerComboList">
              <h2>Combos</h2>
              <ThemeButton schema="#000000" handleClick={handleOpenModal}>
                Criar Combo
              </ThemeButton>
            </div>
            <ul className="ComboList">
              {combos?.map((combo) => {
                return <ComboListItem key={combo.id} combo={combo} combos={combos} setCombos={setCombos}/>;
              })}
            </ul>
          </div>
          <div className="eventListBbc">
            <div className="headerEventList">
              <h2>Pedidos Recebidos</h2>
              <ul className="OrdersList">
                {events?.filter((event) => {return combosId.includes(event.combo)}).map((event, index) => {
                  return <CardEvent key={index} event={event} />;
                })}
              </ul>
            </div>
          </div>
        </main>
        <aside className="bbc_user_info">
          <CardProfileBbc />
          <Schedule />
        </aside>
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default DashboardBbc;
