<template>
  <div>
    <div v-for="(s, idx) in event_list" :key="s.time">
      <v-list-item :href="'url' in s ? url : ''">
        <v-list-item-content>
          <v-list-item-title v-text="s.title"></v-list-item-title>

          <v-list-item-subtitle v-if="'speaker' in s" class="text--primary"
            ><v-icon small class="mr-1">mdi-account</v-icon>主讲人：{{
              s.speaker
            }}</v-list-item-subtitle
          >
          <v-list-item-subtitle v-else class="text--primary"
            ><v-icon class="mr-1" small>mdi-map</v-icon
            >活动</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text v-text="s.time"></v-list-item-action-text>
          <v-chip
            :dark="'color' in s"
            :color="'color' in s ? s.color : 'success'"
            small
            >{{ s.type }}</v-chip
          >
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="idx < event_list.length - 1"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event_list"]
};
</script>

<style></style>
