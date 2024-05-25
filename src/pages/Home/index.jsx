import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Container, Section } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      <Section>Refeição</Section>
      <Section>Bebidas</Section>
      <Section>Sobremesas</Section>

      <Footer />
    </Container>
  )
}