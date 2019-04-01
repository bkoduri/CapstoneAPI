import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '15000+',
  text: 'Global Customers'
}, {
  header: '500',
  text: 'Distributor Facilities'
}, {
  header: '7,500',
  text: 'Dealer Locations'
}, {
  header: '58,600',
  text: 'Employees'
}]

export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Annual review',
  time: moment().endOf('week').fromNow(),
  body: 'Annual review session will be held at the conference room on this weekend. Please be seated at 2 pm.',
  buttons: [{
    type: 'primary',
    message: 'Add to Calendar',
    href: 'http://ec2-34-211-228-116.us-west-2.compute.amazonaws.com',
    target: '_blank'
  }]
},
{
  icon: 'fa-envelope',
  color: 'green',
  title: 'Send Minutes of Meeting',
  time: moment().endOf('day').fromNow(),
  body: 'Please draft the Minutes of Meeting of weekly status meeting and send it to your supervisor. Clearly mention actions pending and whom they are assigned to.',
  buttons: [{
    type: 'primary',
    message: 'Submit here',
    href: 'http://ec2-34-211-228-116.us-west-2.compute.amazonaws.com',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Your IT support ticket has been resolved',
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-cogs',
  color: 'red',
  title: 'Windows 10 upgrade for all the systems will be released by the end of the month. Please back up your data.',
  time: moment('20140620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-camera',
  color: 'purple',
  title: 'Career Paths for Cummins Service Technicans',
  time: moment('20130620', 'YYYYMMDD').fromNow(),

  body: '<div class="embed-responsive embed-responsive-16by9"><iframe width="560" height="315" src="https://www.youtube.com/embed/TXMIYS6MLVw" frameborder="0" allowfullscreen></iframe></div>'
}]
