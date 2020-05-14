<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Add Receipt</div>
        </md-card-header>

        <md-card-content>
          <!-- Name Input -->
          <md-field>
            <label>Name</label>
            <md-input v-model="vname"></md-input>
          </md-field>
          <!-- Amount Input -->
          <md-field>
            <label>Amount</label>
            <md-input v-model="vamount"></md-input>
          </md-field>
          <!-- Date Input -->
          <md-field>
            <label>Date</label>
            <md-input v-model="vdate"></md-input>
          </md-field>
          <!-- Description Input -->
          <md-field>
            <label>Description</label>
            <md-input v-model="vdescription"></md-input>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button>Add receipt</md-button>
          <!-- <md-button>Reset Fields</md-button>-->
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 390px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "AddReceipt",
  props: ["name", "date", "amount", "description"],
  data() {
    return {
      vname: "Name",
      vdate: "Date",
      vamount: "Amount",
      vdescription: "Description"
    };
  },
};
</script>