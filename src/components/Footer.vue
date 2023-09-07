<template>
  <footer class="navbar navbar-expand-md font-tw py-md-13 py-10 px-md-0 px-7">
    <div class="container">
      <div class="navbar-brand col-md-5 col-12 py-0 me-0">
        <RouterLink to=".." class="navbar-brand font-en fs-13 mb-md-0 mb-2">ALPHABOX+</RouterLink>
        <p class="copyright-star fs-17 fw-bold mb-0">Copyright © 2023 Hexschool.</p>
      </div>
      <div class="navbar-nav col-md-2 col-12 mb-md-0 mb-2">
        <div class="material-icons fs-1 mx-md-auto">emergency</div>
      </div>
      <ul class="navbar-nav fw-bold col-md-5 col-12 justify-content-end gap-md-2 gap-0 mb-md-0 mb-2">
        <li class="nav-item ">
          <RouterLink to="../About" class="nav-link active">關於我們</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink to="../product/Diane" class="nav-link active">產品資訊</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink to="../Faq" class="nav-link active">常見問題</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink to="#" class="nav-link active">隱私政策</RouterLink>
        </li>
      </ul>
      <div class="copyright-end navbar-nav col-md-5 col-12 py-0 me-0">
        <p class="fs-17 fw-bold mb-0">Copyright © 2023 Hexschool.</p>
      </div>
    </div>
  </footer>
</template>
