<template>
  <div>
    <h1 class="text-center">New Patient Enrollment</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Personal Details - Name, Address, Date of Birth</h3>
            </div>

            <div class="box-body">
                            <!-- with characthers -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-user" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Patient Name" type="text">
              </div>
              <br />
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                <input class="form-control" placeholder="Mailing Address" type="email">
              </div>
              <br />
              <!-- calendar group -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-calendar"></i>
                </span>
                <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
              </div>
              <br />

              <!-- select examples -->
              <h4>Select Hospital Location</h4>
              <div class="form-group">
                <label>Select</label>
                <select class="form-control">
                  <option>Indianapolis</option>
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
                </select>
              </div>
              <br>
              <button type="button" class="btn btn-success">Submit</button>

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
