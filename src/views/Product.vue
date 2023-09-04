<script setup>
import { ref } from "vue";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// util
import { getAssetsFile } from "@/util/pub-use";

const modules = [Navigation];

const productInfo = {
  Diane: {
    type: "知識型",
    do: "學術領導/知識分享/智能問答",
    photo1: "diane_square1.png",
    photo2: "diane_square2.png"
  },
  Felix: {
    type: "娛樂型",
    do: "音樂播放/語音互動/遊戲陪伴",
    photo1: "felix_square1.png",
    photo2: "felix_square2.png"
  },
  Karina: {
    type: "生活型",
    do: "健康提醒/日程安排/智能家居",
    photo1: "karina_square1.png",
    photo2: "karina_square2.png"
  },
  Vito: {
    type: "情感型",
    do: "情感識別/心情分析/心靈支持",
    photo1: "vito_square1.png",
    photo2: "vito_square2.png"
  }
};

const swiperDom = ref(null);
function setSlideToFirst() {
  // 當變更產品時，Swiper 會跳回到第一張圖片
  swiperDom.value.$el.swiper.slideTo(0, 0);
}
</script>

<template>
  <main>
    <ul class="list-unstyled d-flex justify-content-center bg-dark py-4 gap-md-6 gap-2 mb-0">
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Diane' }"
          :to="`/product/Diane`"
          @click="setSlideToFirst"
        >
          Diane
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Felix' }"
          :to="`/product/Felix`"
          @click="setSlideToFirst"
        >
          Felix
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Karina' }"
          :to="`/product/Karina`"
          @click="setSlideToFirst"
        >
          Karina
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Vito' }"
          :to="`/product/Vito`"
          @click="setSlideToFirst"
        >
          Vito
        </RouterLink>
      </li>
    </ul>
    <div class="d-flex flex-column flex-lg-row bg-dark text-white">
      <div class="product-swiper-side">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :navigation="true"
          ref="swiperDom"
        >
          <SwiperSlide>
            <img
              class="object-fit-cover"
              :src="getAssetsFile(productInfo[$route.params.productName].photo1)"
              :alt="`${$route.params.productName}-1`"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              class="object-fit-cover"
              :src="getAssetsFile(productInfo[$route.params.productName].photo2)"
              :alt="`${$route.params.productName}-2`"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="product-info-side d-flex flex-column justify-content-center position-relative">
        <h2>{{ $route.params.productName }}</h2>
        <p>{{ productInfo[$route.params.productName].type }}</p>
        <p>{{ productInfo[$route.params.productName].do }}</p>
        <div class="arrow-right mt-lg-4 mt-2 ms-lg-1"></div>
        <img
          class="align-self-center align-self-lg-start mt-4 mt-lg-0"
          src="../assets/img/circle2.svg"
          alt="alphabox-circle"
        />
      </div>
    </div>
  </main>
</template>
