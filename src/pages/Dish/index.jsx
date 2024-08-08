import { useNavigate, useParams } from "react-router-dom"
import { RiArrowLeftSLine } from "react-icons/ri"
import { useEffect, useState } from "react"

import { api } from "../../services/api"

import { Container, Content } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { SideMenu } from "../../components/SideMenu"
import { ViewDish } from "../../components/ViewDish"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function Dish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState(null)

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }
    fetchDish()
  }, [])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <ButtonText
          title={"Voltar"}
          icon={RiArrowLeftSLine}
          onClick={handleBack}
        />

        {data && <ViewDish data={data} img={imageURL} />}
      </Content>
      <Footer />
    </Container>
  )
}