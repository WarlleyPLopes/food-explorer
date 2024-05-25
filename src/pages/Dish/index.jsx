import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Container } from "./styles"
import { ViewDish } from "../../components/ViewDish"
import { GoChevronLeft } from "react-icons/go"

export function Dish() {
  return (
    <Container>
      <Header />
      <button>
        <GoChevronLeft size={30} />
        Voltar
      </button>
      <ViewDish />
      <Footer />
    </Container>
  )
}