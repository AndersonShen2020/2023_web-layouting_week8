<template>
  <div class="newsDetail pt-15 pb-20 py-lg-30 text-white">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 ms-auto">
          <h2 class="fs-sm-9 fs-lg-11 font-tw fw-black mb-10">最新消息</h2>
        </div>
      </div>
      <div class="row flex-column flex-md-row">
        <div class="col-12 col-md-4 mb-10 mb-md-0">
          <RouterLink
            class="nav-link d-flex align-items-center mb-2"
            aria-current="page"
            to="/news"
          >
            <span class="material-icons-outlined fs-4 fs-md-11 scaleX">arrow_outward</span>
            <span class="fw-medium pt-1">返回</span>
          </RouterLink>
          <div class="overflow-hidden">
            <img class="img-fluid" src="../assets/img/news/news_in.png" alt="產品升級公告" />
          </div>
        </div>
        <div class="col-12 col-md-8 font-tw">
          <div class="px-4 py-6 py-md-10 mb-6 border-top border-bottom border-white">
            <time class="fw-medium letter-spacing-4 mb-2 d-flex align-items-center">
              <span class="material-icons me-4">emergency</span>
              2023.06.30
            </time>
            <h3 class="fs-16 fw-medium letter-spacing-5 mb-3">產品升級公告</h3>
            <div class="fw-light">
              <p class="mb-3">親愛的客戶們：</p>
              <p class="mb-3">
                我們榮幸地向您宣布，經過不懈的努力與研發，ALPHABOX+
                已成功完成最新一代的升級！這次的升級將為您帶來更高的投影解析度、更精準的語音辨識技術，以及更豐富的情感識別功能。我們致力於為您打造最佳的陪伴機器人，讓科技更貼近您的生活。
              </p>
              <p class="mb-3">
                在這次升級中，我們提升了投影解析度，讓影像更加清晰細緻，呈現出更真實的視覺效果。您將能夠更加享受在家中觀看高清影片或欣賞美景的樂趣。同時，我們優化了語音辨識技術，使機器人能更迅速且準確地識別您的聲音指令，提高互動體驗。
              </p>
              <p class="mb-3">
                此外，我們增加了情感識別功能，使得機器人能更好地理解您的情緒，並根據您的需求提供適當的陪伴與支持。無論您需要傾聽、建議還是安慰，ALPHABOX+
                都將成為您身邊的貼心夥伴。
              </p>
              <p class="mb-3">
                為感謝您一直以來對我們的支持，我們將在本月舉辦限時優惠活動，凡購買升級版3D立體投影陪伴機器人的客戶，均可享有九折優惠。機會難得，千萬不要錯過喔！
              </p>
              <p class="mb-3">
                在未來的日子裡，我們將繼續投入研發，並積極採納用戶意見，以不斷完善產品功能並提高使用體驗。同時，我們承諾會為您提供優質的售後服務，確保您在購買與使用過程中得到全面支持。
              </p>
              <p class="mb-3">
                再次感謝您對我們的信任與支持，讓我們攜手共創更美好的未來！若您對升級版3D立體投影陪伴機器人有任何疑問或建議，請隨時與我們的客服團隊聯繫，我們將竭誠為您解答。
              </p>
              <p class="mb-3">敬祝 興旺發達！</p>
              <p class="mb-0">ALPHABOX+ 團隊敬上</p>
            </div>
          </div>
          <ul class="list-unstyled mb-0 d-flex justify-content-between">
            <li>
              <a class="link-white text-decoration-none fs-18 fw-medium" href="#">
                <img src="../assets/img/line_start_arrow_notch.svg" alt="上一則消息" />
                <p class="d-none d-md-block mb-0 newsDetail-linkText">限時優惠活動</p>
                <p class="d-block d-md-none mb-0">上一則</p>
              </a>
            </li>
            <li>
              <a class="opacity-50" href="#">
                <img src="../assets/img/line_end_arrow_notch.svg" alt="下一則消息" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
