<template>
  <md-app md-waterfall md-mode="fixed">
    <my-navbar slot="md-app-toolbar"></my-navbar>

    <md-app-toolbar class="md-primary">
      <!-- <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>home</md-icon>
      </md-button>-->
      <span class="md-title">Kindergarten Receipts Management</span>
    </md-app-toolbar>

    <md-app-content>
      <div>
        <md-tabs md-sync-route>
          <md-tab id="tab-home" md-icon="home" to="/" exact></md-tab>  <!-- md-label="Home" -->

          <md-tab id="tab-pages" md-label="Receipts" to="/receipts"></md-tab>

          <md-tab id="tab-posts" md-label="Add Receipts" to="/addReceipts"></md-tab>
        </md-tabs>
      </div>
      <br />
      <br />
      <router-view></router-view>
      <br />
      <br />ᕦ( ͡° ͜ʖ ͡°)ᕤ Version: KinderUI 1.0 → Build: 8
    </md-app-content>
  </md-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  created() {
    this.fetchReceipts();
  },
  methods: {
    isPath(path) {
      return this.$route.path === path;
    },
    ...mapActions(["fetchReceipts"]),
  },
  computed: {
    ...mapGetters(["allReceipts"]), // eslint-disable-line no-unused-vars
    getAllReceipts() {
      return this.allReceipts;
    },
  },
  data() {
    return {
      component: "AddReceipt",
      menuVisible: false,
      chitanteMock: [
        {
          name: "Leon",
          date: "20.10.2020",
          amount: "140 Lei",
          description: "TestD1",
        },
        {
          name: "Mina",
          date: "20.10.2020",
          amount: "150 Lei",
          description: "TestD2",
        },
      ],
    };
  },
};
</script>

<style  lang="scss" scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.md-card {
  width: 380;
  margin: 10px;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
}
</style>
