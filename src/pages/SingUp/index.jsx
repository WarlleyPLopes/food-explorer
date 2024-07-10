import { api } from "../../services/api"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import polygon from "../../assets/icons/polygon.svg"
import { Button } from "../../components/Button"
import { Container, Logo, Form, Wrapper } from "./styles"
import { Input } from "../../components/Input"

export function SingUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User created with success")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Not possible to create user, try again later")
        }
      })
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
            <h1>Crie sua conta</h1>

            <Wrapper>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                placeholder="Exemplo: Maria da Silva"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </Wrapper>

            <Wrapper>
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Wrapper>

            <Wrapper>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Wrapper>

            <Button title="Criar conta" onClick={handleSingUp} />
            <Link to="/">Já tenho uma conta</Link>
          </Form>
        </div>
      </div>
    </Container>
  )
}
