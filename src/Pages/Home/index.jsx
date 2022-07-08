import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container } from "./style";
import { MdSearch } from "react-icons/md";
import { CardCombo } from "../../Component/CardCombo";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <header className="header__dashboard">
            <div className="header__filter">
              <h1>Churrascos</h1>
              <button>Preço</button>
              <button>Quantidade</button>
            </div>

            <div className="header__search">
              <MdSearch className="icon"/>
              <input type="text" placeholder="Faça sua pesquisa..."/>
            </div>
          </header>
          <CardCombo/>
        </div>
      </Container>
      <Footer />
    </>
  );
};
