import { Container } from "./styles";
import hero from '../../assets/images/hero.png'

export function Hero() {
  return (
    <Container>
      <div className="background">
        <img src={hero} className="hero" />
        <div className="text">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  )
}