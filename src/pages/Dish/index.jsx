import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { SideMenu } from "../../components/SideMenu"
import { Container, Content } from "./styles"
import { ViewDish } from "../../components/ViewDish"
import { RiArrowLeftSLine } from "react-icons/ri"
import { useState } from "react"
import image from '../../assets/images/Mask group-10.png'

export function Dish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      <Content>
      <ButtonText title={"Voltar"} icon={RiArrowLeftSLine} />
      <ViewDish data={{
        id: '1',
        image: `${image}`,
        title: 'Salada Ravanello',
        description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
        ingredients: [
          {id: '1', title: 'alface'},
          {id: '2',title : 'cebola'},
          {id: '3',title : 'tomate'},
          {id: '4',title : 'azeitona'},
          {id: '5',title : 'cenoura'},
        ]
      }}/>
      </Content>
      <Footer />
    </Container>
  )
}