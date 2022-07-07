import { Header } from "../../Component/Header";
import { Container } from "./style";

function DashboardBbc() {
  return (
    <div className="dashbbc_container">
      <Header />
      <Container>
        <main>
          <section className="">
            <h2>Pedidos Recebidos</h2>
          </section>
          <section>
            <h2>Combos de Churrasco</h2>
          </section>
        </main>
        <aside>
          <div>
            <h2>Meu perfil</h2>
          </div>
          <div>
            <h2>Agenda</h2>
          </div>
        </aside>
      </Container>
    </div>
  );
}

export default DashboardBbc;
