import { createRouter, createWebHistory } from "vue-router";
import index from "@/views/index.vue";
import product from "@/views/Product.vue";
import productItem from "@/views/productItem.vue";
import about from "@/views/AboutUs.vue";
import news from "@/views/News.vue";
import newsDetail from "@/views/NewsDetail.vue";
import Faq from "@/views/Faq.vue";
import ContactUs from "@/views/ContactUs.vue";
import SignUp from "@/views/SignUp.vue";
import SignIn from "@/views/SignIn.vue";
import Sample from "@/views/sampleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/product",
      name: "product",
      component: product,
      children: [
        {
          path: ":productName",
          name: "productItem",
          component: productItem
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/news",
      name: "news",
      component: news,
      children: []
    },
    {
      path: "/news-detail",
      name: "newsDetail",
      component: newsDetail
    },
    {
      path: "/Faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/ContactUs",
      name: "ContactUs",
      component: ContactUs
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/SignIn",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/Sample",
      name: "Sample",
      component: Sample
    }
  ]
});

export default router;
