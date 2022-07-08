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
          <button>
            <Link to="/">Saiba mais...</Link>
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};
