import { useEffect, useState } from "react";
import { Container } from "./style.js"
import api from '../../Services/index.js'

export const CardCombo = () =>{
    const [combos, setCombos] = useState([]);

    useEffect(() => {
      api.get("/combos")
    .then(response=>{
      setCombos(response.data)
    })
    },[])
    
    return(
        <Container>
            <div className="card__container">
                {combos.map(combo=>{
                return <div className="card" key={combo.id}>
                    <div className="card__info">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-9BhAquXWRan3TnaL_ndnjAG0pXWkbxCkg&usqp=CAU' alt="foto do usuário"/>
                        <div>
                        <p>{combo.name}</p>
                        <p>{combo.city} - {combo.state}</p>
                        <p>R$ {combo.price} - {combo.quantity} Pessoas</p>
                        </div>
                    </div>

                    <div className="card__combo">
                        <h2>{combo.name}</h2>
                        <img src={combo.img} alt="foto do card"/>
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