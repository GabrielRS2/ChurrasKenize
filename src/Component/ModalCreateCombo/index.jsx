import ThemeButton from "../../Styles/ThemeButton";
import { ThemeInput } from "../../Styles/ThemeInput";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify'
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import api from "../../Services";


export const ModalCreateCombo = ({ handleCloseModal }) => {
  const { user } = useContext(UserContext);

  const formSchema = yup.object().shape({
    combo: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    quantity: yup.string().required("Campo obrigatório"),
    duration: yup.string().required("Campo obrigatório"),
    img: yup.string().url("URL inválida!").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const onSubmitFunction = (data) => {
    const token = JSON.parse(localStorage.getItem('@churraskenzie:token'))
    data["userId"] = user.id
    data["name"] = user.name
    data["city"] = user.city
    data["state"] = user.state

    api.post("/combos",data,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((_)=>{
      handleCloseModal()
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
    <>
      <Container>
      <div className="headerModal">
        <p>Crie um combo</p>
        <button onClick={handleCloseModal} className="closeModal">X</button>
      </div>
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
        <ThemeButton schema="var(--red-2)" medium type="submit">
               Criar combo
              </ThemeButton>
      </form>
      </Container>
    </>
  );
};
