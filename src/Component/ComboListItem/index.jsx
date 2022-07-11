import { useEffect, useState } from "react";
import api from "../../Services";
import { Container } from "./style";

export const ComboListItem = ({event, combos}) => {

  const [combo, setCombo] = useState({})

 useEffect(() => {
  console.log("----",event);
  console.log("--", combos);
 },[event])  

  return (
    <Container>
      
    </Container>
  )
}