import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Container, Menu, Input, Logo, Bag } from "./styles"

import { PiReceiptBold } from "react-icons/pi"
import { IoMdMenu } from "react-icons/io"
import { FiSearch } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"

import polygon from "../../assets/icons/polygon.svg"

export function Header({ onOpenMenu, search}) {
  const { singOut, user } = useAuth()

  const navigate = useNavigate()
  const admin = user.isAdmin

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

        {admin ? (
          <Logo>
            <img src={polygon} />
            <div className="textAdmin">
              <h1>food explorer</h1>
              <span>admin</span>
            </div>
          </Logo>
        ) : (
          <Logo>
            <img src={polygon} />
            <h1>food explorer</h1>
          </Logo>
        )}

        <Input>
          <FiSearch />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => {search(e.target.value)}}
          />
        </Input>

        {admin ? (
          <Bag>
            <button className="bagDesktop" onClick={() => navigate("/new")}>
              <span style={{ width: "max-content" }}>Novo prato</span>
            </button>
          </Bag>
        ) : (
          <Bag>
            <button className="bag">
              <span>0</span>
              <PiReceiptBold size={30} color="#fff" />
            </button>

            <button
              className="bagDesktop"
              onClick={() => alert("direcionar para pagina de pedidos")}
            >
              <PiReceiptBold size={30} color="#fff" />
              Pedido <span>(0)</span>
            </button>
          </Bag>
        )}

        <button className="singout" onClick={handleSingOut}>
          <FiLogOut size={30} color="#fff" />
        </button>
      </header>
    </Container>
  )
}