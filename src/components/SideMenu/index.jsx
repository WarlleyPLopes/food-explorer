import { Container, Header, Search } from "./styles"
import { Footer } from "../Footer"
import { IoCloseOutline } from "react-icons/io5"
import search from "../../assets/icons/search.svg"
import { ButtonText } from "../ButtonText"
import { Link } from "react-router-dom"

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonText title={"Menu"} icon={IoCloseOutline}  onClick={onCloseMenu}/>
      </Header>

      <Search>
        <img src={search} />

        <input type="text" placeholder="Pesquisar pelo título" />
      </Search>

  

      <Link to="/new">Novo prato</Link>
      <div className="line" />

      <Link to="#">Sair</Link>
      <div className="line" />

      <Footer />
    </Container>
  )
}
