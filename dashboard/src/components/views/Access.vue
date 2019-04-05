'<template>
  <section class="content">
    <h1 class="text-center">Hospital Network</h1>
    <h4 class="text-center">Global presence of our partner Hospitals</h4>
    <!-- first -->
    <div class="row">
      <div class="col-md-12">
        <!-- MAP & BOX PANE -->
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">Global Report</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <div class="row no-gutters">
              <div class="col-md-8">
                  <!-- Map will be created here -->
                  <div id="world-map-markers"></div>
              </div>
              <!-- /.col -->
              <div class="col-md-4">
                <div class="pad box-pane-right bg-red" style="min-height: 400px">
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-group fa-3x"></i></div>
                    <h5 class="description-header">15000+</h5>
                    <span class="description-text">GLOBAL PATIENTS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-truck fa-3x"></i></div>
                    <h5 class="description-header">750000+</h5>
                    <span class="description-text">INSURANCE ClAIMS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-sitemap fa-3x"></i></div>
                    <h5 class="description-header">500+</h5>
                    <span class="description-text">LOCATIONS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-group fa-3x"></i></div>
                    <h5 class="description-header">8,000+</h5>
                    <span class="description-text">GLOBAL EMPLOYEES</span>
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <link rel="stylesheet" href="/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.css" >
      </div>
    </div>
    <!-- first end -->

    <!-- second -->
    <div class="row">
      <div class="col-md-12">
        <!-- MAP & BOX PANE -->
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">USA Report</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <div class="row no-gutters">
              <div class="col-md-8">
                  <!-- Map will be created here -->
                  <div id="us-map-markers"></div>
              </div>
              <!-- /.col -->
              <div class="col-md-4">
                <div class="pad box-pane-right bg-red" style="min-height: 355px">
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-group fa-3x"></i></div>
                    <h5 class="description-header">5000+</h5>
                    <span class="description-text">PATIENTS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-truck fa-3x"></i></div>
                    <h5 class="description-header">100+</h5>
                    <span class="description-text">INSURANCE CLAIMS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-sitemap fa-3x"></i></div>
                    <h5 class="description-header">200+</h5>
                    <span class="description-text">LOCATIONS</span>
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <link rel="stylesheet" href="/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.css" >
      </div>
    </div>
    <!-- second end -->

    <!-- third -->
    <div class="row">
      <div class="col-md-12">
        <!-- MAP & BOX PANE -->
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">Indiana Report</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <div class="row no-gutters">
              <div class="col-md-8">
                  <!-- Map will be created here -->
                  <div id="in-map-markers"></div>
              </div>
              <!-- /.col -->
              <div class="col-md-4">
                <div class="pad box-pane-right bg-red" style="min-height: 355px">
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-group fa-3x"></i></div>
                    <h5 class="description-header">200+</h5>
                    <span class="description-text">PATIENTS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-truck fa-3x"></i></div>
                    <h5 class="description-header">20+</h5>
                    <span class="description-text">INSURANCE CLAIMS</span>
                  </div>
                  <div class="description-block margin-bottom">
                    <div class="row" data-color="#fff"><i class="fa fa-sitemap fa-3x"></i></div>
                    <h5 class="description-header">100+</h5>
                    <span class="description-text">LOCATIONS</span>
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <link rel="stylesheet" href="/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.css" >
      </div>
    </div>
    <!-- third end -->

  </section>
</template>
<script>
import {stats} from '../../demo'

const pluginURL = '/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js'
const mapURL = '/static/js/plugins/jvectormap/jquery-jvectormap-world-mill.js'
const mapURL2 = '/static/js/plugins/jvectormap/jquery-jvectormap-us-lcc.js'
const mapURL3 = '/static/js/plugins/jvectormap/jquery-jvectormap-data-us-in-lcc-en.js'

export default {
  name: 'Access',
  data () {
    return {
      stats
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.jQuery.getScript(pluginURL, () => {
        window.jQuery.getScript(mapURL, () => {
          window.jQuery('#world-map-markers').vectorMap({
            map: 'world_mill',
            panOnDrag: true,
            backgroundColor: '#d4f4dd',
            series: {
              regions: [{
                scale: ['#ed7688', '#ed1c3b'],
                normalizeFunction: 'polynomial',
                values: {
                  'AF': 16.63,
                  'AL': 11.58,
                  'DZ': 158.97,
                  'AO': 85.81,
                  'AG': 1.1,
                  'AR': 351.02,
                  'AM': 8.83,
                  'AU': 1219.72,
                  'AT': 366.26,
                  'AZ': 52.17,
                  'BS': 7.54,
                  'BH': 21.73,
                  'BD': 105.4,
                  'BB': 3.96,
                  'BY': 52.89,
                  'BE': 461.33,
                  'BZ': 1.43,
                  'BJ': 6.49,
                  'BT': 1.4,
                  'BO': 19.18,
                  'BA': 16.2,
                  'BW': 12.5,
                  'BR': 2023.53,
                  'BN': 11.96,
                  'BG': 44.84,
                  'BF': 8.67,
                  'BI': 1.47,
                  'KH': 11.36,
                  'CM': 21.88,
                  'CA': 1563.66,
                  'CV': 1.57,
                  'CF': 2.11,
                  'TD': 7.59,
                  'CL': 199.18,
                  'CN': 5745.13,
                  'CO': 283.11,
                  'KM': 0.56,
                  'CD': 12.6,
                  'CG': 11.88,
                  'CR': 35.02,
                  'CI': 22.38,
                  'HR': 59.92,
                  'CY': 22.75,
                  'CZ': 195.23,
                  'DK': 304.56,
                  'DJ': 1.14,
                  'DM': 0.38,
                  'DO': 50.87,
                  'EC': 61.49,
                  'EG': 216.83,
                  'SV': 21.8,
                  'GQ': 14.55,
                  'ER': 2.25,
                  'EE': 19.22,
                  'ET': 30.94,
                  'FJ': 3.15,
                  'FI': 231.98,
                  'FR': 2555.44,
                  'GA': 12.56,
                  'GM': 1.04,
                  'GE': 11.23,
                  'DE': 3305.9,
                  'GH': 18.06,
                  'GR': 305.01,
                  'GD': 0.65,
                  'GT': 40.77,
                  'GN': 4.34,
                  'GW': 0.83,
                  'GY': 2.2,
                  'HT': 6.5,
                  'HN': 15.34,
                  'HK': 226.49,
                  'HU': 132.28,
                  'IS': 12.77,
                  'IN': 1430.02,
                  'ID': 695.06,
                  'IR': 337.9,
                  'IQ': 84.14,
                  'IE': 204.14,
                  'IL': 201.25,
                  'IT': 2036.69,
                  'JM': 13.74,
                  'JP': 5390.9,
                  'JO': 27.13,
                  'KZ': 129.76,
                  'KE': 32.42,
                  'KI': 0.15,
                  'KR': 986.26,
                  'KW': 117.32,
                  'KG': 4.44,
                  'LA': 6.34,
                  'LV': 23.39,
                  'LB': 39.15,
                  'LS': 1.8,
                  'LR': 0.98,
                  'LY': 77.91,
                  'LT': 35.73,
                  'LU': 52.43,
                  'MK': 9.58,
                  'MG': 8.33,
                  'MW': 5.04,
                  'MY': 218.95,
                  'MV': 1.43,
                  'ML': 9.08,
                  'MT': 7.8,
                  'MR': 3.49,
                  'MU': 9.43,
                  'MX': 1004.04,
                  'MD': 5.36,
                  'MN': 5.81,
                  'ME': 3.88,
                  'MA': 91.7,
                  'MZ': 10.21,
                  'MM': 35.65,
                  'NA': 11.45,
                  'NP': 15.11,
                  'NL': 770.31,
                  'NZ': 138,
                  'NI': 6.38,
                  'NE': 5.6,
                  'NG': 206.66,
                  'NO': 413.51,
                  'OM': 53.78,
                  'PK': 174.79,
                  'PA': 27.2,
                  'PG': 8.81,
                  'PY': 17.17,
                  'PE': 153.55,
                  'PH': 189.06,
                  'PL': 438.88,
                  'PT': 223.7,
                  'QA': 126.52,
                  'RO': 158.39,
                  'RU': 1476.91,
                  'RW': 5.69,
                  'WS': 0.55,
                  'ST': 0.19,
                  'SA': 434.44,
                  'SN': 12.66,
                  'RS': 38.92,
                  'SC': 0.92,
                  'SL': 1.9,
                  'SG': 217.38,
                  'SK': 86.26,
                  'SI': 46.44,
                  'SB': 0.67,
                  'ZA': 354.41,
                  'ES': 1374.78,
                  'LK': 48.24,
                  'KN': 0.56,
                  'LC': 1,
                  'VC': 0.58,
                  'SD': 65.93,
                  'SR': 3.3,
                  'SZ': 3.17,
                  'SE': 444.59,
                  'CH': 522.44,
                  'SY': 59.63,
                  'TW': 426.98,
                  'TJ': 5.58,
                  'TZ': 22.43,
                  'TH': 312.61,
                  'TL': 0.62,
                  'TG': 3.07,
                  'TO': 0.3,
                  'TT': 21.2,
                  'TN': 43.86,
                  'TR': 729.05,
                  'TM': 0,
                  'UG': 17.12,
                  'UA': 136.56,
                  'AE': 239.65,
                  'GB': 2258.57,
                  'US': 14624.18,
                  'UY': 40.71,
                  'UZ': 37.72,
                  'VU': 0.72,
                  'VE': 285.21,
                  'VN': 101.99,
                  'YE': 30.02,
                  'ZM': 15.69,
                  'ZW': 5.57
                }
              }]
            },
            markerStyle: {
              initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
              }
            },
            markers: [
              {latLng: [39.20, -86.10], name: 'Bloomington'},
              {latLng: [32.16, -96.73], name: 'Dallas'},
              {latLng: [45.50, -122.63], name: 'Portland'},
              {latLng: [18.58, 73.83], name: 'Pune'},
              {latLng: [39.93, 112.46], name: 'Beijing'},
              {latLng: [48.85, 2.46], name: 'Paris'}
            ]
          })
        })
        window.jQuery.getScript(mapURL2, () => {
          window.jQuery('#us-map-markers').vectorMap({
            maxLevel: 1,
            map: 'us_lcc',
            backgroundColor: '#818181',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#f4f3f0',
            hoverColor: '#c9dfaf',
            hoverOpacity: null,
            markerStyle: {
              initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
              }
            },
            mapUrlByCode: function(code, multiMap) {
              return 'http://jvectormap.com/js/us-counties/jquery-jvectormap-data-' +
              code.toLowerCase() + '-' +
              multiMap.defaultProjection + '-en.js'
            },
            markers: [
              {latLng: [39.20, -86.10], name: 'Bloomington'},
              {latLng: [32.16, -96.73], name: 'Dallas'},
              {latLng: [45.50, -122.63], name: 'Portland'}
            ]
          })
        })
        window.jQuery.getScript(mapURL3, () => {
          window.jQuery('#in-map-markers').vectorMap({
            maxLevel: 1,
            map: 'us-in_lcc_en',
            backgroundColor: '#818181',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#f4f3f0',
            hoverColor: '#c9dfaf',
            hoverOpacity: null,
            markerStyle: {
              initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
              }
            },
            markers: [
              {latLng: [39.20, -86.10], name: 'Columbus'},
              {latLng: [39.16, -86.53], name: 'Bloomington'},
              {latLng: [39.80, -86.15], name: 'Indianapolis'}
            ]
          })
        })
      })
    })
  }
}
</script>

<style>
.fake {
  color: 'red';
}

#world-map-markers svg {
  height: 400px;
}
#us-map-markers svg {
  height: 355px;
}
#in-map-markers svg {
  height: 355px;
}
.row.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.row.no-gutters > [class^="col-"],
.row.no-gutters > [class*=" col-"] {
  padding-right: 0;
  padding-left: 0;
}
</style>
