import { toast } from "react-toastify";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { Container } from './style';

export const ModalDeleteCombo = ({ handleCloseDeleteModal, combo, combos, setCombos}) => {
    const token = JSON.parse(localStorage.getItem("@churraskenzie:token"));

    function deleteCombo() {
      api
      .delete(`/combos/${combo.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        handleCloseDeleteModal()
        setCombos(combos.filter((item) => {return item.id !== combo.id}))
        toast.success("Combo deletado com sucesso!");
      })
      .catch((error) => {
        console.log(combo);
        toast.error("Falha ao deletar combo!");
      });
    }

  return (
    <Container>
        <div className="validationLogin">
            <p>
              Tem certeza que quer deletar o combo?
            </p>
            <div className="validationButtons">
                <ThemeButton schema="var(--red-2)" handleClick={deleteCombo}>
                    Sim
                </ThemeButton>
                <ThemeButton schema="var(--red-2)" handleClick={handleCloseDeleteModal}>
                    Não
                </ThemeButton>
            </div>
        </div>
    </Container>
  );
};
