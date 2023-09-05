<template>
  <main>
    <!-- swiper 範例 -->

    <!-- section1 -->

    <!-- section2 -->

    <!-- section3 -->

    <!-- section4 -->

    <!-- section5 -->
    <div class="section5 font-tw">
      <div class="container py-16">
        <div class="row">

          <div class="text-white col-md-5 ">
            <p class="fs-12 py-3 fw-bold mb-16 letter-spacing-5 title">聯絡我們</p>
          <div class="fs-17 pt-3 text-white">
            <p>讓科技成為您的最佳夥伴</p>
            <p>立即體驗神奇功能並享限時優惠！</p>
          </div>
        </div>
        <div class="col-md-7 text-white ">
          <div class="navbar-nav material-icons fs-1 mb-3">
      emergency
      </div>
          <form>
            <input id="myEmail" type="email" name="email" placeholder="EMAIL" class="w-100 mb-3 font-tw fw-bold py-1 px-3">
            <textarea id="myOpinion" type="text" placeholder="COMMENTS"
              class="w-100 mb-3 font-tw fw-bold py-1 px-3 h-100"></textarea>
              <div class="w-100">
            <bottom type="submit" class="btn btn-primary rounded-1 w-50 d-block ms-auto"><span class="icon material-symbols-outlined">point_scan</span>送出</bottom>



          </div>
          </form>


        </div>




        </div>
      </div>
    </div>
    <!-- section6 -->

    <div class="section6 row m-0">
      <div class="card border-end bg-black text-white col-lg-3 col-6 rounded-0">
        <RouterLink to="/product/Diane" class="card-body px-8 py-12 text-decoration-none">
          <p class="card-title text-center font-number title-fs">1</p>
          <p class="card-title text-center fs-13 mb-13">Diane</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text">知識型<br>學術領導/知識分享/智能問答</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card border-end bg-black text-white col-lg-3 col-6 rounded-0">
        <RouterLink to="/product/Felix" class="card-body px-8 py-12 text-decoration-none">
          <p class="card-title text-center font-number title-fs">2</p>
          <p class="card-title text-center fs-13 mb-13">Felix</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text">娛樂型<br>音樂播放/語音互動/遊戲陪伴</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card border-end bg-black text-white col-lg-3 col-6 rounded-0">
        <RouterLink to="/product/Karina" class="card-body px-8 py-12 text-decoration-none">
          <p class="card-title text-center font-number title-fs">3</p>
          <p class="card-title text-center fs-13 mb-13">Karina</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text">生活型<br>健康提醒/日程安排/智能家居</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

      <div class="card bg-black text-white col-lg-3 col-6 rounded-0">
        <RouterLink to="/product/Vito" class="card-body px-8 py-12 text-decoration-none">
          <p class="card-title text-center font-number title-fs">4</p>
          <p class="card-title text-center fs-13 mb-13">Vito</p>
          <div class="d-flex flex-wrap justify-content-between">
            <p class="card-text">情感型<br>情感識別/心情分析/心靈支持</p>
            <img src="../assets/img/line_end_arrow_notch.svg" alt="arrow" class="">
          </div>
        </RouterLink>
      </div>

    </div>


    <!-- <RouterLink class="nav-link" aria-current="page" to="/product/Diane"> Diane </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Felix"> Felix </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Karina"> Karina </RouterLink>
    <RouterLink class="nav-link" aria-current="page" to="/product/Vito"> Vito </RouterLink> -->

  </main>
</template>
