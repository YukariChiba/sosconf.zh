<template>
  <v-app-bar app color="primary" dark elevate-on-scroll id="main-bar">
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$store.commit('toggleDrawerShow')"
    ></v-app-bar-nav-icon>
    <v-container class="py-0 fill-height">
      <v-btn text @click="$router.push('/')">
        <v-toolbar-title>SOSCONF.zh 2020</v-toolbar-title></v-btn
      >
      <v-spacer />
      <v-btn
        class="hidden-sm-and-down"
        text
        v-for="l in items"
        :key="l.link"
        :to="'/' + l.link"
      >
        <v-icon class="mr-2">mdi-{{ l.icon }}</v-icon>
        {{ l.title }}
      </v-btn>
      <v-tooltip bottom v-for="l in small_icons" :key="l.icon">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="hidden-sm-and-down"
            v-bind="attrs"
            v-on="on"
            icon
            :href="'link' in l ? l.link : null"
          >
            <v-icon>mdi-{{ l.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ l.title }}</span>
      </v-tooltip>
    </v-container>
  </v-app-bar>
</template>

<script>
import nv from "@/data/nav.json";

export default {
  data: () => ({
    items: nv.menu,
    small_icons: nv.social
  })
};
</script>
