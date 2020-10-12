<template>
  <v-timeline dense>
    <v-timeline-item class="pb-3" small v-for="p in progress" :key="p.url">
      <v-card class="elevation-2">
        <v-card-title class="headline">
          {{ p.title }}
        </v-card-title>
        <v-card-text>
          {{ p.descr }}
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-chip>
            <v-icon class="mr-1">mdi-clock-outline</v-icon>
            {{ p.time }}
          </v-chip>
          <v-spacer />
          <v-btn color="primary" text :to="'/progress/' + p.url"
            >了解更多</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import progress from "@/data/progress.json";
export default {
  data: () => ({
    progress: progress.sort((a, b) =>
      a.time > b.time ? -1 : b.time > a.time ? 1 : 0
    )
  })
};
</script>

<style></style>
