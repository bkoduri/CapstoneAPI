<template>
  <section class="content">
    <div class="row center-block">
      <h2>Patient Records</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Risk Profile</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Condition</th>
                  <th>Status</th>
                  <th style="width: 40px">Score</th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Diabetes</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-yellow" style="width: 45%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">45%</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Hyper Tension</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">70%</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Cardiac Risk</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-success" style="width: 30%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">30%</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Ligaments</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-danger" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-red">90%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>

    <div class="row center-block">
      <h2>Diagnostic Reports</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Immunization History</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive" >
                  <table class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th style="width: 207px;" colspan="1" rowspan="1">Date</th>
                        <th style="width: 182px;" colspan="1" rowspan="1">Vaccine</th>
                        <th style="width: 142px;" colspan="1" rowspan="1">Patient ID</th>
                        <th style="width: 101px;" colspan="1" rowspan="1">Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="arr in service">
                        <td>{{arr.resource.date}}</td>
                        <td>{{arr.resource.vaccineCode.text}}</td>
                        <td>{{arr.resource.patient.reference}}</td>
                        <td>{{arr.resource.site.text}}</td>
                      </tr>

                    </tbody>
                    <tfoot>

                    </tfoot>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive" >
                  <table class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th style="width: 207px;" colspan="1" rowspan="1">Date</th>
                        <th style="width: 182px;" colspan="1" rowspan="1">category</th>
                        <th style="width: 142px;" colspan="1" rowspan="1">Allergy</th>
                        <th style="width: 101px;" colspan="1" rowspan="1">Reaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="arr in allergies">
                        <td>{{arr.resource.assertedDate}}</td>
                        <td>{{arr.resource.category}}</td>
                        <td>{{arr.resource.code.coding.display}}</td>
                        <td>{{arr.resource.reaction.description}}</td>
                      </tr>

                    </tbody>
                    <tfoot>

                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')
import axios from 'axios'

export default {
  name: 'Tables',
  data () {
    return {
      // githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      githubUrl: 'https://fa2oblaam5.execute-api.us-east-1.amazonaws.com/hapi',
      allergyurl: 'https://9bzu30wdjj.execute-api.us-east-1.amazonaws.com/allergies',
      service: [
        {
          'resource.date': '2018-07-14',
          'resource.vaccineCode.text': 'Menningocal',
          'resource.patient.reference': '60',
          'resource.site.text': 'Intramuscular'
        }
      ],
      allergies: [
        {
          'resource.assertedDate': '2012-05-24',
          'resource.category': 'Environment',
          'resource.code.coding.display': 'Dust Mites',
          'resource.reaction.description': 'Breathing difficulty , Asthma'
        }
      ]
      error: null
    }
  },
  methods: {
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('data Response:', response.data)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.service = response.data.entry
          console.log('data Response1:', this.service[1])
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    },
    callAllergy () {
      axios.get(this.allergyurl)
        .then(response => {
          console.log('data Response:', response.data)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.allergies = response.data.entry
          console.log('data Response1:', this.allergies[1])
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    }
  },
  mounted() {
    this.callGitHub()
    this.callAllergy()
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}
</style>
