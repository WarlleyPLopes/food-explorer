import { Container, Menu, Receipt, Input, Logo, ReceiptDesktop } from "./styles"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { PiReceiptBold } from "react-icons/pi"
import { IoMdMenu } from "react-icons/io"
import { FiSearch } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"
import polygon from "../../assets/icons/polygon.svg"

export function Header({ onOpenMenu }) {
  const { singOut } = useAuth()
  const navigate = useNavigate()

  function handleSingOut() {
    navigate("/")
    singOut()
  }

  return (
    <Container>
      <header>
        <Menu onClick={onOpenMenu}>
          <IoMdMenu size={35} color="#fff" />
        </Menu>

        <Logo>
          <img src={polygon} />
          <h1>food explorer</h1>
        </Logo>

        <Input>
          <FiSearch />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </Input>

        <Receipt>
          <span>0</span>
          <PiReceiptBold size={30} color="#fff" />
        </Receipt>

        <ReceiptDesktop>
          <PiReceiptBold size={30} color="#fff" />
          Pedido <span>(0)</span>
        </ReceiptDesktop>

        <button className="singout" onClick={handleSingOut}>
          <FiLogOut size={30} color="#fff" />
        </button>
      </header>
    </Container>
  )
}