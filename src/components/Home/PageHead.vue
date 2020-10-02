<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-responsive class="overflow-visible">
          <div class="text-h4 text-md-h3 font-weight-light mb-4 ">
            SOSCONF.ZH 2020
            <br />
            中文学生开源年会
          </div>
          <p class="font-weight-light text-h5 ">2020年10月18日，成都</p>

          <div
            class="d-flex flex-wrap justify-left justify-md-start align-center mx-n2"
          >
            <v-btn
              dark
              rounded
              class="ma-2"
              color="info"
              elevation="6"
              x-large
              @click="$vuetify.goTo('#about-sosconf')"
            >
              <v-icon left>mdi-information-outline</v-icon>
              关于年会
            </v-btn>
            <v-btn
              dark
              rounded
              color="success"
              class="ma-2"
              elevation="6"
              x-large
              to="/reg"
            >
              <v-icon left>mdi-play</v-icon>
              立即报名
            </v-btn>
          </div>
        </v-responsive>
      </v-col>
      <v-spacer />
      <v-col class="hidden-md-and-down" cols="12" lg="6">
        <v-img max-width="100%" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: #424242;
}
</style>
