import polygon from "../../assets/icons/polygonf.svg"
import { Container, Logo } from "./styles"

export function Footer() {
  return (
    <Container>
      <div className="margin">
        <Logo>
          <img src={polygon} />
          <span>food explorer</span>
        </Logo>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}