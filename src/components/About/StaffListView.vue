<template>
  <v-row justify="center">
    <v-col cols="12" md="6" lg="4" v-for="p in staff" :key="p.name">
      <v-card>
        <v-card-text class="text-center pb-0">
          <v-avatar color="grey" size="96">
            <span class="white--text headline text-h3">{{ p.name[0] }}</span>
          </v-avatar>
        </v-card-text>
        <v-card-title class="justify-center">{{ p.name }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["staff"]
};
</script>

<style></style>
