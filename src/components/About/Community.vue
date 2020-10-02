<template>
  <div>
    <v-card-title>
      <div class="v-heading text-h5 mb-2">
        合作社区
        <div class="text-h6 font-weight-light">Communities</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" v-for="c in communities" :key="c.name">
          <v-card>
            <v-card-title>{{ c.name }}</v-card-title>
            <v-card-text>
              <p v-for="p in c.desc" :key="p">{{ p }}</p>
              <v-btn v-if="'url' in c" :href="c.url" small color="primary"
                ><v-icon small class="pr-2">mdi-web</v-icon>访问网站</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import communities from "@/data/communities.json";

export default {
  data: () => ({
    communities: communities
  })
};
</script>

<style></style>
