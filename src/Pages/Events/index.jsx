import { ContainerEvent } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { useState } from "react";
import Modal from "react-modal";
import { ModalEditUserProfile } from "../../Component/ModalEditUserProfile";

export const EventsPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  const schema = yup.object().shape({
    date: yup.string().required("Campo Obrigatório"),
    time: yup.string().required("Campo Obrigatório"),
    duration: yup.string().required("Campo Obrigatório"),
    state: yup.string().required("Campo Obrigatório"),
    city: yup.string().required("Campo Obrigatório"),
    combo: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <ContainerEvent>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <ModalEditUserProfile handleCloseModal={handleCloseModal}/>
        </Modal>
        <div className="bodyEventPage">
          <form className="eventForm" onSubmit={handleSubmit(onSubmitFunction)}>
            <p>Solicite um evento</p>
            <ThemeInput
              label="Data"
              name="date"
              placeholder="Digite a data do evento"
              error={errors.date?.message}
              register={register}
            />
              <ThemeInput
                label="Horário"
                name="time"
                placeholder="Digite o horário do evento"
                error={errors.time?.message}
                register={register}
              />
              <ThemeInput
                label="Duração"
                name="duration"
                placeholder="Digite a duração do evento"
                error={errors.duration?.message}
                register={register}
              />
              <label>Estado</label>
              <select name="state" {...register("state")}>
                <option value="">Selecione o estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="EX">Estrangeiro</option>
              </select>
              <ThemeInput
                label="Cidade"
                name="city"
                placeholder="Digite a cidade do evento"
                error={errors.city?.message}
                register={register}
              />
              <ThemeInput
                label="Combo"
                name="combo"
                placeholder="Digite o combo desejado"
                error={errors.combo?.message}
                register={register}
              />
              <ThemeButton schema="var(--red-2)" large type="submit">
                Confirmar evento
              </ThemeButton>
            </form>
          </div>
          <div className="infoProfile">
            <div className="profile">
              <p>Meu perfil</p>
            </div>
            <div className="events">
              <p>Eventos</p>
            </div>
          </div>
    </ContainerEvent>
      <Footer/>
    </>
  );
};
