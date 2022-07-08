import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { Container } from "./style";
import { MdSearch } from "react-icons/md";
import { CardCombo } from "../../Component/CardCombo";
import { useEffect, useState } from "react";
import api from "../../Services";

export const Home = () => {
  const [combos, setCombos] = useState([]);
  const [value, setValue] = useState('')

  useEffect(() => {
    api.get("/combos").then((response) => {
      setCombos(response.data);
    });
  }, []);

  const filteredName = combos.filter(combo=>{
    return combo.combo.toLowerCase().includes(value.toLowerCase()) || combo.name.toLowerCase().includes(value.toLowerCase()) || combo.city.toLowerCase().includes(value.toLowerCase())
  })

  function filterPrice(){
    const filteredPrice = combos.filter(combo=>{
      return combo.price > 400.95
    })
    console.log(filteredPrice);
  }

  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <header className="header__dashboard">
            <div className="header__filter">
              <h1>Churrascos</h1>
              <button onClick={filterPrice}>Preço</button>
              <button>Quantidade</button>
            </div>

            <div className="header__search">
              <MdSearch className="icon"/>
              <input type="text" placeholder="Faça sua pesquisa..." value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
          </header>
          <CardCombo filteredName={filteredName}/>
        </div>
      </Container>
      <Footer />
    </>
  );
};
