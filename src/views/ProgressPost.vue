<template>
  <section class="progress-post d-flex align-center">
    <v-container>
      <v-skeleton-loader
        :loading="loading"
        type="article@4"
        :elevation="loading ? 2 : 0"
      >
        <v-card>
          <v-card-text>
            <VueMarkdown :source="mdtext"></VueMarkdown>
          </v-card-text>
        </v-card>
      </v-skeleton-loader>
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
    mdtext: "",
    loading: true
  }),
  methods: {
    refreshHTML() {
      this.$ajax
        .get("doc/progress/" + this.$route.params.pid + ".md")
        .then(response => (this.mdtext = response.data))
        .catch(() => {
          this.mdtext = "暂无内容";
        })
        .finally(() => (this.loading = false));
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
