import { Container } from "./styles"

export function Input({icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={30} />}
      <input type="hidden" {...rest} />
    </Container>
  )
}
