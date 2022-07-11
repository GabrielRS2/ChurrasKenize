import { useForm } from "react-hook-form";
import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ComboForm() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    people_number: yup.string().required("Campo obrigatório"),
    time: yup.string().required("Campo obrigatório"),
    img: yup.string().url("URL inválida!").required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <Container>
      <form onSubmit={handleSubmit(() => null)}>
        <div className="meta-container">
          <label htmlFor="name">Nome</label>
          <span>{errors.name ? ` - ${errors.name.message}` : null}</span>
        </div>
        <input placeholder="Digite o nome do combo" {...register("name")} />
        <div className="meta-container">
          <label htmlFor="price">Preço</label>
          <span>{errors.price ? ` - ${errors.price.message}` : null}</span>
        </div>
        <input
          placeholder="Digite o preço do combo"
          type="number"
          {...register("price")}
        />
        <div className="meta-container">
          <label htmlFor="people_number">Para quantas pessoas</label>
          <span>
            {errors.people_number ? ` - ${errors.people_number.message}` : null}
          </span>
        </div>
        <input
          placeholder="Digite a quantidade de pessoas"
          type="text"
          {...register("people_number")}
        />
        <div className="meta-container">
          <label htmlFor="time"> Tempo estimado</label>
          <span>
            {errors.people_number ? ` - ${errors.people_number.message}` : null}
          </span>
        </div>
        <input
          placeholder="Digite o tempo estimado de preparo"
          type="text"
          {...register("time")}
        />
        <div className="meta-container">
          <label htmlFor="img">Imagem</label>
          <span>
            {errors.people_number ? ` - ${errors.people_number.message}` : null}
          </span>
        </div>
        <input placeholder="Url" type="url" {...register("img")} />
        <button type="submit">Criar combo</button>
      </form>
    </Container>
  );
}

export default ComboForm;
