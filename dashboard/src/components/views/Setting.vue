<template>
  <div>
    <h1 class="text-center">Settings</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Personal Details</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-calendar"></i>
                </span>
                <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
              </div>
              <br />
              <br />

              <!-- with characthers -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-at" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Username" type="text">
              </div>
              <br />
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                <input class="form-control" placeholder="Email" type="email">
              </div>
              <br />

              <!-- select examples -->
              <h4>Select Location</h4>
              <div class="form-group">
                <label>Select</label>
                <select class="form-control">
                  <option>Columbus</option>
                  <option>Bloomington</option>
                  <option>Chicago</option>
                  <option>Dallas</option>
                  <option>Austin</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label>Select contact preferences</label>
                <select multiple="" class="form-control">
                  <option>Email</option>
                  <option>Mobile</option>
                  <option>Land phone</option>
                  <option>Skype</option>
                  <option>Slack</option>
                </select>
              </div>

              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require('moment')
import datepicker from 'vue-date-picker'

export default {
  name: 'Settings',
  components: { datepicker },
  computed: {
    datetime () {
      return new Date()
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
