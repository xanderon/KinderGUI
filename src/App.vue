<template>
  <md-app md-waterfall md-mode="fixed">
    <my-navbar slot="md-app-toolbar"></my-navbar>
    <md-app-content>
      <Card />
    </md-app-content>
  </md-app>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "app",
  components: {
    Card
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
</style>
