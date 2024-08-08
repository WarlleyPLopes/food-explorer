import { AddQuantity } from "../AddQuantity"
import Heart from "../../assets/icons/heart.svg"
import Pen from "../../assets/icons/pencil.svg"
import { Button } from "../Button"
import { ButtonWrapper, Container, Favorite, ImgDish, Text } from "./styles"
import { api } from "../../services/api"
import { Link, useNavigate } from "react-router-dom"

import imagePlaceholder from "../../assets/images/image-not-found-icon.svg"
import { useAuth } from "../../hooks/auth"

export function Card({ data, ...rest }) {
  const { user } = useAuth()
  const admin = user.isAdmin
  const navigate = useNavigate()

  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder

  return (
    <Container {...rest}>
      {admin ? (
        <div className="content">
          <Favorite onClick={() => navigate(`/edit/${data.id}`)}>
            <img src={Pen} />
          </Favorite>
          <ImgDish>
            <img src={imageURL} alt="Imagem do prato" />
          </ImgDish>
          <Text>
            <Link to={`/dishes/${data.id}`}>
              <h2>{data.title} &#62;</h2>
            </Link>
            <p>{data.description}</p>
            <span>R$ {data.price}</span>
          </Text>

          
        </div>
      ) : (
        <div className="content">
          <Favorite onClick={() => alert("Adicionar prato aos favoritos e mudar background ao alternar")}>
            <img src={Heart} />
          </Favorite>
          <ImgDish>
            <img src={imageURL} alt="Imagem do prato" />
          </ImgDish>
          <Text>
            <Link to={`/dishes/${data.id}`}>
              <h2>{data.title} &#62;</h2>
            </Link>
            <p>{data.description}</p>
            <span>R$ {data.price}</span>
          </Text>

          <ButtonWrapper>
            <AddQuantity />
            <Button title={"incluir"} onClick={()=> alert("Adicionar prato a sacola")}/>
          </ButtonWrapper>
        </div>
      )}
    </Container>
  )
}