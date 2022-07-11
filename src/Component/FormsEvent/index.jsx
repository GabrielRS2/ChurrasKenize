import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { ThemeSelect } from "../../Styles/ThemeSelect";
import { Container } from "./style";

export const FormsEvent = () => {
  const schema = yup.object().shape({
    date: yup.string().required("Campo Obrigatório"),
    time: yup.string().required("Campo Obrigatório"),
    duration: yup.string().required("Campo Obrigatório"),
    neighbours: yup.string().required("Campo Obrigatório"),
    street: yup.string().required("Campo Obrigatório"),
    numberLocal: yup.string().required("Campo Obrigatório"),
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
    // console.log("data");
  };
  return (
    <Container className="eventForm" onSubmit={handleSubmit(onSubmitFunction)}>
      <p>Solicite um evento</p>
      <ThemeSelect
        label="Data"
        name="date"
        error={errors.date?.message}
        register={register}
      >
        <option value="0708">07/08</option>
        <option value="0808">08/08</option>

        {/* {combo.datas.map()} DESENVOLVER A LÓGICA */}
      </ThemeSelect>

      <ThemeSelect
        label="Horário"
        name="time"
        error={errors.time?.message}
        register={register}
      >
        <option value="day">Diurno</option>
        <option value="nigth">Noturno</option>
      </ThemeSelect>

      <ThemeInput
        label="Duração em horas"
        name="duration"
        type="number"
        placeholder="Digite a duração do evento"
        error={errors.duration?.message}
        register={register}
      />

      <ThemeInput
        label="Bairro"
        name="neighbours"
        placeholder="Digite o bairro do evento"
        error={errors.neighbours?.message}
        register={register}
      />
      <ThemeInput
        label="Rua"
        name="street"
        placeholder="Digite a rua do evento"
        error={errors.street?.message}
        register={register}
      />
      <ThemeInput
        label="Numero do local"
        name="numberLocal"
        type="number"
        placeholder="Digite a duração do evento"
        error={errors.numberLocal?.message}
        register={register}
      />

      <ThemeButton schema="var(--red-2)" large type="submit">
        Confirmar evento
      </ThemeButton>
    </Container>
  );
};
