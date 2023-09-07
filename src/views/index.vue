<script setup>
// import Swiper core and required modules

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Navigation, Autoplay } from "swiper/modules";

// util
import { getAssetsFile } from "@/util/pub-use";
import { RouterLink } from "vue-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
      "讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！"}]


const modulesF = [Navigation, Autoplay];

const eventsLg = [
  {
    imageUrl: "swiper-slide.png",
    alt: "01"
  },
  {
    imageUrl: "swiper-slide.png",
    alt: "02"
  },
  {
    imageUrl: "swiper-slide.png",
    alt: "03"
  }
];
const eventsSm = [
  {
    imageUrl: "swiper-slide-sm.png",
    alt: "01"
  },
  {
    imageUrl: "swiper-slide-sm.png",
    alt: "02"
  },
  {
    imageUrl: "swiper-slide-sm.png",
    alt: "03"
  }
];
</script>

<template>
  <main>
    <!-- swiper 範例 -->

    <!-- section1 -->
    <div>
      <!-- 背景 1-->
      <!-- 小背景 1 -->
      <div
        class="d-md-none pos-absolute z-auto container-fluid h-474 px-0"
        style="background: linear-gradient(180deg, #7000ff 0%, #11002d 100%); height: 474.13333vw"
      ></div>
      <!-- 大背景 1 -->
      <div
        class="d-none d-md-block container-fluid px-0 pos-absolute z-auto h-md-78 h-lg-67 h-xl-61 h-xxl-56 h-xxxl-45"
      >
        <img
          class="img-fit"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/home_background.png?raw=true"
          alt="bg"
        />
      </div>
      <!-- 背景 2-->
      <!-- 小背景 2-->
      <div class="d-block d-md-none pos-absolute child-align-horizon-center z-auto h-210 h-smp-190 h-sm2p-126 h-sm3p-118 h-sm4p-110 top-sm-474 top-smp-465 top-sm2p-438 top-sm3p-435 top-sm4p-428">
        <img  class="img-fit"  src="https://i.imgur.com/fcze51K.png" alt="swiper-bg">
      </div>
      <!--  大背景 2-->
      <div
        class="d-none d-md-block pos-absolute child-align-horizon-center z-auto h-md-105 h-lg-87 h-xl-79 h-xxl-78 h-xxxl-65 h-4xl top-md-78 top-lg-69 top-xl-63 top-xxl-55 top-xxxl-55 top-4xl"
        style="background: radial-gradient(50% 50% at 50% 50%, #300871 0%, #000 100%)"
      ></div>
      <!-- z-100 swiper 背景-->
      <div
        class="d-none d-md-block pos-absolute top-md-89 top-lg-76 top-xl-66 top-xxl-53 top-xxxl-50 top-4xl-43 left-n160 right-0 z-100 container maw-1760px"
      >
        <div class="row">
          <img
            class="maw-md-948 px-0 mah-md-1089"
            src="https://i.imgur.com/fcze51K.png"
            alt="carousel-bg"
          />
        </div>
      </div>

      <!-- z-200 section 1 主要內容   -->
      <div
        class="pos-relative z-200 child-align-horizon-center container maw-1760px pt-7 pt-md-14 border-top-1"
      >
        <!-- 字與旋轉 -->
        <div class="row flex-column-reverse flex-md-row mb-8 mb-md-14">
          <div class="d-none d-md-flex col-md-3 ps-0 flex-column justify-content-end">
            <p class="mb-0 border-bottom-1 pb-2 text-white font-tw">
              最新消息！新版本 v15.4 釋出，搶先體驗！
            </p>
          </div>
          <div class="col-12 col-md-6 container text-center my-8 my-md-0">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true"
              alt="ALPHABOX+"
              class="alphabox-circle img-fluid mx-auto"
            />
          </div>
          <div class="col-12 col-md-3 pe-md-0 d-flex flex-column justify-content-between">
            <p class="border-top-1 pt-2 pt-md-1 text-white font-tw mt-1 mt-md-0 fw-bold">
              ALPHABOX+ STUDIO
            </p>
            <p class="d-none d-md-block mb-0 text-hidden-pruple font-tw">
              Copyright © 2023 Hexschool.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="d-md-none col-12">
            <p class="text-center text-white fs-16 letter-spacing-4d8 letter-spacing-sm-26 text-indent-6 mb-0">
              ALPHABOX+
            </p>
            <p class="text-center text-white font-tw fw-bold letter-spacing-4d8 mb-4">
              擁抱未來科技，專屬您的3D立體投影<br />陪伴機器人
            </p>
          </div>
        </div>
        <!-- 人像展示-->
        <div
          class="d-flex flex-column flex-md-row justify-content-md-between maw-1760px mx-md-n3 mb-8"
        >
          <!-- Diane-->
          <div class="pos-relative w-md-416 mt-4 mt-md-0">
            <a class="photo d-block" href="#"><img
              class="d-none d-md-block img-fit"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane.png?raw=true"
              alt="Diane"
            /></a>
            <img
              class="d-md-none img-fit"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/diane_square1.png?raw=true"
              alt="Diane"
            />
            <p class="pos-absolute top-16 left-0 right-0 text-center fs-13 text-white">Diane</p>
          </div>
          <!-- Felix and Karina-->
          <div class="d-flex flex-md-column w-md-864">
            <div class="d-flex flex-column">
              <p
                class="d-none d-md-block text-center text-white fs-16 fs-md-13 letter-spacing-22 letter-spacing-xxxl-80 text-indent-8 mb-0 font-style-normal"
              >
                ALPHABOX+
              </p>
              <p
                class="d-none d-md-block text-center text-white font-tw fw-bold letter-spacing-4d8 letter-spacing-md-16 text-indent-md-48 mb-6"
              >
                擁抱未來科技，專屬您的3D立體投影陪伴機器人
              </p>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-md-between mt-4 mt-md-0">
              <div class="pos-relative w-md-48">
                <a class="photo d-block" href="#"><img
                  class="d-none d-md-block img-fit"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix.png?raw=true"
                  alt="Felix"
                /></a>
                <img
                  class="d-md-none img-fit"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/felix_square1.png?raw=true"
                  alt="Felix"
                />
                <p class="pos-absolute top-16 left-0 right-0 text-center fs-13 text-white">Felix</p>
              </div>
              <div class="pos-relative mt-4 mt-md-0 w-md-48">
                <a class="photo d-block" href="#"><img
                  class="d-none d-md-block img-fit"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina.png?raw=true"
                  alt="Karina"
                /></a>
                <img
                  class="d-md-none img-fit"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/karina_square1.png?raw=true"
                  alt="Karina"
                />
                <p class="pos-absolute top-16 left-0 right-0 text-center fs-13 text-white">
                  Karina
                </p>
              </div>
            </div>
          </div>
          <!-- Vito      -->
          <div class="pos-relative w-md-416 mt-4 mt-md-0">
            <a class="photo d-block" href="#"><img
              class="d-none d-md-block img-fit"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito.png?raw=true"
              alt="Vito"
            /></a>
            <img
              class="d-md-none img-fit"
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/vito_square1.png?raw=true"
              alt="Vito"
            />
            <p class="pos-absolute top-16 left-0 right-0 text-center fs-13 text-white">Vito</p>
          </div>
        </div>
        <div class="row px-3 px-md-0">
          <div
            class="col-12"
            style="background: linear-gradient(90deg, #7000ff 0%, #11002d 100%); height: 40px"
          ></div>
        </div>
      </div>
      <div class="pos-relative z-200 child-align-horizon-center container maw-1760px px-md-0">
        <p
          class="text-white font-tw fs-15 fs-md-9 letter-spacing-24 letter-spacing-md-48 mt-2 mb-3"
        >
          什麼是
        </p>
        <p
          class="text-white font-tw fs-15 fs-md-9 letter-spacing-4d8 letter-spacing-sm-24 letter-spacing-md-48 mb-5 mb-md-4"
        >
          ALPHABOX+
        </p>
      </div>
      <!--   切開   -->
      <div class="pos-relative z-200 mb-4 mb-md-8" style="border-bottom: 1px solid white"></div>
      <!--   swiper 區塊 -->
      <!--   swiper-sm -->
      <div class="d-md-none container my-8 sample swiper-sm z-200 pos-relative">
        <Swiper
          :modules="modulesF"
          :slides-per-view="1"
          :space-between="50"
          :navigation="false"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true
          }"
        >
          <SwiperSlide v-for="event in eventsSm" :key="event.alt">
            <div class="card" style="border: 0">
              <img :src="getAssetsFile(event.imageUrl)" :alt="event.alt" />
              <div class="pos-absolute z-200 content-fit d-flex flex-column align-items-start justify-content-end">
                <h2 class="text-white fs-5 lh-1d5">01</h2>
                <p class="text-white fs-15 text-end letter-spacing-24 fw-bold">立體投影技術</p>
                <p class="text-white fw-bold">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!--   swiper-lg -->
      <div class="d-none d-md-block container my-8 z-200 pos-relative maw-1760 index-swiper-lg swiper-outter">
        <Swiper
          :modules="modulesF"
          :slides-per-view="1"
          :space-between="50"
          :navigation="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true
          }"
        >
          <SwiperSlide v-for="event in eventsLg" :key="event.alt">
            <div class="card swiper-lg-slide-padding pos-relative" style="background: transparent; border: 0">
              <img :src="getAssetsFile(event.imageUrl)" :alt="event.alt" />
              <div class="pos-absolute z-200 container content-fit d-flex flex-column align-items-end justify-content-center pe-10">
                <h2 class="text-white fs-96 lh-1d5">01</h2>
                <p class="text-white fs-13 text-end letter-spacing-32 me-n32 fw-bold">立體投影技術</p>
                <p class="text-white fw-bold">透過高科技立體投影技術，讓您感受真實的科技世界。</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div class="pos-relative z-200 child-align-horizon-center container maw-1760px mb-15 mb-md-13">
      <div class="row px-3 px-md-0">
        <div
          class="col-12"
          style="background: linear-gradient(270deg, #7000ff 0%, #11002d 100%); height: 40px"
        ></div>
      </div>
    </div>

    <!-- section2 -->

    <!-- section3 -->
    <section class="index-news pos-relative z-200">
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
    <div class="index-contact font-tw">
      <div class="container">
        <div class="row">

          <div class="text-white col-xl-5 col-md-6">
            <h3 class="fs-9 py-3 fw-bold mb-16">聯絡我們</h3>
            <div class="content fs-17 fw-bold text-white">
              <p class="mb-1">讓科技成為您的最佳夥伴</p>
              <p>立即體驗神奇功能並享限時優惠！</p>
            </div>
          </div>
          <div class="text-white col-xl-7 col-md-6">
            <div class="material-icons fs-1 mb-3">
              emergency
            </div>
            <form>
              <input id="myEmail" type="email" name="email" placeholder="EMAIL"
                class="w-100 mb-3 font-tw fw-bold py-1 px-3">
              <textarea id="myOpinion" type="text" placeholder="COMMENTS"
                class="w-100 mb-3 font-tw fw-bold py-1 px-3"></textarea>
              <div class="w-100">
                <bottom type="submit" class="btn btn-primary-100 rounded-1 w-50 d-block ms-auto"><span
                    class="icon material-symbols-outlined">point_scan</span>送出</bottom>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- section6 -->

    <div class="index-product row m-0">
      <div class="card border-end border-bottom bg-black text-white col-lg-3 col-6 rounded-0 p-0">
        <RouterLink to="/product/Diane" class="card-body px-md-10 py-md-14 py-6 text-decoration-none">
          <p class="card-title text-center font-number title-fs">1</p>
          <p class="card-title text-center fs-13 mb-lg-16 mb-5">Diane</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text mb-lg-4 mb-0"><span class="fw-bold">知識型</span><br>學術領導/知識分享/智能問答</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card border-end-lg border-bottom bg-black text-white col-lg-3 col-6 rounded-0 p-0">
        <RouterLink to="/product/Felix" class="card-body px-md-10 py-md-14 py-6 text-decoration-none">
          <p class="card-title text-center font-number title-fs">2</p>
          <p class="card-title text-center fs-13 mb-lg-16 mb-5">Felix</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text mb-lg-4 mb-0"><span class="fw-bold">娛樂型</span><br>音樂播放/語音互動/遊戲陪伴</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card border-end border-bottom bg-black text-white col-lg-3 col-6 rounded-0 p-0">
        <RouterLink to="/product/Karina" class="card-body px-md-10 py-md-14 py-6 text-decoration-none">
          <p class="card-title text-center font-number title-fs">3</p>
          <p class="card-title text-center fs-13 mb-lg-16 mb-5">Karina</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text mb-lg-4 mb-0"><span class="fw-bold">生活型</span><br>健康提醒/日程安排/智能家居</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card border-bottom bg-black text-white col-lg-3 col-6 rounded-0 p-0">
        <RouterLink to="/product/Vito" class="card-body px-md-10 py-md-14 py-6 text-decoration-none">
          <p class="card-title text-center font-number title-fs">4</p>
          <p class="card-title text-center fs-13 mb-lg-16 mb-5">Vito</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text mb-lg-4 mb-0"><span class="fw-bold">情感型</span><br>情感識別/心情分析/心靈支持</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
