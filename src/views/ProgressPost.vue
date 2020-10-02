<template>
  <section class="progress-post d-flex align-center">
    <v-container>
      <v-card>
        <v-card-text>
          <VueMarkdown :source="mdtext"></VueMarkdown>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  },
  data: () => ({
    mdtext: ""
  }),
  methods: {
    refreshHTML() {
      this.$ajax
        .get("doc/progress/" + this.$route.params.pid + ".md")
        .then(response => (this.mdtext = response.data))
        .catch(() => {
          this.mdtext = "暂无内容";
        });
    }
  },
  watch: {
    navitem() {
      this.refreshHTML();
    }
  },
  mounted() {
    this.refreshHTML();
  }
};
</script>
