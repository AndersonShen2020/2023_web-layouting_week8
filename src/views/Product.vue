<template>
  <main class="product">
    <!-- Navbar -->
    <ul class="list-unstyled d-flex justify-content-center bg-dark py-4 gap-md-6 gap-2 mb-0">
      <li>
        <RouterLink
          class="btn btn-alphabox fs-lg-15 fs-17"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Diane' }"
          :to="`/product/Diane`"
        >
          Diane
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox fs-lg-15 fs-17"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Felix' }"
          :to="`/product/Felix`"
        >
          Felix
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox fs-lg-15 fs-17"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Karina' }"
          :to="`/product/Karina`"
        >
          Karina
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox fs-lg-15 fs-17"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Vito' }"
          :to="`/product/Vito`"
        >
          Vito
        </RouterLink>
      </li>
    </ul>
    <RouterView />
  </main>
</template>
