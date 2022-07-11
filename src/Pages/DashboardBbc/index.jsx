import { useContext, useState } from "react";
import { useEffect } from "react";
import CardBbc from "../../Component/CardBbcHeader";
import CardProfileBbc from "../../Component/CardProfileBbc";
import { ComboListItem } from "../../Component/ComboListItem";
import { Footer } from "../../Component/Footer";
import { Header } from "../../Component/Header";
import { ModalCreateCombo } from "../../Component/ModalCreateCombo";
import { Schedule } from "../../Component/Schedule";
import { UserContext } from "../../Providers/User";
import api from "../../Services";
import ThemeButton from "../../Styles/ThemeButton";
import { Container, ContentContainer } from "./style";
import Modal from 'react-modal'

function DashboardBbc() {
  const [combos, setCombos] = useState([]);
  const { user } = useContext(UserContext);
  
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

  useEffect(() => {
    api.get(`/combos?userId=${user.id}`).then((res) => setCombos(res.data));
  }, []);

  console.log(combos);
  

  return (
    <Container>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <ModalCreateCombo handleCloseModal={handleCloseModal} />
        </Modal>
        
      <Header />
      <ContentContainer>
        <main>
          <div className="eventListBbc">
            <div className="headerEventList">
              <h2>Pedidos Recebidos</h2>
              <CardBbc />
            </div>
          </div>
          <div className="eventListBbc">
            <div className="headerComboList">
              <h2>Combos</h2>
              <ThemeButton schema="#000000" handleClick={handleOpenModal}>Criar Combo</ThemeButton>
            
            </div>
            <ul className="ComboList">
              {combos?.map((combo) => {
                  return <ComboListItem key={combo.id} combo={combo} />
              })}
            </ul>
          </div>
        </main>
        <aside className="bbc_user_info">
          <CardProfileBbc />
          <Schedule />
        </aside>
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default DashboardBbc;
