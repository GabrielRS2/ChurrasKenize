import { useContext, useState } from "react";
import { useEffect } from "react";
import CardBbc from "../../Component/CardBbcHeader";
import CardProfileBbc from "../../Component/CardProfileBbc";
import { ComboListItem } from "../../Component/ComboListItem";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Schedule } from "../../Component/Schedule";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { Container, ContentContainer } from "./style";

function DashboardBbc() {
  const [combos, setCombos] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    api.get(`/combos?userId=${user.id}`).then((res) => setCombos(res.data));
  }, []);

  console.log(combos);

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
          </div>
          <div className="eventListBbc">
            <div className="headerComboList">
              <h2>Combos</h2>
              <ThemeButton schema="#000000">Criar Combo</ThemeButton>
            </div>
            <ul className="ComboList">
              {combos?.map((combo) => {
                  return <ComboListItem key={combo.id} combo={combo} />
              })}
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
