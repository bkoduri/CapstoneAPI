<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-bullseye"></i>
        <span class="page">Applications</span>
        <!-- <small class="label pull-right bg-green">AJAX</small> -->
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Servers</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Enrollment</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Bookmarks</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#" target="popup" onclick="window.open('https://console.dialogflow.com/api-client/demo/embedded/08fe23b1-af87-400c-9349-737982b3f54e','name','width=500,height=600')">
            <i class="fa fa-money"></i> Get Reports
          </a>
        </li>
        <li>
          <a href="#" target="popup" onclick="window.open('https://console.dialogflow.com/api-client/demo/embedded/a643b36c-349c-4aad-a805-39911d3d6166','name','width=500,height=600')">
            <i class="fa fa-comment-o"></i> HR Buddy
          </a>
        </li>
        <li>
          <a href="https://finance.yahoo.com/quote/CMI/" target="_blank">
            <i class="fa fa-money"></i> CMI Stock
          </a>
        </li>
        <li>
          <a href="https://www.cummins.com/news" target="_blank">
            <i class="fa fa-newspaper-o"></i> Newsroom
          </a>
        </li>
      </ul>
    </li>

    <li class="header">OPERATIONS</li>
    <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Real-time Data</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Locations</span>
      </a>
    </router-link>


    <li class="header">PAGES</li>
    <router-link tag="li" class="pageLink" to="/login">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/404">
      <a>
        <i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
