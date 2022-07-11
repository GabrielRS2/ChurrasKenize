import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { Container } from "./style";

export const ComboListItem = ({combo}) => {

  return (
    <Container>
      <p>{combo.name}</p>
      <p>{combo.price}</p>
      <button><FaEdit/></button>
      <button><BsTrash/></button>
    </Container>
  )
}