<template>
  <ul class="sidebar-menu">
    <li class="header">ER Care</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">ER Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Patient Data</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Patient Enrollment</span>
      </a>
    </router-link>

    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Extra Features</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li style="color:white;">Employee Tools</li>
        <router-link tag="li" class="pageLink" to="/tasks">
          <a>
            <i class="fa fa-tasks"></i>
            <span class="page">Tasks</span>
          </a>
        </router-link>
        <router-link tag="li" class="pageLink" to="/repos">
          <a>
            <i class="fa fa-bullseye"></i>
            <span class="page">Applications</span>
          </a>
        </router-link>
        <router-link tag="li" class="pageLink" to="/server">
          <a>
            <i class="fa fa-hdd-o"></i>
            <span class="page">Servers</span>
          </a>
        </router-link>
        <router-link tag="li" class="pageLink" to="/access">
          <a>
            <i class="fa fa-book"></i>
            <span class="page">Locations</span>
          </a>
        </router-link>

        <li style="color:white;">PAGES</li>
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
    </li>
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
