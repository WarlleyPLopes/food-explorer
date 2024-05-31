import { AddQuantity } from "../AddQuantity"
import Torradas from "../../assets/images/Mask group-1.png"
import Heart from "../../assets/icons/heart.svg"
import { Button } from "../Button"
import { Container } from "./styles"

export function Card() {
  return (
    <Container>
      <img src={Heart} className="icon" />
      <div className="image">
        <img src={Torradas} />
      </div>

      <div className="text">
        <h2>Torradas de Parma</h2>
        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        <span>R$ 25,97</span>
      </div>

      <div className="buttons">
        <AddQuantity />
        <Button title={"incluir"} />
      </div>
    </Container>
  )
}