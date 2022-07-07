import { useForm } from "react-hook-form";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { ThemeTextArea } from "../../Styles/ThemeTextArea";
import { Container } from "./style";

export const ModalCreateCombo = ({ handleCloseModal }) => {
  const onSubmitFunction = (data) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Container>
      <div className="headerModal">
        <p>Crie um combo</p>
        <button onClick={handleCloseModal} className="closeModal">X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeInput
          label="Preço"
          name="price"
          placeholder="Preço do combo"
          register={register}
        />
        <ThemeInput
          label="Duração"
          name="duration"
          placeholder="Tempo de evento para combo"
          register={register}
        />
        <ThemeInput
          label="Nome do combo"
          name="combo"
          placeholder="Digite o nome do combo"
          register={register}
        />
        <ThemeInput
          label="Quantidade de pessoas"
          name="quantity"
          placeholder="Digite a quantidade de pessoas"
          register={register}
        />
        <ThemeTextArea
          label="Descrição"
          name="description"
          placeholder="Descrição do combo"
          register={register}
        />
        <ThemeButton schema="var(--red-2)" medium type="submit">
                Enviar combo
              </ThemeButton>
      </form>
      </Container>
    </>
  );
};
