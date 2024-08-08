import { HiOutlineMinusSmall, HiOutlinePlus } from "react-icons/hi2"
import { Container } from "./styles"
import { useState } from "react"

export function AddQuantity() {
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    if (quantity > 19) {
      alert("Erro: A quantidade máxima é de 20 unidades")
      return
    }
    setQuantity((count) => count + 1)
  }

  const decrease = () => {
    if (quantity < 2) {
      alert("Erro: A quantidade mínima é 1 unidade")
      return
    }
    setQuantity((count) => count - 1)
  }
  
  return (
    <Container>
      <button onClick={decrease}>
        <HiOutlineMinusSmall size={24} />
      </button>
        <span>{quantity.toString().padStart(2, "0")}</span>
      <button onClick={increase}>
        <HiOutlinePlus size={24} />
      </button>
    </Container>
  )
}