import { Ingredient } from "../Ingredient"
import { PiReceipt } from "react-icons/pi"
import { AddQuantity } from "../AddQuantity"
import { Container, Ingredients, Text } from "./styles"

export function ViewDish({ data, ...rest }) {
  return (
    <Container {...rest}>
      <img src={data.image} />

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

        <div className="wrapper">
          <AddQuantity />
          <button>
            <PiReceipt size={30} color="#fff" />
            pedir<span>R$25,00</span>
          </button>
        </div>
      </Text>
    </Container>
  )
}