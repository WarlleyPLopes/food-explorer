import { api } from "../../services/api"
import { SideMenu } from "../../components/SideMenu"
import { useAuth } from "../../hooks/auth"

import { FiUpload } from "react-icons/fi"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { IngredientItem } from "../../components/IngredientItem"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
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

export function EditDish() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(null)
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [image, setImage] = useState("")
  const [imageFile, setImageFile] = useState(null)

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      )
    } else {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient("")
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleUpdateDish() {
    if (!image) {
      return alert("Faça upload da foto do prato")
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

    try {
      await api.put(`/dishes/${id}`, {
        title,
        description,
        category,
        price,
        ingredients,
      })

      if (imageFile) {
        const fileUploadForm = new FormData()

        fileUploadForm.append("image", imageFile)

        await api.patch(`/dishes/image/${id}`, fileUploadForm)
      }
      alert("Prato atualizado com sucesso!")
    } catch (err) {
      if (err.response) {
        alert(err.response.message.data.message)
      } else {
        alert("Não foi possível atualizar o prato.")
      }
    } finally {
      navigate("/")
    }
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente exluir o prato?")

    if (confirm) {
      await api.delete(`/dishes/${id}`).then(() => {
        alert("Item removido com sucesso!")
      })
      navigate("/")
    } else {
      return
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)
      const { title, description, category, price, ingredients, image } =
        response.data

      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map((ingredient) => ingredient.title))
      setImage(image)
    }
    fetchDish()
  }, [id])

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

        <h1>Editar Prato</h1>

        <Form>
          <Wrapper className="img">
            <label htmlFor="image">Imagem do prato</label>
            <ImageFile>
              <FiUpload />
              <label htmlFor="image">
                {imageFile ? imageFile.name : image}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImageFile(e.target.files[0])}
                required
              />
            </ImageFile>
          </Wrapper>

          <Wrapper className="name">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              placeholder="Ex.: Salada Caesar"
              id="text"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Wrapper>

          <Wrapper className="category">
            <label htmlFor="category">Categoria</label>
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="default">Selecione uma categoria</option>
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
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </Section>
          </Wrapper>

          <Wrapper className="price">
            <label htmlFor="price">Preço</label>
            <Input
              placeholder="R$ 00,00"
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Wrapper>

          <Wrapper className="description">
            <label htmlFor="description">Descriçãos</label>
            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Wrapper>
        </Form>

        <div className="buttons">
          <button onClick={handleRemove}>Excluir</button>
          <button onClick={handleUpdateDish}>Salvar alterações</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}