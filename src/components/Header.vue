<template>
  <header class="navbar navbar-expand-xl bg-primary border-bottom border-white font-tw">
    <div class="container">
      <RouterLink to=".." class="navbar-brand text-white fs-13 p-0 font-en">ALPHABOX+</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon material-symbols-outlined"></span>
      </button>
      <div class="collapse navbar-collapse gradient-y" id="navbarNav">
        <ul class="navbar-nav gap-10 align-items-center mx-lg-auto">
          <li class="nav-item ">
            <RouterLink to="../product/Diane" class="nav-link active text-white">產品</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../About" class="nav-link active text-white">關於我們</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../news" class="nav-link active text-white">最新消息</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../Faq" class="nav-link active text-white">FAQ</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../ContactUs" class="nav-link active text-white">聯絡我們</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav gap-6 align-items-center">
          <li class="nav-item ">
            <RouterLink to="../SignUp" class="nav-link active text-white ">註冊</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../SignIn" class="nav-link active text-white ">登入</RouterLink>
          </li>
          <li class="nav-item ">
            <RouterLink to="../SignIn" class="nav-link active btn btn-white rounded-1 text-center px-4"><span
                class="icon material-symbols-outlined">point_scan</span>訂閱</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
