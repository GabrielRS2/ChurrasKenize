import { Container } from "./style";

function CardBbc() {
  return (
    <Container>
      <table className="combo-list">
        <thead>
          <tr>
            <th></th>
            <th>Combo</th>
            <th>Preço</th>
            <th>Tempo</th>
            <th>Pessoas</th>
          </tr>
        </thead>
        <tbody>
          <tr className="item"></tr>
        </tbody>
      </table>
    </Container>
  );
}

export default CardBbc;
