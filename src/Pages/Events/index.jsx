import { Container } from "./style";
import background from "./../../Assets/Background-User.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ThemeInput } from "../../Styles/ThemeInput";

export const EventsPage = () => {
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
    <Container>
      <div className="entirePage">
        <div className="bodyEventPage">
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <p>Solicite um evento</p>

            <ThemeInput
              label="Data"
              name="date"
              placeHolder="Digite a data do evento"
              error={errors.date?.message}
              register={register}
            />

            <ThemeInput
              label="Horário"
              name="time"
              placeHolder="Digite o horário do evento"
              error={errors.time?.message}
              register={register}
            />
            <ThemeInput
              label="Duração"
              name="duration"
              placeHolder="Digite a duração do evento"
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
              placeHolder="Digite a cidade do evento"
              error={errors.city?.message}
              register={register}
            />
            <label>
              Cidade{<span className="error">{errors.city?.message}</span>}
            </label>
            <input
              name="city"
              placeholder="Digite a cidade do evento"
              {...register("city")}
            />
            <ThemeInput
              label="Combo"
              name="combo"
              placeHolder="Digite o combo desejado"
              error={errors.combo?.message}
              register={register}
            />
            <button type="submit">Solicitar evento</button>
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
      </div>
      <img src={background} alt="background" />
    </Container>
  );
};
