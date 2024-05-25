import { Container } from "./styles"
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

export function SetIngredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <GoPlus/> : <IoCloseOutline/>}
      </button>
    </Container>
  )
}