<template>
  <section class="about d-flex align-center home-head">
    <v-container>
      <v-card>
        <v-tabs
          :grow="$vuetify.breakpoint.mobile"
          :vertical="!$vuetify.breakpoint.mobile"
        >
          <v-tab :class="$vuetify.breakpoint.mobile ? '' : 'pr-12'">
            <v-icon left>
              mdi-account-group
            </v-icon>
            合作社区
          </v-tab>
          <v-tab :class="$vuetify.breakpoint.mobile ? '' : 'pr-12'">
            <v-icon left>
              mdi-heart
            </v-icon>
            贡献者
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <Community />
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat> <Staff /> </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import Community from "@/components/About/Community.vue";
import Staff from "@/components/About/Staff.vue";

export default {
  name: "About",
  components: { Community, Staff }
};
</script>

<style></style>
