<template>
  <main>
    <!-- swiper 範例 -->

    <!-- section1 -->

    <!-- section2 -->

    <!-- section3 -->
    <section class="index-news">
      <div class="container pt-40 pb-10 text-white font-tw">
        <h2 class="fs-9 fw-bold letter-spacing-12 mb-10">最新消息</h2>
        <ul class="list-unstyled row mb-19">
          <li class="col-12">
            <div class="fw-bold border-top border-bottom border-white px-4 py-10">
              <time class="d-flex align-items-center mb-2">
                <span class="material-icons me-4">emergency</span>
                <span class="letter-spacing-4">2023.06.30</span>
              </time>
              <h3 class="fs-16 letter-spacing-5 mb-3">產品升級公告</h3>
              <div class="row">
                <p class="col-9">
                  榮幸地宣布，ALPHABOX+
                  已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
                </p>
                <div class="col-3 text-end">
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
          <li class="col-6 pe-0">
            <div class="fw-bold border-bottom border-end border-white px-4 py-10">
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
          <li class="col-6 ps-0">
            <div class="fw-bold border-bottom border-white px-4 py-10">
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
        <div class="mb-24">查看更多</div>
        <p class="text-end fw-bold">為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料</p>
      </div>
    </section>
    <!-- section4 -->
    <section class="index-share">
      <div class="container pt-40 pb-10 text-white font-tw">
        <div class="row">
          <div class="col-5">
            <h2 class="fs-9 fw-bold letter-spacing-12 mb-4">使用分享</h2>
            <div class="fw-bold d-flex align-items-center">
              <p class="me-1 mb-0">01</p>
              <span class="material-icons-outlined me-1">horizontal_rule</span>
              <p class="mb-0">04</p>
            </div>
          </div>

          <p class="col-7 fw-bold">展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。</p>
        </div>
      </div>
    </section>
    <!-- section5 -->

    <!-- section6 -->
    <RouterLink class="nav-link" aria-current="page" to="/product/Diane"> Diane </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Felix"> Felix </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Karina"> Karina </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Vito"> Vito </RouterLink>
  </main>
</template>
