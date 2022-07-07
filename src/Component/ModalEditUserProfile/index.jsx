import { useForm } from "react-hook-form";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { Container } from "./style";

export const ModalEditUserProfile = ({ handleCloseModal }) => {
  const onSubmitFunction = (data) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Container>
      <div className="headerModal">
        <p>Edite seu perfil</p>
        <button onClick={handleCloseModal} className="closeModal">X</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeInput
          label="Nome"
          name="name"
          placeholder="Edite seu nome"
          register={register}
        />
        <ThemeInput
          label="Estado"
          name="state"
          placeholder="Edite seu estado"
          register={register}
        />
        <ThemeInput
          label="Cidade"
          name="city"
          placeholder="Edite sua cidade"
          register={register}
        />
        <ThemeInput
          label="Contato"
          name="contact"
          placeholder="Edite seu contado"
          register={register}
        />
        <ThemeButton schema="var(--red-2)" medium type="submit">
                Finalizar
              </ThemeButton>
      </form>
      </Container>
    </>
  );
};
