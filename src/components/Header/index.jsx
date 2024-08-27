import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Container, Logo, Bag, Hamburger, InputDesktop } from "./styles"
import { Input } from "../Input"
import { PiReceiptBold } from "react-icons/pi"
import { FiMenu, FiX } from "react-icons/fi"
import { FiLogOut } from "react-icons/fi"

import polygon from "../../assets/icons/polygon.svg"
import { GoSearch } from "react-icons/go"
import { useState } from "react"

export function Header({ search }) {
  const { singOut, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
  const admin = user.isAdmin

  function handleModal() {
    document.getElementById("nav-mobile").classList.toggle("active")
    handleToggleMenu()
  }

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle("no-scroll", !isMenuOpen)
  }

  function handleSignOut() {
    navigate("/")
    singOut()
  }

  return (
    <Container>
      <div className="content">
        <div id="nav-mobile">
          <header>
            <FiX
              size={26}
              onClick={() => {
                handleModal()
              }}
            />
            Menu
          </header>

          <nav>
            <Input
              icon={GoSearch}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => {
                search(e.target.value)
              }}
            />

            {admin ? (
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/new">Novo Prato</Link>
                </li>
                <li>
                  <Link to="/order-history">Pedidos</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleSignOut}>
                    Sair
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Meu perfil</Link>
                </li>
                <li>
                  <Link to="/favorites">Meus favoritos</Link>
                </li>
                <li>
                  <Link to="/order-history">Historico de Pedidos</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleSignOut}>
                    Sair
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>

        <Hamburger
          id="hamburguer"
          onClick={() => {
            handleModal()
          }}
        >
          <FiMenu size={26} />
        </Hamburger>

        {admin ? (
          <Logo to="/">
            <img src={polygon} />
            <div className="textAdmin">
              <h1>food explorer</h1>
              <span>admin</span>
            </div>
          </Logo>
        ) : (
          <Logo to="/">
            <img src={polygon} />
            <h1>food explorer</h1>
          </Logo>
        )}

        <InputDesktop className="inputDesktop">
          <GoSearch size={30} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => {
              search(e.target.value)
            }}
          />
        </InputDesktop>

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

        <button className="singOut" onClick={handleSignOut}>
          <FiLogOut size={30} color="#fff" />
        </button>
      </div>
    </Container>
  )
}
