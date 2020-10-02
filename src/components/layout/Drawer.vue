<template>
  <v-navigation-drawer v-model="drawerState" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          SOSCONF.zh 2020
        </v-list-item-title>
        <v-list-item-subtitle>
          2020 中文学生开源年会
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="item in items" :key="item.link" :to="'/' + item.link">
        <v-list-item-icon>
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-btn
      v-for="l in small_icons"
      :key="l.icon"
      icon
      class="mx-4 my-2"
      :href="'link' in l ? l.link : null"
    >
      <v-icon>mdi-{{ l.icon }}</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
import nv from "@/data/nav.json";

export default {
  data: () => ({
    items: nv.menu,
    small_icons: nv.social
  }),
  computed: {
    drawerState: {
      get() {
        return this.$store.state.drawerShow;
      },
      set(v) {
        this.$store.commit("setDrawerShow", v);
      }
    }
  }
};
</script>

<style></style>
