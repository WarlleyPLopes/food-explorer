import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Logo, Form } from "./styles"
import polygon from "../../assets/icons/polygon.svg"
import { Link } from "react-router-dom"

export function SingUp() {
  return (
    <Container>
      <Form>
        <Logo>
          <img src={polygon} alt="" />
          <h1>food explorer</h1>
        </Logo>

        <label htmlFor="name">Name</label>
        <Input type="text" placeholder="Exemplo: Maria da Silva" name="name" />
        
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

        <Button title="Criar conta" />

      </Form>
        <Link to="/">Já tenho uma conta</Link>
    </Container>
  )
}
