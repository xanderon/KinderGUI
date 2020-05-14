<template>
  <md-app md-waterfall md-mode="fixed">
    <my-navbar slot="md-app-toolbar"></my-navbar>
    <md-app-content>
      <Card
        is="Card"
        v-for="(chitanta) in chitanteMock"
        v-bind:key="chitanta.date"
        v-bind:name="chitanta.name"
        v-bind:date="chitanta.date"
        v-bind:amount="chitanta.amount"
        v-bind:description="chitanta.description"
      />
    </md-app-content>
  </md-app>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "app",
  data() {
    return {
      chitanteMock: [
      {name:'Leon', date:'20.10.2020', amount:'140 Lei', description:'TestD1'},
      {name:'Mina', date:'20.10.2020', amount:'150 Lei', description:'TestD2'}            
      ]
    };
  },
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
