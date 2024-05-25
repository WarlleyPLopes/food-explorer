import { Container } from "./styles"

import { Ingredient } from "../../components/Ingredient"

import { GoPlus } from "react-icons/go";
import { PiReceipt } from "react-icons/pi";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import dish from "../../assets/images/Mask group.png"

export function ViewDish() {
  return (
    <Container>
      <img src={dish} alt="" />

      <h1>Salada Ravanello</h1>

      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

      <div className="ingredients">
        <Ingredient title={"alface"} />
        <Ingredient title={"cebola"} />
        <Ingredient title={"pão naan"} />

        <Ingredient title={"pepino"} />
        <Ingredient title={"rabanete"} />
        <Ingredient title={"tomate"} />
      </div>

      <div className="wrapper">
        <div className="addDish">
          <button>
            <HiOutlineMinusSmall size={30}/>
          </button>
          <span>01</span>
          <button>
            <GoPlus  size={30}/>
          </button>
        </div>
        <button>
          <PiReceipt size={30} color="#fff"/>
          pedir<span>R$25,00</span>
        </button>
      </div>
    </Container>
  )
}