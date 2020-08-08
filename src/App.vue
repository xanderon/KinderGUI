<template>
  <md-app md-waterfall md-mode="fixed">
    <my-navbar slot="md-app-toolbar"></my-navbar>

    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Kindergarten Receipts Management</span>
      <!-- <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/receipts" class="nav-link">About</router-link></li>
            <li class="nav-item"><router-link to="/addReceipts" class="nav-link">Contact</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view> -->
    </md-app-toolbar>

  

    <md-app-content>

      <div>

    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" :md-active="isPath('/')" exact>  <!--<md-tab id="tab-home" md-label="Home" to="/" exact> -->
      </md-tab>

      <md-tab id="tab-pages" md-label="Receipts" :md-active="isPath('/receipts')">
      </md-tab>

      <md-tab id="tab-posts" md-label="AddReceipts" :md-active="isPath('/addReceipts')">
      </md-tab>

    </md-tabs>
  </div>
      <component v-bind:is="component" />
    <button v-on:click="toggle">Toggle</button>
      
      <br />
      <br />
      <router-view></router-view>
      <br />
      <br />| Version: KinderUI 1.0 |-| Build: 0.0.7 |
    </md-app-content>
  </md-app>
</template>

<script>
import Receipts from "./components/Receipts.vue";
import AddReceipt from "./components/AddReceipt.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  created() {
    this.fetchReceipts();
  },
  methods: {
    isPath (path) {
           return this.$route.path === path
        },
    ...mapActions(["fetchReceipts"]),
    toggle(){
      if (this.component === Receipts) {
        this.component = AddReceipt;
      } else {
        this.component = Receipts;
      }
    }
  },
  computed: {
    ...mapGetters(["allReceipts"]), // eslint-disable-line no-unused-vars
    getAllReceipts() {
      return this.allReceipts;
    }
  },
  data() {
    return {

      component:"AddReceipt",
      menuVisible: false,
      chitanteMock: [
        {
          name: "Leon",
          date: "20.10.2020",
          amount: "140 Lei",
          description: "TestD1"
        },
        {
          name: "Mina",
          date: "20.10.2020",
          amount: "150 Lei",
          description: "TestD2"
        }
      ],
    };
  },
  components: {
    Receipts,
    AddReceipt
  }
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
