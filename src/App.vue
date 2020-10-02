<template>
  <v-app>
    <NavDrawer />
    <v-parallax height="100%" :src="default_bg">
      <NavBar />
      <v-main>
        <router-view />
        <BackTopFab />
      </v-main>
      <Footer />
    </v-parallax>
  </v-app>
</template>

<script>
import NavDrawer from "@/components/layout/Drawer.vue";
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BackTopFab from "@/components/layout/BackTopFab.vue";
import bg from "@/assets/img/bg.home.jpg";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    NavDrawer,
    BackTopFab
  },
  computed: {
    default_bg: function() {
      switch (this.$route.name) {
        case "Register":
          return require("@/assets/img/bg.reg.jpg");
        case "Progress":
          return require("@/assets/img/bg.progress.jpg");
        default:
          return bg;
      }
    }
  }
};
</script>

<style>
.v-parallax {
  /* position: inherit !important; */
  min-height: 100vh;
}
</style>
