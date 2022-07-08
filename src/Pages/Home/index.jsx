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
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()

  useEffect(() => {
    api.get("/combos").then((response) => {
      setCombos(response.data);
    });
  }, []);

  const filteredName = combos.filter(combo=>{
    return combo.combo.toLowerCase() === value.toLowerCase()
  })
  
  const filteredPrice = combos.filter(combo=>{
    return combo.price < price 
  })

  const filteredQuantity = combos.filter(combo=>{
    return combo.price === quantity 
  })
  
  return (
    <>
      <Header />
      <Container>
        <div className="wrapper">
          <header className="header__dashboard">
            <div className="header__filter">
              <h1>Churrascos</h1>

              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option>Preço</option>
                <option value='400'>R$ 400</option>
                <option value='300'>R$ 300</option>
                <option value='200'>R$ 200</option>
              </select>

              <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                <option>Quantidade</option>
                <option value='20'>20 pessoas</option>
                <option value='10'>10 pessoas</option>
              </select>
            </div>

            <div className="header__search">
              <MdSearch className="icon"/>
              <input type="text" placeholder="Faça sua pesquisa..." value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
          </header>
          <CardCombo filteredName={filteredName} filteredPrice={filteredPrice} filteredQuantity={filteredQuantity}/>
        </div>
      </Container>
      <Footer />
    </>
  );
};
