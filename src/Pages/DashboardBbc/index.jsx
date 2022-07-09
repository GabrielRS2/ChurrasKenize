import CardBbc from "../../Component/CardBbc";
import CardProfileBbc from "../../Component/CardProfileBbc";
import ComboForm from "../../Component/ComboForm";
import { Header } from "../../Component/Header";
import { Container } from "./style";

function DashboardBbc() {
  return (
    <Container>
      <div className="dashbbc_container">
        <Header />
        <div className="wrapper">
          <main className="combo-lists">
            <section className="bbc_cards_container">
              <h2>Pedidos Recebidos</h2>
              <CardBbc />
              <h2>Combos de Churrasco</h2>
              <CardBbc />
            </section>
          </main>
          <aside className="bbc_user_info">
            <div className="bbc_cards_container">
              <h2>Meu perfil</h2>
              <CardProfileBbc />
            </div>
            <div className="bbc_cards_container">
              <h2>Criar Combo</h2>
              <ComboForm />
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}

export default DashboardBbc;
