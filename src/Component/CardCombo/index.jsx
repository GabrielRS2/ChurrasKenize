import { Container } from "./style.js"
import { useContext } from "react";
import { UserContext } from "../../Providers/User.js"

export const CardCombo = () =>{
    const {user} = useContext(UserContext)
    
    return(
        <Container>
            <div className="card__container">
                {user.map(user=>{
                return <div className="card" key={user.id}>
                    <div className="card__info">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-9BhAquXWRan3TnaL_ndnjAG0pXWkbxCkg&usqp=CAU' alt="foto do usuário"/>
                        <div>
                        <p>{user.name}</p>
                        <p>{user.city} - {user.state}</p>
                        </div>
                    </div>

                    <div className="card__combo">
                        <h2>{user.name}</h2>
                        <img src={user.img} alt="foto do card"/>
                    </div>

                    <div className="card__button">
                        <button className="active">Solicitar Acesso</button>
                        <button >Detalhes</button>
                    </div>
                </div>
                })}
            </div>
        </Container>
    )
}