import { Container, Logo, Menu, Receipt } from "./styles"
import menu from "../../assets/icons/menu.svg"
import polygon from "../../assets/icons/polygon.svg"
import receipt from "../../assets/icons/receipt.svg"

export function Header() {
  return (
    <Container>
      <header>
        <Menu>
          <img src={menu} alt="" />
        </Menu>
        
        <Logo>
          <img src={polygon} alt="" />
          <h1>food explorer</h1>
        </Logo>

        <Receipt>
          <div>0</div>
          <img src={receipt} alt="" />
        </Receipt>
      </header>
    </Container>
  )
}