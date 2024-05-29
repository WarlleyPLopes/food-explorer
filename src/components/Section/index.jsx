import { Card } from "../Card"
import { Container } from "./styles"

export function Section({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="dishes">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </Container>
  )
}
