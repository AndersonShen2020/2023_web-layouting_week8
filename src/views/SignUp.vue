<template>
  <div
    class="container-fluid"
    style="background: radial-gradient(50% 50% at 50% 50%, #28085c 0%, #000 100%)"
  >
    <div class="sign-up container maw-1296 pt-md-15">
      <div class="row">
        <div class="d-none d-lg-block col-lg-4 pt-10 ">
          <h2 class="pt-15 fs-5 fw-black letter-spacing-md-64 text-white">註冊</h2>
        </div>
        <div class="col-lg-4">
          <h2 class="d-block d-lg-none mt-15 mb-0 fs-11 fw-bold letter-spacing-40 text-white">註冊</h2>
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
                type="text"
                class="form-control font-tw border-radius-none px-4 pt-4 pb-2"
                id="floatingInput"
                placeholder="王大明"
                style="height: 46px; min-height: 46px"
              />
              <label class="font-tw fs-16 fw-bold py-2 px-4" for="floatingInput fs-13 fw-bold"
                >姓名</label
              >
            </div>
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
            <div class="form-floating mb-2">
              <input
                type="tel"
                class="form-control font-tw border-radius-none px-4 pt-4 pb-2"
                id="floatingPwd"
                placeholder="Password"
                style="height: 46px; min-height: 46px"
              />
              <label class="font-tw fs-16 fw-bold py-2 px-4" for="floatingPwd">密碼</label>
            </div>
            <div class="mb-2">
              <input type="checkbox" name="check" id="check">
              <label class="align-midele text-white" for="check">我已仔細閱讀<a class="text-white text-decoration-underline" data-bs-toggle="modal" data-bs-target="#termsModal">相關條例</a></label>
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
                    >建立帳號</span
                  >
                </a>
              </button>
            </div>
            <div class="text-end mb-20 mb-md-40">
              <span class="text-white">已有帳號嗎？</span><span class="text-white">前往<RouterLink class="text-white text-decoration-underline" aria-current="page" to="/SignIn" href="#">登入</RouterLink></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade sign-up-modal" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content rounded-0" style="max-width:636px; height:600px;">
      <!-- <div class="modal-header">
      </div> -->
      <button type="button" class="btn-close rounded-5 bg-white close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-body">
        <p>ALPHABOX+ 註冊條例</p>
        <p>感謝您選擇使用ALPHABOX+品牌的Felix 3D立體投影機器人！為了確保您在使用我們的產品和服務時能夠享受到愉快的體驗，請在註冊帳號前，仔細閱讀以下註冊帳號使用規範條例。</p>
        <p>第1條：帳號註冊</p>
        <ol>
          <li>註冊帳號時，請確保提供真實、準確、完整的個人資料，如發現虛假資料，我們有權隨時終止您的帳號。</li>
          <li>用戶需設定一組安全的帳號密碼，並妥善保管。如因用戶原因導致帳號密碼遭盜用，我們將不承擔任何責任。</li>
          <li>每位用戶僅限註冊一個帳號，禁止註冊多個帳號。如經查證有用戶註冊多個帳號的行為，我們有權對其帳號進行封禁處理。</li>
        </ol>
        <p>第2條：帳號使用</p>
        <ol>
          <li>用戶不得在帳號中發布任何違法、侵權、色情、暴力、恐怖或種族歧視等違反社會公序良俗的內容。如有違反，我們有權對相關帳號進行封禁處理。</li>
          <li>用戶不得利用帳號進行任何形式的商業活動、廣告宣傳，或未經授權的盈利行為。如有違反，我們有權對相關帳號進行封禁處理。</li>
          <li>用戶應尊重他人的知識產權，不得在帳號中發布他人的著作權、專利權、商標權等知識產權受保護的內容。如有侵權行為，我們有權對相關帳號進行封禁處理。</li>
        </ol>
        <p>第3條：帳號安全</p>
        <ol>
          <li>用戶應妥善保管自己的帳號密碼，不得將帳號密碼告知他人。如因用戶原因導致帳號密碼遭他人盜用，我們將不承擔任何責任。</li>
          <li>如用戶發現自己的帳號遭他人盜用或存在安全隱患，應立即通知我們，以便我們採取相應措施保護您的帳號安全。</li>
        </ol>
        <p>第4條：帳號終止與刪除</p>
        <ol>
          <li>如用戶自願終止帳號，可在帳號設置中申請注銷。帳號注銷後，用戶將無法再登錄該帳號，並且帳號內所有資料將被永久刪除。</li>
          <li>如用戶違反本使用規範條例，我們有權對其帳號進行暫時或永久封禁處理。封禁期間，用戶將無法登錄帳號，並可能導致部分或全部資料丟失。</li>
          <li>如用戶在一定期限內未登錄帳號，我們將保留刪除該帳號的權利，以確保資源的合理分配。</li>
        </ol>
        <p>第5條：個人資料保護</p>
        <ol>
          <li>我們將尊重並保護用戶的隱私，並依法保護用戶的個人資料。未經用戶同意，我們不會向任何第三方提供、公開或共享用戶的個人資料，除非適用法律規定或政府要求。</li>
          <li>我們將采取合理的技術和組織措施保護用戶的個人資料安全，防止未經授權的訪問、揭露、使用或修改。</li>
        </ol>
        <p>第6條：修改與更新</p>
        <ol>
          <li>我們保留隨時修改本使用規範條例的權利。如有修改，我們將在相應平台上公告修改後的條例，並自公告之日起生效。</li>
          <li>如用戶不同意修改後的條例，應立即停止使用帳號。繼續使用帳號將被視為接受修改後的條例。</li>
        </ol>
        <p>第7條：免責聲明</p>
        <ol>
          <li>用戶應自行承擔使用帳號的風險。我們不保證服務不受干擾，也不保證服務的及時性、安全性或準確性。因網絡環境、設備故障或其他不可抗力因素而導致的服務中斷、數據丟失等問題，我們將不承擔任何責任。</li>
          <li>我們對於用戶因使用帳號而遭受的任何間接、意外、特殊或衍生的損害（包括但不限於利潤損失、數據損失、業務中斷或其他財產損失），均不承擔賠償責任。</li>
        </ol>
        <p>第8條：爭議處置</p>
        <ol>
          <li>本使用規範條例的訂立、執行、解釋及爭議解決均適用中華民國法律。</li>
          <li>如用戶與我們因本使用規範條例而發生爭議，應先嘗試友好協商解決。協商不成的，用戶同意將爭議提交中華民國有管轄權的法院審理。</li>
        </ol>
        <p class="mb-0">再次感謝您選擇使用ALPHABOX+品牌的Felix 3D立體投影機器人，並遵守以上註冊帳號使用規範條例。我們期待為您提供優質的產品和服務，祝您使用愉快！</p>
      </div>
      <!-- <div class="modal-footer">
      </div> -->
    </div>
  </div>
</div>
</template>
