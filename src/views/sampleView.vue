<script setup>
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

// util
import { getAssetsFile } from "@/util/pub-use"

const modules = [Navigation, Autoplay]
const events = [
  {
    imageUrl: "mobile/diane_choose.png",
    alt: "01",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "mobile/felix_choose.png",
    alt: "02",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  },
  {
    imageUrl: "mobile/karina_choose.png",
    alt: "03",
    date: "19 MAY 2023",
    title: "隔牆有耳-沒有草東的派對",
    content:
      "你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！<br /> 帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！"
  }
]
</script>

<template>
  <main>
    <!-- swiper 範例 -->
    <div class="container mt-8 sample">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="event in events" :key="event.alt">
          <div class="card">
            <img :src="getAssetsFile(event.imageUrl)" :alt="event.alt" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </main>
</template>
