import { Input } from "../../components/Input"
import { Container } from "./styles"

export function SingIn() {
  return (
    <Container>
      <form action="">
      
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          name="password"
        />
      </form>
    </Container>
  )
}