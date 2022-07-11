import { Container } from "./style";

export const Footer = () => {
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Container>
        <p className="active">(xx) x xxxx - xxxx</p>
        <p>Grupo4 Luiz © All rights reserved </p>
        <p className="active">email@domínio.com</p>
        <button onClick={backToTop}>&uarr;</button>
      </Container>
    </>
  );
};
