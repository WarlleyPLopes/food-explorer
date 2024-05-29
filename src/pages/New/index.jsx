import { IngredientItem } from "../../components/IngredientItem"
import { ButtonText } from "../../components/ButtonText"
import { RiArrowLeftSLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiUpload } from "react-icons/fi"
import {
  ButtonUpload,
  Container,
  Form,
  Section,
  Select,
  TextArea,
  Wrapper,
} from "./styles"
import { Link } from "react-router-dom"
import { SideMenu } from "../../components/SideMenu"
import { useState } from "react"

export function New() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)}/>

      <Form>
        <Link to="/">
          <RiArrowLeftSLine />
          Voltar
        </Link>

        <h1>Novo Prato</h1>

        <Wrapper>
          <label htmlFor="image">Imagem do prato</label>
          <ButtonUpload className="buttonUpload" type="file" name="image">
            <FiUpload />
            Selecione imagem
          </ButtonUpload>
        </Wrapper>

        <Wrapper>
          <label htmlFor="name">Nome</label>
          <Input type="text" placeholder="Ex.: Salada Ceasar" name="name" />
        </Wrapper>

        <Wrapper>
          <label htmlFor="category">Categoria</label>
          <Select>
            <option value="1">Refeições</option>
            <option value="2">Sobremesas</option>
            <option value="3">Bebidas</option>
          </Select>
        </Wrapper>

        <Wrapper>
          <label>Ingredients</label>
          <Section>
            <IngredientItem value={"Ingredient 1"} />
            <IngredientItem isNew placeholder="Adicionar" />
          </Section>
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Preço</label>
          <Input type="number" placeholder="R$ 00,00" />
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Descriçãos</label>
          <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        </Wrapper>

        <Button title="Salvar" />
      </Form>
      <Footer />
    </Container>
  )
}
