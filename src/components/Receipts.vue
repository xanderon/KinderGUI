<template>
      <md-card md-with-hover>
        <Card
          is="Card"
          v-for="(chitanta) in getAllReceipts"
          v-bind:key="chitanta.date"
          v-bind:name="chitanta.child_name"
          v-bind:date="chitanta.date"
          v-bind:amount="chitanta.amount"
          v-bind:description="chitanta.description"
        />
      </md-card>
</template>

<script>
import Card from "./Card.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  created() {
    this.fetchReceipts();
  },
  methods: {
    ...mapActions(["fetchReceipts"])
  },
  computed: {
    ...mapGetters(["allReceipts"]), // eslint-disable-line no-unused-vars
    getAllReceipts() {
      return this.allReceipts;
    }
  },
  data() {
    return {
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
      ]
    };
  },
  components: {
    Card,
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
