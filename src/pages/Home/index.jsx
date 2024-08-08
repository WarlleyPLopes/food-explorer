import { useEffect, useState } from "react"

import { api } from "../../services/api"

import { Container, Section } from "./styles"
import { SideMenu } from "../../components/SideMenu"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Hero } from "../../components/Hero"
import { Card } from "../../components/Card"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`)
      setDishes(response.data)
    }
    fetchDishes()
  }, [search])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header search={setSearch} onOpenMenu={() => setMenuIsOpen(true)} />

      <div className="margin">
        <Hero />

        <Section>
          <h1>Refeições</h1>
          {dishes.filter((dish) => dish.category === "meals").length > 0 && (
            <div className="dishes">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                loop={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.52": {
                    slidesPerView: 4,
                    spaceBetween: 100,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {dishes
                  .filter((dish) => dish.category === "meals")
                  .map((item, i) => (
                    <SwiperSlide key={String(i)} style={{ flexShrink: 1 }}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )}
        </Section>

        <Section>
          <h1>Sobremesas</h1>
          {dishes.filter((dish) => dish.category === "desserts").length > 0 && (
            <div className="dishes">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                loop={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.52": {
                    slidesPerView: 4,
                    spaceBetween: 100,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {dishes
                  .filter((dish) => dish.category === "desserts")
                  .map((item, i) => (
                    <SwiperSlide key={String(i)} style={{ flexShrink: 1 }}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )}
        </Section>

        <Section>
          <h1>Bebidas</h1>
          {dishes.filter((dish) => dish.category === "drinks").length > 0 && (
            <div className="dishes">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                loop={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.52": {
                    slidesPerView: 4,
                    spaceBetween: 100,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {dishes
                  .filter((dish) => dish.category === "drinks")
                  .map((item, i) => (
                    <SwiperSlide key={String(i)} style={{ flexShrink: 1 }}>
                      <Card data={item} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )}
        </Section>
      </div>
      <Footer />
    </Container>
  )
}