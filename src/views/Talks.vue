<template>
  <section class="talks d-flex align-center">
    <v-container class="mt-4">
      <v-row>
        <v-col v-for="s in speakers" :key="s.name" cols="12">
          <v-card>
            <v-row>
              <v-col class="py-0" cols="12" md="8">
                <v-card-title>{{ s.name }}</v-card-title>
                <v-card-text>
                  <p class="my-1" v-for="p in s.desc" :key="p">{{ p }}</p>
                </v-card-text>
              </v-col>
              <v-divider class="hidden-sm-and-down" vertical></v-divider>
              <v-col class="py-0 pl-0 d-flex flex-column">
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
                  <v-btn text color="primary">查看专访</v-btn>
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
