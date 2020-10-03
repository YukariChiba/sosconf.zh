<template>
  <div class="home">
    <section class="d-flex align-center home-head">
      <PageHead />
    </section>
    <section class="mx-2 mx-md-6 mx-lg-12">
      <About />
    </section>
  </div>
</template>

<script>
import PageHead from "@/components/Home/PageHead.vue";
import About from "@/components/Home/About.vue";

export default {
  name: "Home",
  components: { PageHead, About }
};
</script>

<style scoped>
.home-head {
  height: 85vh;
}
</style>
