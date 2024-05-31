import { useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Section } from "../../components/Section"
import { SideMenu } from "../../components/SideMenu"
import { Container } from "./styles"

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      
      <Hero />

      <Section title={"Refeição"} />
      <Section title={"Bebidas"} />
      <Section title={"Sobremesas"} />

      <Footer />
    </Container>
  )
}