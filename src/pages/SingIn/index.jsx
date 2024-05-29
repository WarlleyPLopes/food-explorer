import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
import { Container, Form, Logo } from "./styles"
import polygon from "../../assets/icons/polygon.svg"
import { Button } from "../../components/Button"


export function SingIn() {
  return (
    <Container>
      <Form>
        <Logo>
          <img src={polygon} alt="" />
          <h1>food explorer</h1>
        </Logo>

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

        <Button title="Entrar" />

      </Form>
        <Link to="/singup">Criar uma conta</Link>
    </Container>
  )
}