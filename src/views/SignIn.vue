<template>
  <div
    class="container-fluid"
    style="background: radial-gradient(50% 50% at 50% 50%, #28085c 0%, #000 100%)"
  >
    <div class="sign-in container maw-1296 pt-md-15">
      <div class="row">
        <div class="d-none d-lg-block col-md-4 pt-10 ">
          <h2 class="pt-15 fs-5 fw-black letter-spacing-md-64 text-white">登入</h2>
        </div>
        <div class="col-lg-4">
          <h2 class="d-block d-lg-none mt-15 mb-0 fs-11 fw-bold letter-spacing-40 text-white">登入</h2>
          <div class="text-center">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-ai/circle.png?raw=true"
              alt="ALPHABOX+"
              class="alphabox-circle img-fluid mx-auto"
            />
          </div>
          <p class="my-6 fs-13 text-center text-white">ALPHABOX+</p>
          <div class="d-grid gap-2 my-2">
            <button type="button" class="btn btn-outline-light rounded-5 py-2 fs-16 font-tw text-white">
              <img class="mb-1 me-10px" src="../assets/img/apple_icon.png" alt="google-icon" style="width: 20px; height: 20px;">
              <span>Continue with Apple</span>
            </button>
            <button type="button" class="btn btn-outline-light rounded-5 py-2 fs-16 font-tw text-white">
              <img class="mb-1 me-10px" src="../assets/img/google_icon.png" alt="google-icon" style="width: 20px; height: 20px;">
              <span>Continue with Google</span>
            </button>
          </div>
          <div class="d-flex m-4 mb-6">
            <div class="d-inline-block" style="border-bottom: 1px solid #828282; width:100%; height:16px;"></div>
            <p class="d-inline-block align-middle px-1 mb-0 font-tw text-white">or</p>
            <div class="d-inline-block" style="border-bottom: 1px solid #828282; width:100%; height:16px;"></div>
          </div>
          <form>
            <div class="form-floating mb-2 mb-md-4">
              <input
                type="email"
                class="form-control font-tw border-radius-none px-4 pt-4 pb-2"
                id="floatingEmail"
                placeholder="name@example.com"
                style="height: 46px; min-height: 46px"
              />
              <label class="font-tw fs-16 fw-bold py-2 px-4" for="floatingEmail">Email</label>
            </div>
            <div class="form-floating mb-2 mb-md-6">
              <input
                type="tel"
                class="form-control font-tw border-radius-none px-4 pt-4 pb-2"
                id="floatingPwd"
                placeholder="Password"
                style="height: 46px; min-height: 46px"
              />
              <label class="font-tw fs-16 fw-bold py-2 px-4" for="floatingPwd">密碼</label>
            </div>
            <div class="d-grid gap-2 mb-2">
              <button class="btn btn-primary border-radius-1" type="submit">
                <a class="d-block" href="#">
                  <span
                    class="d-inline-block material-symbols-outlined align-middle text-white pe-1"
                  >
                    point_scan
                  </span>
                  <span class="d-inline-block align-middle text-decoration-none text-white pt-1"
                    >立即登入</span
                  >
                </a>
              </button>
            </div>
            <div class="text-end mb-20 mb-md-93">
              <span class="text-white"><a class="text-white text-decoration-underline" href="#">忘記密碼</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
