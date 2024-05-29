import { Container } from "./styles"
import { FiPlus, FiX } from "react-icons/fi"

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
            <input
            type='text'
            value={value}
            readOnly={!isNew}
            {...rest}
            />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}