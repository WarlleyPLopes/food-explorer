import { Container, Header, Search } from "./styles"
import { Footer } from "../../components/Footer"
import close from "../../assets/icons/close.svg"
import search from "../../assets/icons/search.svg"

export function Menu() {
  return (
    <Container>
      <Header>
        <div>
          <button>
            <img src={close} alt="" />
          </button>
          <h2>Menu</h2>
        </div>
      </Header>

      <Search>
        <img src={search} />

        <input type="text" placeholder="Pesquisar pelo título" />
      </Search>

      <a href="#">Sair</a>
      <div className="line" />

      <Footer />
    </Container>
  )
}