<template>
  <div>
    <md-card md-with-hover>
      <form class="md-layout" @submit.prevent="validateReceipt">
        <md-card-header>
          <div class="md-title">Add Receipt</div>
        </md-card-header>

        <md-card-content>
          <!-- Name Input -->
          <md-field :class="getValidationClass('vname')">
            <label for="vname">Child Name</label>
            <md-input name="vname" id="vname" v-model="form.vname" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.vname.required">The first name is required</span>
          </md-field>
          <!-- Amount Input -->
          <md-field :class="getValidationClass('vamount')">
            <label for="vamount">Amount</label>
            <md-input name="vamount" id="vamount" v-model="form.vamount" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.vamount.required">The first name is required</span>
          </md-field>
          <!-- Date Input -->
          <md-field :class="getValidationClass('vdate')">
            <label for="vdate">Date</label>
            <md-input name="vdate" id="vdate" v-model="form.vdate" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.vdate.required">The first name is required</span>
          </md-field>
          <!-- Description Input -->
          <md-field :class="getValidationClass('vdescription')">
            <label for="vdescription">Description</label>
            <md-input
              name="vdescription"
              id="vdescription"
              v-model="form.vdescription"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.vdescription.required">The first name is required</span>
          </md-field>

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Add receipt</md-button>
            <!-- <md-button>Reset Fields</md-button>-->
          </md-card-actions>
        </md-card-content>
      </form>
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
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators"; // eslint-disable-line no-unused-vars

export default {
  name: "AddReceipt",
  props: ["name", "date", "amount", "description"],
  mixins: [validationMixin],
  data: () => ({
    form: {
      vname: null,
      vamount: null,
      vdate: null,
      vdescription: null
    },
    sending: false
  }),
  validations: {
    form: {
      vname: {
        required
        //minLength: minLength(3) // bug? maxLength sa fie 3?
      },
      vamount: {
        required
        //minLength: minLength(3)
      },
      vdate: {
        required
        //maxLength: maxLength(3)
      },
      vdescription: {
        required
      }
    }
  },
  methods: {
    ...mapActions(["saveReceiptToDB"]),
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    saveReceipt() {
      this.sending = true;
      const newReceipt = {
        child_name: this.form.vname,
        amount: this.form.vamount,
        date: this.form.vdate,
        description: this.form.vdescription
      };
      console.log(JSON.stringify(newReceipt, null, 2));
      this.saveReceiptToDB(newReceipt);
      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.sending = false;
        //this.clearForm(); --> BUG for no clear for after add
      }, 1500);
    },
    clearForm() {
      this.$v.$reset();
      this.form.vname = null;
      this.form.vamount = null;
      this.form.vdate = null;
      this.form.vdescription = null;
    },
    validateReceipt() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveReceipt();
      }
    }
  }
};
</script>