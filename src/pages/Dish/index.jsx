import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Container } from "./styles"
import { ViewDish } from "../../components/ViewDish"
import { RiArrowLeftSLine } from "react-icons/ri"

export function Dish() {
  return (
    <Container>
      <Header />
      <ButtonText title={"Voltar"} icon={RiArrowLeftSLine} />
      <ViewDish />
      <Footer />
    </Container>
  )
}