import { IngredientItem } from "../../components/IngredientItem"
import { RiArrowLeftSLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FiUpload } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
  Container,
  Form,
  ImageFile,
  Section,
  Select,
  TextArea,
  Wrapper,
} from "./styles"

import { api } from "../../services/api"
import { SideMenu } from "../../components/SideMenu"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleNewDish() {
    if (!title || !description || !category || !price || !imageFile) {
      return alert("Preencha todos os campos")
    }

    if (newIngredient) {
      return alert("Você não adicionou o ingrediente")
    }

    await api.post("/dishes", {
      title,
      description,
      price,
      ingredients,
      category,
      image: imageFile,
    })
    alert("Prato cadastrado com sucesso!")
  }

  function handleChangeImage() {
    const file = event.target.files[0]
    setImageFile(file)
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Form>
        <Link to="/">
          <RiArrowLeftSLine />
          Voltar
        </Link>

        <h1>Novo Prato</h1>

        <Wrapper>
          <label htmlFor="image">Imagem do prato</label>
          <ImageFile>
            <FiUpload />
            <label htmlFor="image">Selecione uma imagem</label>
            <input
              placeholder="Selecione uma imagem"
              type="file"
              id="image"
              onChange={handleChangeImage}
            />
          </ImageFile>
        </Wrapper>

        <Wrapper>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            placeholder="Ex.: Salada Ceasar"
            id="name"
            name="name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Wrapper>

        <Wrapper>
          <label htmlFor="category">Categoria</label>
          <Select id="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="1">Refeições</option>
            <option value="2">Sobremesas</option>
            <option value="3">Bebidas</option>
          </Select>
        </Wrapper>

        <Wrapper>
          <label>Ingredients</label>
          <Section>
            {ingredients.map((ingredient, index) => (
              <IngredientItem
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))}
            <IngredientItem
              isNew
              placeholder="Adicionar"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
            />
          </Section>
        </Wrapper>

        <Wrapper>
          <label htmlFor="price">Preço</label>
          <Input
            id="price"
            type="number"
            placeholder="R$ 00,00"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Wrapper>

        <Wrapper>
          <label htmlFor="description">Descriçãos</label>
          <TextArea
            id="description"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Wrapper>

        <Button title="Salvar" onClick={handleNewDish} />
      </Form>
      <Footer />
    </Container>
  )
}