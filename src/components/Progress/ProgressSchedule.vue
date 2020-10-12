<template>
  <v-list>
    <v-subheader>上午</v-subheader>
    <ProgressScheduleItem :event_list="schedule.morning" />
    <v-subheader>下午</v-subheader>

    <ProgressScheduleItem :event_list="schedule.afternoon" />
  </v-list>
</template>

<script>
import schedule from "@/data/schedule.json";
import ProgressScheduleItem from "./ProgressScheduleItem.vue";

export default {
  components: {
    ProgressScheduleItem
  },
  data: () => ({
    schedule: schedule
  })
};
</script>

<style></style>
