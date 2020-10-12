<template>
  <section class="progress d-flex align-center">
    <v-container>
      <v-card class="hidden-md-and-up">
        <v-tabs centered fixed-tabs>
          <v-tab>大会日程</v-tab>
          <v-tab>最新进展</v-tab>
          <v-tab-item><ProgressSchedule /></v-tab-item>
          <v-tab-item><ProgressTimeline /></v-tab-item>
        </v-tabs>
      </v-card>
      <v-row no-gutters class="hidden-sm-and-down">
        <v-col cols="12" md="6" class="pr-2">
          <v-alert
            icon="mdi-information"
            border="left"
            color="primary"
            class="mb-4"
            elevation="2"
            colored-border
          >
            <h3 class="headline">
              大会日程
            </h3></v-alert
          >
          <v-card>
            <ProgressSchedule />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="pl-2">
          <v-alert
            icon="mdi-information"
            border="left"
            color="primary"
            class="mb-0"
            elevation="2"
            colored-border
          >
            <h3 class="headline">
              最新进展
            </h3></v-alert
          >
          <ProgressTimeline />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProgressSchedule from "@/components/Progress/ProgressSchedule.vue";
import ProgressTimeline from "@/components/Progress/ProgressTimeline.vue";
export default {
  name: "Progress",
  data: () => ({}),
  components: {
    ProgressTimeline,
    ProgressSchedule
  }
};
</script>

<style></style>
