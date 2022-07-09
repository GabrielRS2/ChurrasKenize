import { Container } from "./style";

function CardProfileBbc() {
  return (
    <div>
      <Container>
        <div className="left_info">
          <p>★★★☆☆</p>
          <figure>
            <img src="#" alt="foto" />
          </figure>
        </div>
        <div className="right_info">
          <p>Nome: João Churass</p>
          <p>Tipo: Churrasqueiro</p>
          <p>Dias Livres: Sex/Sab</p>
          <p>Horários: 10/18g</p>
          <button className="edit_profile_button">Editar</button>
        </div>
      </Container>
    </div>
  );
}

export default CardProfileBbc;
