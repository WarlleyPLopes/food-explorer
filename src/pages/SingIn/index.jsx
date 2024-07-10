import { Container, Form, Logo, Wrapper } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import polygon from "../../assets/icons/polygon.svg"

export function SingIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { singIn } = useAuth()

  function handleSingIn() {
    singIn({ email, password })
  }
  return (
    <Container>
      <div className="container">

        <div>
        <Logo>
          <img src={polygon} />
          <h1>food explorer</h1>
        </Logo>
        </div>

        <div className="form">
        <Form>
          <h1>Faça login</h1>
          <Wrapper>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Wrapper>

          <Button title="Entrar" onClick={handleSingIn} />
          <Link to="/singup">Criar uma conta</Link>
        </Form>
        </div>
      </div>
    </Container>
  )
}