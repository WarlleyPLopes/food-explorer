import { HiOutlineMinusSmall, HiOutlinePlus } from "react-icons/hi2"
import { Container } from "./styles"

export function AddQuantity() {
  return (
    <Container>
      <button>
        <HiOutlineMinusSmall size={24} />
      </button>
      <span>01</span>
      <button>
        <HiOutlinePlus size={24} />
      </button>
    </Container>
  )
}