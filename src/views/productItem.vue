<script setup>
import { ref, onBeforeUpdate } from "vue";

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

onBeforeUpdate(() => {
  swiperDom.value.$el.swiper.slideTo(0, 0);
});
</script>

<template>
  <!-- Swiper -->
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
  <!-- 學術領導/知識分享/智能問答 -->
  <div class="container font-tw mt-lg-20 mt-15 mb-lg-30 mb-8">
    <div class="row">
      <div class="col-12 d-flex justify-content-between align-items-center fw-medium lh-base">
        <h2 class="d-flex align-items-center fs-16 mb-0">
          <span class="material-symbols-outlined fs-11 me-3"> emergency </span
          >學術領導/知識分享/智能問答
        </h2>
        <p class="mb-0 d-none d-lg-block">ALPHABOX+</p>
      </div>
    </div>
    <div class="row mt-lg-8 mt-6">
      <div class="col-lg-4 col-12">
        <p class="fw-medium mb-0">
          歡迎來到ALPHABOX+的全新世界！在這裡，我們很榮幸地向您介紹我們的最新力作 - 3D立體投影機器人
          {{ $route.params.productName }}！
        </p>
      </div>
    </div>
  </div>
  <div class="container overflow-hidden font-tw mt-lg-30 mt-8 mb-lg-30 mb-20">
    <ul class="row gy-lg-26 gy-6 list-unstyled">
      <li class="col-lg-4 col-12">
        <h3 class="fs-17 fw-bold lh-base mb-0 border-lg-0 border-bottom border-2 border-black">
          先進的3D投影技術
        </h3>
        <p class="mt-lg-6 mt-4 mb-0">
          {{ $route.params.productName }} 搭載了最新的 3D
          投影技術，能夠將虛擬影像清晰地呈現在您的現實空間中，讓您感受身臨其境的體驗！
        </p>
      </li>
      <li class="col-lg-4 col-12">
        <h3 class="fs-17 fw-bold lh-base mb-0 border-lg-0 border-bottom border-2 border-black">
          人性化的互動設計
        </h3>
        <p class="mt-lg-6 mt-4 mb-0">
          {{ $route.params.productName }}
          具有高度智能的語音辨識和回應功能，您可以像跟朋友聊天一樣，與
          {{ $route.params.productName }}
          進行自然、流暢的對話。
        </p>
      </li>
      <li class="col-lg-4 col-12">
        <h3 class="fs-17 fw-bold lh-base mb-0 border-lg-0 border-bottom border-2 border-black">
          豐富的應用場景
        </h3>
        <p class="mt-lg-6 mt-4 mb-0">
          無論是家庭娛樂、教育培訓還是商業展示，{{ $route.params.productName }}
          都能夠輕鬆滿足您的需求，為您提供更多元的互動體驗。
        </p>
      </li>
      <li class="col-lg-4 col-12">
        <h3 class="fs-17 fw-bold lh-base mb-0 border-lg-0 border-bottom border-2 border-black">
          高度自主性
        </h3>
        <p class="mt-lg-6 mt-4 mb-0">
          {{ $route.params.productName }}
          具有強大的自主學習能力，能夠不斷地學習並優化自己，為您創造更加便捷、貼心的生活方式。
        </p>
      </li>
      <li class="col-lg-4 col-12">
        <h3 class="fs-17 fw-bold lh-base mb-0 border-lg-0 border-bottom border-2 border-black">
          簡單易用的操作界面
        </h3>
        <p class="mt-lg-6 mt-4 mb-0">
          {{ $route.params.productName }}
          擁有直觀的操作界面，讓您可以輕鬆地掌握並運用它的各種功能。
        </p>
      </li>
    </ul>
  </div>
  <!-- 使用分享 -->
  <div class="wrapper">
    <div class="container overflow-hidden font-tw text-white">
      <h2 class="fs-lg-9 fs-11 lh-base letter-spacing-lg-12 letter-spacing-10 mb-0">使用分享</h2>
      <div class="row mt-lg-3 mt-4">
        <div class="col-12 col-lg-4">
          <p class="mb-0">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
        </div>
      </div>
      <div class="row gy-lg-0 gy-6 mt-lg-20 mt-0 fw-bold">
        <div class="col-lg-4 col-12">
          <div
            class="d-flex flex-column justify-content-between bg-primary-200 share-box p-lg-10 p-6"
          >
            <div class="share-info">
              <h3 class="fs-17 mb-0">Zichi <span class="ellipse-1 mx-2"></span> Kaohsiung</h3>
              <p class="mt-8 mb-0">
                自從家裡有了{{
                  $route.params.productName
                }}，孩子們的學習興趣提高了不少，他們都喜歡透過{{
                  $route.params.productName
                }}的3D立體投影來探索新知識，家庭氛圍變得更加和樂融融！
              </p>
            </div>
            <p class="mb-0">
              <span class="ellipse-2"></span>
              <span class="ellipse-2 mx-4"></span>
              ALPHABOX+ Felix
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div
            class="d-flex flex-column justify-content-between bg-white text-black share-box p-lg-10 p-6"
          >
            <div class="share-info">
              <h3 class="fs-17 mb-0">Lee <span class="ellipse-3 mx-2"></span> Chiayi</h3>
              <p class="mt-8 mb-0">
                自從公司引入 {{ $route.params.productName }}，員工的工作效率提升了很多。{{
                  $route.params.productName
                }}
                不僅能快速回應我們的需求，還可以協助我們做各種商業展示，真的是企業的好幫手！
              </p>
            </div>
            <p class="mb-0">
              <span class="ellipse-4"></span>
              <span class="ellipse-4 mx-4"></span>
              ALPHABOX+ Felix
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div
            class="d-flex flex-column justify-content-between bg-primary-200 share-box p-lg-10 p-6"
          >
            <div class="share-info">
              <h3 class="fs-17 mb-0">瑞 <span class="ellipse-1 mx-2"></span> Taipei</h3>
              <p class="mt-8 mb-0">
                {{ $route.params.productName }}
                讓教學變得更生動有趣，學生們在課堂上的參與度和學習效果都有顯著提升。我非常推薦{{
                  $route.params.productName
                }}給所有的教育工作者！
              </p>
            </div>
            <p class="mb-0">
              <span class="ellipse-2"></span>
              <span class="ellipse-2 mx-4"></span>
              ALPHABOX+ Felix
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
