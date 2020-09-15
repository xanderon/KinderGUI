<template>
      <md-card md-with-hover>
        <MenuButtonCard
          is="MenuButtonCard"
          v-for="(card) in cardButtons"
          v-bind:key="card.name"
          v-bind:name="card.name"
          v-bind:toRoute="card.toRoute"
        />
      </md-card>
</template>

<script>
import MenuButtonCard from "./MenuButtonCard.vue";

export default {
  name: "app",
  data() {
    return {
      cardButtons: [
        {
          name: "Add Receipt",
          toRoute: "/addReceipts",
          mdIcon: "playlist_add"
        },
        {
          name: "View Receipt",
          toRoute: "/receipts",
          mdIcon: "list"
        }
      ],
    };
  },
  components: {
    MenuButtonCard,
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
