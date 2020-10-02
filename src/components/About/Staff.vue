<template>
  <div>
    <v-card-title>
      <div class="v-heading text-h5 mb-2">
        筹备委员会
        <div class="text-h6 font-weight-light">Preparatory Committee</div>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">志愿者 Volunteer</div>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text class="text-center">
              <div class="v-heading text-h5 mb-2">
                <v-icon>mdi-emoticon-happy-outline</v-icon>最衷心的感谢
              </div>
              <p>2020中文学生开源年会的成功举办与你们的志愿服务息息相关！</p>
            </v-card-text>
          </v-card></v-col
        >
      </v-row>
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">媒体 Media</div>
      <StaffListView :staff="staff.media" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">技术支持 Technical Support</div>
      <StaffListView :staff="staff.tech" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">赞助 Sponsor</div>
      <StaffListView :staff="staff.sponsor" />
    </v-card-text>
    <v-card-text>
      <div class="v-heading text-h6 mb-2">场地 Site</div>
      <StaffListView :staff="staff.site" />
    </v-card-text>
  </div>
</template>

<script>
import StaffListView from "@/components/About/StaffListView.vue";
import StaffList from "@/data/staff.json";

export default {
  components: { StaffListView },
  data: () => ({
    staff: StaffList
  })
};
</script>

<style></style>
