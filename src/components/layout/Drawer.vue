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
export default {
  data: () => ({
    items: [
      {
        title: "参加",
        icon: "check-all",
        link: "reg"
      },
      {
        title: "联系赞助",
        icon: "contacts",
        link: "coop"
      },
      {
        title: "Talk 列表",
        icon: "format-list-bulleted",
        link: "talks"
      },
      {
        title: "最新进展",
        icon: "chart-timeline-variant",
        link: "progress"
      },
      {
        title: "关于我们",
        icon: "information",
        link: "about"
      }
    ],
    small_icons: [
      {
        title: "加入我们的 Telegram 群组",
        icon: "telegram",
        link: "https://t.me/soscon"
      },
      {
        title: "关注我们的微博",
        icon: "sina-weibo"
      },
      {
        title: "加入我们的 QQ 群",
        icon: "qqchat",
        link: "https://u.nu/y4liw"
      }
    ]
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
