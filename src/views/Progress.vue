<template>
  <section class="progress d-flex align-center">
    <v-container>
      <v-timeline dense>
        <v-timeline-item small v-for="p in progress" :key="p.url">
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
    </v-container>
  </section>
</template>

<script>
import progress from "@/data/progress.json";
export default {
  name: "Progress",
  data: () => ({
    progress: progress
  })
};
</script>

<style></style>
