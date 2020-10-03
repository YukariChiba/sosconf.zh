<template>
  <v-app>
    <NavDrawer />
    <!-- <v-parallax height="100%" :src="default_bg"> -->
    <NavBar />
    <v-main :style="{ 'background-image': 'url(' + bg + ')' }">
      <router-view />
      <BackTopFab />
    </v-main>
    <Footer />
    <!-- </v-parallax> -->
  </v-app>
</template>

<script>
import NavDrawer from "@/components/layout/Drawer.vue";
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
import BackTopFab from "@/components/layout/BackTopFab.vue";
import bg_list from "@/data/bg.json";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    NavDrawer,
    BackTopFab
  },
  computed: {
    bg: function() {
      switch (this.$route.name) {
        case "Register":
          return bg_list.circuit;
        case "Progress":
          return bg_list.paper;
        case "About":
          return bg_list.cogs;
        case "Cooperation":
          return bg_list.triangle;
        default:
          return bg_list.default;
      }
    }
  }
};
</script>

<style>
.v-main {
  background-repeat: initial;
  background-color: #ffffff;
}
</style>
