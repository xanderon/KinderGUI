<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <!-- <md-card-header>
          <div class="md-title">Test</div>
          <div class="md-subhead">Test</div>
          
        </md-card-header> -->
<!-- 
        <md-card-content>
          {{ description }}
        </md-card-content> -->

        <md-card-actions>
          <md-button v-bind:to="toRoute" v-bind:md-icon="mdIcon">{{name}}</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    height: 90px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'MenuButtonCard',
  props: [
    "name",
    "toRoute",
    "mdIcon"
  ],
}
</script>