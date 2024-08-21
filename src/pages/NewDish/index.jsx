import { FiUpload } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { IngredientItem } from "../../components/IngredientItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { RiArrowLeftSLine } from "react-icons/ri"

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

export function NewDish() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Erro: Você não inseriu uma imagem para o prato!")
    }
    if (!title) {
      return alert("Erro: Você não informou o nome do prato!")
    }
    if (ingredients.length < 1) {
      return alert("Erro: Adicione pelo menos um ingrediente!")
    }
    if (newIngredient) {
      return alert(
        "Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      )
    }
    if (!category) {
      return alert("Erro: Você não selecionou a categoria do prato!")
    }
    if (!price) {
      return alert("Erro: Você não informou o preço do prato!")
    }
    if (!description) {
      return alert("Erro: Você não informou uma descrição para o prato!")
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("ingredients", ingredients)

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Erro ao criar o prato!")
        }
      })
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <div className="content">
        <Link to="/">
          <RiArrowLeftSLine />
          Voltar
        </Link>

        <h1>Adicionar Prato</h1>
        <Form>
          <Wrapper className="img">
            <label htmlFor="image">Imagem do prato</label>
            <ImageFile>
              <FiUpload />
              <label htmlFor="image">
                {image ? image.name : "Selecione uma imagem"}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </ImageFile>
          </Wrapper>

          <Wrapper className="name">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              placeholder="Ex.: Salada Ceasar"
              id="name"
              name="name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Wrapper>

          <Wrapper className="category">
            <label htmlFor="category">Categoria</label>
            <Select id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="meals">Refeições</option>
              <option value="desserts">Sobremesas</option>
              <option value="drinks">Bebidas</option>
            </Select>
          </Wrapper>

          <Wrapper className="ingredient">
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

          <Wrapper className="price">
            <label htmlFor="price">Preço</label>
            <Input
              id="price"
              type="number"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Wrapper>

          <Wrapper className="description">
            <label htmlFor="description">Descriçãos</label>
            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Wrapper>

          <Button title="Salvar" onClick={handleNewDish} />
        </Form>
      </div>
      <Footer />
    </Container>
  )
}