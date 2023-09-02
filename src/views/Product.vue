<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  console.log(route.params.productName);
});

watch(
  () => route.params,
  () => {
    console.log(route.params.productName);
  }
);
</script>

<template>
  <main>
    <ul class="list-unstyled d-flex justify-content-center bg-dark py-4 gap-md-6 gap-2">
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Diane' }"
          :to="`/product/Diane`"
        >
          Diane
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Felix' }"
          :to="`/product/Felix`"
        >
          Felix
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Karina' }"
          :to="`/product/Karina`"
        >
          Karina
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="btn btn-alphabox"
          :class="{ 'btn-alphabox-active': $route.params.productName === 'Vito' }"
          :to="`/product/Vito`"
        >
          Vito
        </RouterLink>
      </li>
    </ul>
    <h1>UserID: {{ $route.params.productName }}</h1>
  </main>
</template>
