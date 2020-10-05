<template>
  <section class="talks d-flex align-center">
    <v-container class="mt-4">
      <v-row>
        <v-col v-for="s in speakers" :key="s.name" cols="12">
          <v-card>
            <v-row>
              <v-col class="py-0 d-flex flex-column" cols="12" md="8">
                <v-card-title class="text-h5">{{ s.name }}</v-card-title>
                <v-card-subtitle
                  ><v-icon small class="mr-1">mdi-clock-outline</v-icon
                  >时间：待定</v-card-subtitle
                >
                <v-card-text>
                  <p class="my-1" v-for="p in s.desc" :key="p">{{ p }}</p>
                </v-card-text>
                <v-spacer />
                <v-card-actions v-if="'tags' in s">
                  <v-chip v-for="t in s.tags" :key="t.name" :color="t.color">{{
                    t.name
                  }}</v-chip>
                </v-card-actions>
              </v-col>

              <v-divider class="hidden-sm-and-down" vertical></v-divider>
              <v-col class="py-0 pl-md-0 d-flex flex-column">
                <v-divider class="hidden-md-and-up" />
                <v-card-title> 讲者：{{ s.speaker.name }} </v-card-title>
                <v-card-subtitle>
                  {{ s.speaker.org }}
                </v-card-subtitle>
                <v-card-text>
                  <p class="my-1" v-for="p in s.speaker.desc" :key="p">
                    {{ p }}
                  </p>
                </v-card-text>
                <v-spacer />
                <v-divider />
                <v-card-actions>
                  <v-btn text color="primary" :herf="s.interview_url" :disabled="s.interview_url == ''"
                    >查看专访</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import SpeakerList from "@/data/speakers.json";

export default {
  data: () => ({
    speakers: SpeakerList
  })
};
</script>

<style></style>
