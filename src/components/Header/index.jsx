import { Container, Logo, Menu, Receipt } from "./styles"
import { PiReceiptBold } from "react-icons/pi"
import { IoMdMenu } from "react-icons/io"
import polygon from "../../assets/icons/polygon.svg"

export function Header() {
  return (
    <Container>
      <header>
        <Menu>
          <IoMdMenu size={35} color="#fff" />
        </Menu>

        <Logo>
          <img src={polygon} alt="" />
          <h1>food explorer</h1>
        </Logo>

        <Receipt>
          <div>0</div>
          <PiReceiptBold size={30} color="#fff" />
        </Receipt>
      </header>
    </Container>
  )
}