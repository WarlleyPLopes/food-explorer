import { Container } from "./styles"

export function Input({ ...rest }) {
  return (
    <Container>
      <input type="hidden" {...rest} />
    </Container>
  )
}
