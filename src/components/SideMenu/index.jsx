import { Container, Header, Nav, Search } from "./styles"
import { Footer } from "../Footer"
import { IoCloseOutline } from "react-icons/io5"
import search from "../../assets/icons/search.svg"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const { singOut, user } = useAuth()

  const navigate = useNavigate()
  const admin = user.isAdmin

  function handleSingOut() {
    navigate("/")
    singOut()
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <div className="wrapper">
          <button onClick={onCloseMenu}>
            <IoCloseOutline />
          </button>

          <h1>Menu</h1>
        </div>
      </Header>

      <Search>
        <img src={search} />

        <input type="text" placeholder="Pesquisar pelo título" />
      </Search>

      {admin ? (
        <Nav>
          <Link to="/new">Novo prato</Link>
          <div className="line" />

          <button onClick={handleSingOut}>Sair</button>
          <div className="line" />
        </Nav>
      ) : (
        <Nav>
          <Link to="/favorites">Meus Favoritos</Link>
          <div className="line" />

          <button onClick={handleSingOut}>Sair</button>
          <div className="line" />
        </Nav>
      )}

      <Footer />
    </Container>
  )
}