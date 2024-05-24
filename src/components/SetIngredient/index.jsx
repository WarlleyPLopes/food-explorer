import { Container } from "./styles"
import close from "../../assets/icons/close.svg"
import plus from "../../assets/icons/plus.svg"

export function SetIngredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? { close } : { plus }}
      </button>
    </Container>
  )
}