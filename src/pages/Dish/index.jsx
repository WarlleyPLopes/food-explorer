import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { SideMenu } from "../../components/SideMenu"
import { Container } from "./styles"
import { ViewDish } from "../../components/ViewDish"
import { RiArrowLeftSLine } from "react-icons/ri"
import { useState } from "react"

export function Dish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      <ButtonText title={"Voltar"} icon={RiArrowLeftSLine} />
      <ViewDish />
      <Footer />
    </Container>
  )
}