<template>
  <v-container class="reg mt-8">
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-card class="flex d-flex flex-column">
          <v-container>
            <v-card-title class="text-h4">
              <v-icon large class="mr-4">mdi-account-voice</v-icon>
              招募演讲者
            </v-card-title>
            <v-card-text class="pb-0">
              我们希望学生能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来!<br />
              了解演讲、闪电演讲、以及Workshop报名详情请点击下方按钮“报名成为演讲者”
            </v-card-text>
          </v-container>
          <v-spacer />
          <v-container>
            <v-card-actions>
              <v-btn
                color="primary"
                class="px-8"
                large
                rounded
                href="https://www.bagevent.com/event/speechApply/6302910"
                >报名成为演讲者</v-btn
              >
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-card class="flex d-flex flex-column">
          <v-container>
            <v-card-title class="text-h4">
              <v-icon large class="mr-4">mdi-account-group</v-icon>加入合作社区
            </v-card-title>
            <v-card-text class="pb-0">
              我们希望各高校开源社区能与我们一同合作，为我们带来更富有多样性的2020中文学生开源年会：<br />
              合作社区将能够在组委会的支持下，承办不同的分会场，举办富有本社区特色的活动。<br />
              若你的社区希望加入我们，请点击“报名加入合作社区”。
            </v-card-text>
          </v-container>
          <v-spacer />
          <v-container>
            <v-card-actions>
              <v-btn
                href="https://www.bagevent.com/event/registerTicket/6348545"
                color="primary"
                class="px-8"
                large
                rounded
                >报名加入合作社区</v-btn
              >
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Reg"
};
</script>

<style scoped></style>
