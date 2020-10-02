<template>
  <v-card rounded="lg" class="mb-4" id="about-sosconf">
    <v-card-text>
      <v-container class="mt-8">
        <div class="text-h3 mb-4">
          SOSCONF.ZH 2020
        </div>
        <h3 class="v-heading text-h5 mb-2">学生开源年会</h3>
        <p>
          中文学生开源年会将于 2020年10月18日举办。
        </p>
        <p>
          本次中文学生开源年会将围绕着“开源”主题，设置线上部分与线下部分：线上部分将主要由主题演讲与主题Talk构成，为学生开源项目、开源思想应用等广义开源技术实践提供分享与交流的平台；
        </p>
        <p>
          线下部分将主要设置开源圆桌会议与一场持续两天的Hackathon，为各高校学生开源组织提供相互沟通、相互了解的渠道；让各高校的开源社区能定期地面对面交流组织情况与项目进度；一场贯穿线上线下的解谜游戏也将包含在本场年会中。
        </p>
        <h3 class="v-heading text-h5 mb-2">年会展望</h3>
        <p>
          我们也希望学生开源年会所聚集而成的社群会作为一个长期的舞台，成为学生交流技术、开放讨论的平台，使得开源理念能够在学生群体中茁壮成长。
        </p>
        <p>
          我们希望同学们能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来。也期待参会者能继续发挥自己的影响力，让开源理念能更好的在学生群体中传播开去。
        </p>
        <h3 class="v-heading text-h5 mb-2">如何参与</h3>
        <p>
          2020中文学生开源年会的报名渠道已经开放。
        </p>
        <p>
          若您希望站上年会讲台，与大家一同分享想法、观点或项目，请移步至“讲者报名”，每位学生讲者都将获得一定比例的餐旅费用补贴；
        </p>
        <p>
          我们欢迎各大高校社区与我们一同合作，打造具有本社区特色的分会场，若您希望报名或进一步了解合作社区事宜，请移步至“合作社区/分会场报名”；
        </p>
      </v-container>
    </v-card-text>
    <v-card-text>
      <v-container>
        <h3 class="v-heading text-h5 mb-2">举办信息</h3>
        <v-row class="mb-4">
          <v-spacer />
          <v-col cols="12" md="8" lg="6">
            <v-row v-for="l in info_list" :key="l.title">
              <v-col cols="12" md="6"
                ><v-icon class="mr-4">mdi-{{ l.icon }}</v-icon
                >{{ l.title }}</v-col
              >
              <v-col>{{ l.desc }}</v-col>
            </v-row>
          </v-col>
          <v-spacer />
        </v-row>
        <v-divider />
        <Map />
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Map from "./Map";

export default {
  data: () => ({
    info_list: [
      {
        title: "会场地址",
        icon: "home",
        desc: "中国成都市 · 电子科技大学（清水河校区）"
      },
      {
        title: "举办时间",
        icon: "clock-outline",
        desc: "2020 年 10 月"
      },
      {
        title: "主办方",
        icon: "account",
        desc: "开源工场"
      }
    ]
  }),
  components: {
    Map
  }
};
</script>

<style></style>
