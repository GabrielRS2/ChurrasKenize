import React from "react";
import { Container } from "./style";
import Logo from "../../Assets/Logo.svg";
import { Link } from "react-router-dom";
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";

export const Welcome = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="left">
          <img src={Logo} alt="logo do site" />
        </div>

        <div className="right">
          <h1>Olá, Seja Bem Vindo(a)!</h1>
          <p>
            Pensamos na praticidade para o seu churrasco, encontre o
            churrasqueiro ideal e mais próximo de você!
          </p>
          <p>
            A Churraskenzie surgiu da necessidade de facilitar a realização de
            um churrasco, sem se preocupar com a forma como vai ser feito e
            quais produtos serão utilizados. Por isso a plataforma oferece a
            possibilidade de encontrar o churrasqueiro qualificado que te livre
            dessas dúvidas em questão, poupando tempo e preocupação de quem só
            quer comer uma carne de boa qualidade feita por um profissional
            qualificado.
          </p>
          <button>
            <Link to="/">Saiba mais...</Link>
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};
