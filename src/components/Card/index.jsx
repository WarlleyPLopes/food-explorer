import { AddQuantity } from "../AddQuantity"
import Torradas from "../../assets/images/Mask group-1.png"
import Heart from "../../assets/icons/heart.svg"
import { Button } from "../Button"
import { ButtonWrapper, Container, Favorite, ImgDish, Text } from "./styles"

export function Card() {
  return (
    <Container>
      <Favorite>
        <img src={Heart} />
      </Favorite>
      <ImgDish>
        <img src={Torradas} />
      </ImgDish>

      <Text>
        <h2>Torradas de Parma &#62;</h2>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <span>R$ 25,97</span>
      </Text>

      <ButtonWrapper>
        <AddQuantity />
        <Button title={"incluir"} />
      </ButtonWrapper>
    </Container>
  )
}
