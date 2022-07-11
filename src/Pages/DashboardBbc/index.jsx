import { useContext, useState } from "react";
import { useEffect } from "react";
import CardBbc from "../../Component/CardBbcHeader";
import CardProfileBbc from "../../Component/CardProfileBbc";
import ComboForm from "../../Component/ComboForm";
import { ComboListItem } from "../../Component/ComboListItem";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Schedule } from "../../Component/Schedule";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { ContainerEvent } from "../Events/style";
import { Container, ContentContainer } from "./style";

function DashboardBbc() {

  // const [ combos, setCombos ] = useState(false); 
  // const [ events, setEvents ] = useState(false); 
  // const [ userEvents, setUserEvents] = useState([])
  // const { user } = useContext(UserContext);

  // function userEventsUpdate() {
  //   setUserEvents(false);
  //   events?.forEach((event) => {
  //     combos?.forEach((combo) => {
  //       if(event.combo === combo.id) {
  //         setUserEvents([...userEvents, event]);
  //       }
  //     })
  //   });
  // }

  // useEffect(() => {
  //   api.get("/events")
  //   .then((res) => setEvents(res.data))
  //   api.get(`/combos?userId=${user.id}`)
  //   .then((res) => setCombos(res.data))
  // },[user.id]);

  // useEffect(() => {
  //   userEventsUpdate();
  // },[combos, events])

  return (
    <Container>
      <Header />
        <ContentContainer>
          <main>
            <div className="eventListBbc">
              <div className="headerEventList">
                <h2>Pedidos Recebidos</h2>
                <CardBbc />
              </div>
              <ul className="ComboList">
              {/* {userEvents?.map((event) => {
                <ComboListItem event={event} combos={combos}/>
              })} */}
              </ul>
            </div>
            <div className="eventListBbc">
              <div className="headerComboList">
                <h2>Combos</h2>
                <ThemeButton schema="#000000">Criar Combo</ThemeButton>
              </div>
              <ul className="ComboList">
              {/* {userEvents?.map((event) => {
                <ComboListItem event={event} combos={combos}/>
              })} */}
              </ul>
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
