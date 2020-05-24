<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ amount }}</div>
          <div class="md-subhead">{{ `${name} ${date}` }}</div>
          
        </md-card-header>

        <md-card-content>
          {{ description }}
        </md-card-content>

        <!--<md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions> -->
      </md-ripple>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'RegularCards',
  props: [
    "name",
    "date",
    "amount",
    "description"
  ],
}
</script>