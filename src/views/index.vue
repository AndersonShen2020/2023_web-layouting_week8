<script setup>
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const modules = [Scrollbar];

const shares = [
  {
    alt: "01",
    name: "Zona",
    area: "Taipei",
    alphbox: "Dianne",
    colorTheme: "dark",
    content:
      "ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。"
  },
  {
    alt: "02",
    name: "Lin",
    area: "Chiayi",
    alphbox: "Felix",
    colorTheme: "light",
    content:
      "非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。"
  },
  {
    alt: "03",
    name: "云",
    area: "Taipei",
    alphbox: "Dianne",
    colorTheme: "dark",
    content:
      "我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見 ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！"
  },
  {
    alt: "04",
    name: "Zichi",
    area: "Kaohsiung",
    alphbox: "Vito",
    colorTheme: "light",
    content:
      "讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！"
  }
];
</script>

<template>
  <main>
    <!-- swiper 範例 -->

    <!-- section1 -->

    <!-- section2 -->

    <!-- section3 -->
    <section class="index-news">
      <div class="container pt-15 pt-md-24 pt-lg-40 pb-20 pb-md-10 text-white font-tw">
        <div class="overflow-hidden">
          <h2 class="fs-11 fs-md-9 text-center text-md-start fw-bold mb-10">最新消息</h2>
        </div>
        <ul class="list-unstyled row mb-19">
          <li class="col-12">
            <div class="fw-bold border-top border-bottom border-white px-4 py-8 py-md-10">
              <time class="d-flex align-items-center mb-2">
                <span class="material-icons me-4">emergency</span>
                <span class="letter-spacing-4">2023.06.30</span>
              </time>
              <h3 class="fs-16 letter-spacing-5 mb-3">產品升級公告</h3>
              <div class="row flex-column flex-md-row">
                <p class="col-12 col-md-9">
                  榮幸地宣布，ALPHABOX+
                  已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
                </p>
                <div class="col-12 col-md-3 text-md-end">
                  <RouterLink class="nav-link" aria-current="page" to="/news-detail">
                    <img
                      src="../assets/img/line_end_arrow_notch.svg"
                      alt="前往「產品升級公告」消息"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li class="col-12 col-md-6 pe-md-0">
            <div class="fw-bold border-bottom border-md-end border-white px-4 py-8 py-md-10">
              <time class="d-flex align-items-center mb-2">
                <span class="material-icons me-4">emergency</span>
                <span class="letter-spacing-4">2023.06.30</span>
              </time>
              <h3 class="fs-16 letter-spacing-5 mb-3">限時優惠活動</h3>
              <div class="row">
                <p class="col-12">
                  為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+
                  的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
                </p>
                <div class="col-12">
                  <RouterLink class="nav-link" aria-current="page" to="/news-detail">
                    <img
                      src="../assets/img/line_end_arrow_notch.svg"
                      alt="前往「限時優惠活動」消息"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li class="col-12 col-md-6 ps-md-0">
            <div class="fw-bold border-bottom border-white px-4 py-8 py-md-10">
              <time class="d-flex align-items-center mb-2">
                <span class="material-icons me-4">emergency</span>
                <span class="letter-spacing-4">2023.06.30</span>
              </time>
              <h3 class="fs-16 letter-spacing-5 mb-3">新功能上線</h3>
              <div class="row">
                <p class="col-12">
                  為使您的 ALPHABOX+
                  更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
                </p>
                <div class="col-12">
                  <RouterLink class="nav-link" aria-current="page" to="/news-detail">
                    <img
                      src="../assets/img/line_end_arrow_notch.svg"
                      alt="前往「新功能上線」消息"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <RouterLink class="nav-link" aria-current="page" to="/news">
          <div class="mx-auto mb-0 mb-md-24 position-relative" style="width: 132px; height: 132px">
            <svg class="overflow-visible self-rotate" viewBox="0 0 132 132">
              <path d="M 0,66 a 66,66 0 1,1 0,1 z" id="circle" fill="none" />
              <text class="letter-spacing-4" fill="white">
                <textPath xlink:href="#circle">ALPHABOX+ALPHABOX+</textPath>
              </text>
            </svg>
            <span class="fw-medium position-absolute top-50 start-50 translate-middle text-nowrap"
              >查看更多</span
            >
          </div>
        </RouterLink>
        <p class="d-none d-md-block text-end fw-bold mb-0">
          為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料
        </p>
      </div>
    </section>
    <!-- section4 -->
    <section class="index-share position-relative overflow-hidden">
      <div class="container pt-15 pt-md-24 pt-lg-40 pb-20 pb-md-10 text-white font-tw">
        <div class="row mb-6 mb-lg-10">
          <div class="col-12 col-lg-5 mb-6 mb-lg-0">
            <h2 class="fs-11 fs-md-9 fw-bold mb-4">使用分享</h2>
            <div class="fw-bold d-flex align-items-center">
              <p class="me-1 mb-0">01</p>
              <span class="material-icons-outlined me-1">horizontal_rule</span>
              <p class="mb-0">04</p>
            </div>
          </div>
          <p class="col-12 col-lg-7 fw-bold mb-0">
            展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。
          </p>
        </div>
        <div class="mb-6">
          <span class="material-icons fs-1">emergency</span>
        </div>
        <div class="overflow-hidden mb-md-15 mb-lg-31">
          <div class="container d-none d-lg-block">
            <Swiper
              :modules="modules"
              :slides-per-view="3"
              :space-between="24"
              :mousewheel="true"
              :scrollbar="{
                el: '.swiper-scrollbar',
                draggable: true
              }"
            >
              <SwiperSlide v-for="share in shares" :key="share.alt">
                <div
                  class="index-share-card fw-bold p-10 d-flex flex-column justify-content-between"
                  :class="{
                    'bg-primary-200 text-white': share.colorTheme === 'dark',
                    'bg-white text-black': share.colorTheme === 'light'
                  }"
                >
                  <div>
                    <p class="mb-8 d-flex align-items-center">
                      <span>{{ share.name }}</span>
                      <span
                        class="circle-sm mx-2"
                        :class="{ 'bg-black': share.colorTheme === 'light' }"
                      ></span>
                      <span>{{ share.area }}</span>
                    </p>
                    <p>{{ share.content }}</p>
                  </div>
                  <p class="d-flex align-items-center">
                    <span
                      class="circle-lg me-4"
                      :class="{ 'bg-black': share.colorTheme === 'light' }"
                    ></span>
                    <span
                      class="circle-lg me-4"
                      :class="{ 'bg-black': share.colorTheme === 'light' }"
                    ></span>
                    <span>ALPHABOX+</span>
                    <span>{{ share.alphbox }}</span>
                  </p>
                </div>
              </SwiperSlide>

              <!-- Scrollbar -->
              <div class="row align-items-center mt-12">
                <div class="col-10 col-lg-8">
                  <div class="swiper-scrollbar position-static"></div>
                </div>
                <div class="col-2">
                  <p class="mb-0 fw-medium">SCROLL</p>
                </div>
              </div>
            </Swiper>
          </div>
          <div class="d-flex d-lg-none row flex-column flex-md-row">
            <div class="col-12 col-md-6" v-for="(share, i) in shares" :key="share.alt">
              <div
                class="index-share-card fw-bold p-6 d-flex flex-column justify-content-between"
                :class="{
                  'bg-primary-200 text-white': share.colorTheme === 'dark',
                  'bg-white text-black': share.colorTheme === 'light',
                  'mb-6': i !== shares.length - 1
                }"
              >
                <div>
                  <p class="mb-8 d-flex align-items-center">
                    <span>{{ share.name }}</span>
                    <span
                      class="circle-sm mx-2"
                      :class="{ 'bg-black': share.colorTheme === 'light' }"
                    ></span>
                    <span>{{ share.area }}</span>
                  </p>
                  <p>{{ share.content }}</p>
                </div>
                <p class="d-flex align-items-center">
                  <span
                    class="circle-lg me-4"
                    :class="{ 'bg-black': share.colorTheme === 'light' }"
                  ></span>
                  <span
                    class="circle-lg me-4"
                    :class="{ 'bg-black': share.colorTheme === 'light' }"
                  ></span>
                  <span>ALPHABOX+</span>
                  <span>{{ share.alphbox }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="fw-medium mb-0 d-none d-md-block">
          若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。
        </p>
      </div>
      <p class="index-share-bgText position-absolute">ALPHABOX+</p>
    </section>
    <!-- section5 -->

    <!-- section6 -->
    <RouterLink class="nav-link" aria-current="page" to="/product/Diane"> Diane </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Felix"> Felix </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Karina"> Karina </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Vito"> Vito </RouterLink>
  </main>
</template>
