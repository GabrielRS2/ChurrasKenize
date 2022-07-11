import { useForm } from "react-hook-form";
import { Container } from "./style";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from '../../Styles/ThemeButton'

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify'
import api from "../../Services";
import { UserContext} from "../../Providers/User";
import { useContext } from 'react'

function ComboForm() {
  const {user} = useContext(UserContext)

  const formSchema = yup.object().shape({
    combo: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    quantity: yup.string().required("Campo obrigatório"),
    duration: yup.string().required("Campo obrigatório"),
    avatar: yup.string().url("URL inválida!").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const onSubmitFunction = (data) => {
    const id = user.id
    const token = JSON.parse(localStorage.getItem('@churraskenzie:token'))
    data["userId"] = id
    data["name"] = user.name
    data["city"] = user.city
    data["state"] = user.state

    api.post("/combos",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .catch(error =>{
      if(error){
        toast.error('Falha ao criar o combo!')
      }else{
        toast.success('Combo criado com sucesso!')
        
      }
    })
   
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
      <ThemeInput
        label="Nome do combo"
        name="combo"
        placeholder="Digite seu combo"
        error={errors.combo?.message}
        register={register}
      />

      <ThemeInput
        label="Preço"
        name="price"
        placeholder="Digite seu price"
        error={errors.price?.message}
        register={register}
      />

      <ThemeInput
        label="Quantidade"
        name="quantity"
        placeholder="Digite a quantidade de pessoas"
        type="text"
        error={errors.quantity?.message}
        register={register}
      />
      <ThemeInput
        label="Duração"
        name="duration"
        placeholder="Digite a duração"
        type="text"
        error={errors.duration?.message}
        register={register}
      />

        <ThemeInput
        label="Avatar"
        name="img"
        placeholder="Digite a url da imagem"
        type="text"
        error={errors.avatar?.message}
        register={register}
      />
        <ThemeButton  type='submit' schema="var(--red-2)" large>Criar combo</ThemeButton>
      </form>
    </Container>
  );
}

export default ComboForm;
