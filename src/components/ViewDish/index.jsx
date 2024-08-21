import { Container, Ingredients, Text } from "./styles"
import { AddQuantity } from "../AddQuantity"
import { Ingredient } from "../Ingredient"
import { PiReceipt } from "react-icons/pi"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function ViewDish({ data, img, ...rest }) {
  const { user } = useAuth()
  const admin = user.isAdmin
  const navigate = useNavigate()

  return (
    <Container {...rest}>
      <img src={img} />

      <Text>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.ingredients && (
          <Ingredients>
            {data.ingredients.map((ingredient) => (
              <Ingredient key={ingredient.id} title={ingredient.title} />
            ))}
          </Ingredients>
        )}

        {admin ? (
          <div className="wrapper">
            <button onClick={() => navigate(`/edit/${data.id}`)}>
              Editar prato
            </button>
          </div>
        ) : (
          <div className="wrapper">
            <AddQuantity />
            <button>
              <PiReceipt size={30} color="#fff" />
              pedir<span>R${data.price}</span>
            </button>
          </div>
        )}
      </Text>
    </Container>
  )
}