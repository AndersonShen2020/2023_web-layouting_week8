<template>
  <div class="news">
    <div class="container pt-15 pb-20 py-lg-30 text-white font-tw">
      <h2 class="fs-sm-9 fs-lg-11 fw-black mb-10 mb-lg-15 text-lg-center">最新消息</h2>
      <ul class="list-unstyled">
        <li class="mb-6 mb-lg-15">
          <RouterLink class="news-link" aria-current="page" to="/news-detail">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="row align-items-center">
                  <p class="col-2 col-lg-4 font-number news-number mb-0">1</p>
                  <div
                    class="col-10 col-lg-8 news-imgContainer overflow-hidden d-flex align-items-center"
                  >
                    <img class="img-fluid" src="../assets/img/news/news.png" alt="產品升級公告" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  class="min-height-100 py-6 py-lg-10 px-4 border-top border-bottom border-white"
                >
                  <time class="d-flex align-items-center mb-2">
                    <span class="material-icons me-4">emergency</span>
                    <span class="letter-spacing-4 fw-medium">2023.06.30</span>
                  </time>
                  <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">產品升級公告</h3>
                  <p class="fw-light mb-0">
                    榮幸地宣布，ALPHABOX+
                    已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-1 d-flex align-items-end justify-content-end">
                <span class="fs-11 material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-6 mb-lg-15">
          <RouterLink class="news-link" aria-current="page" to="/news-detail">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="row align-items-center">
                  <p class="col-2 col-lg-4 font-number news-number mb-0">2</p>
                  <div
                    class="col-10 col-lg-8 news-imgContainer overflow-hidden d-flex align-items-center"
                  >
                    <img class="img-fluid" src="../assets/img/news/thanks.png" alt="限時優惠活動" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  class="min-height-100 py-6 py-lg-10 px-4 border-top border-bottom border-white"
                >
                  <time class="d-flex align-items-center mb-2">
                    <span class="material-icons me-4">emergency</span>
                    <span class="letter-spacing-4 fw-medium">2023.06.01</span>
                  </time>
                  <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">限時優惠活動</h3>
                  <p class="fw-light mb-0">
                    為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。購買 ALPHABOX+
                    的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！本月將舉辦一場限時優惠活動。購買
                    ALPHABOX+ 的顧客，皆可享受九折優惠。
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-1 d-flex align-items-end justify-content-end">
                <span class="fs-11 material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-6 mb-lg-15">
          <RouterLink class="news-link" aria-current="page" to="/news-detail">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="row align-items-center">
                  <p class="col-2 col-lg-4 font-number news-number mb-0">3</p>
                  <div
                    class="col-10 col-lg-8 news-imgContainer overflow-hidden d-flex align-items-center"
                  >
                    <img
                      class="img-fluid"
                      src="../assets/img/news/exhibition.png"
                      alt="參加科技展覽"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  class="min-height-100 py-6 py-lg-10 px-4 border-top border-bottom border-white"
                >
                  <time class="d-flex align-items-center mb-2">
                    <span class="material-icons me-4">emergency</span>
                    <span class="letter-spacing-4 fw-medium">2023.06.30</span>
                  </time>
                  <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">參加科技展覽</h3>
                  <p class="fw-light mb-0">
                    本公司將參與今年的台灣國際科技展覽，屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！屆時將展示最新款的3D立體陪伴機器人。誠摯邀請您親臨現場，親自體驗這款創新的產品！
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-1 d-flex align-items-end justify-content-end">
                <span class="fs-11 material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-6 mb-lg-15">
          <RouterLink class="news-link" aria-current="page" to="/news-detail">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="row align-items-center">
                  <p class="col-2 col-lg-4 font-number news-number mb-0">4</p>
                  <div
                    class="col-10 col-lg-8 news-imgContainer overflow-hidden d-flex align-items-center"
                  >
                    <img class="img-fluid" src="../assets/img/news/update.png" alt="新功能上線" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  class="min-height-100 py-6 py-lg-10 px-4 border-top border-bottom border-white"
                >
                  <time class="d-flex align-items-center mb-2">
                    <span class="material-icons me-4">emergency</span>
                    <span class="letter-spacing-4 fw-medium">2023.06.30</span>
                  </time>
                  <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">新功能上線</h3>
                  <p class="fw-light mb-0">
                    為使您的3D立體陪伴機器人更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。近期，我們新推出智慧家居控制功能。
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-1 d-flex align-items-end justify-content-end">
                <span class="fs-11 material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="news-link" aria-current="page" to="/news-detail">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="row align-items-center">
                  <p class="col-2 col-lg-4 font-number news-number mb-0">5</p>
                  <div
                    class="col-10 col-lg-8 news-imgContainer overflow-hidden d-flex align-items-center"
                  >
                    <img
                      class="img-fluid"
                      src="../assets/img/news/interview.png"
                      alt="用戶見面會"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div
                  class="min-height-100 py-6 py-lg-10 px-4 border-top border-bottom border-white"
                >
                  <time class="d-flex align-items-center mb-2">
                    <span class="material-icons me-4">emergency</span>
                    <span class="letter-spacing-4 fw-medium">2023.06.30</span>
                  </time>
                  <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">用戶見面會</h3>
                  <p class="fw-light mb-0">
                    為進一步滿足客戶需求，並優化產品性能，我們將舉行用戶見面會。屆時，我們將向您展示我們的研發成果，同時聆聽您的意見和建議，讓我們共同打造更完美的產品！同時聆聽您的意見和建議！
                  </p>
                </div>
              </div>
              <div class="col-12 col-lg-1 d-flex align-items-end justify-content-end">
                <span class="fs-11 material-icons-outlined">arrow_forward</span>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
