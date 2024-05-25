import { Container } from "./styles";
import ImgHero from '../../assets/images/pngegg 2.png'

export function Hero() {
  return (
    <Container>
      <div className="rectangle">
        <img src={ImgHero} alt="" />
        <div className="text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  )
}