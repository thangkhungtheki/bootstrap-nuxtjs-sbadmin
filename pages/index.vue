<template>
  <div>
    <TopNavBar />
    <div
      :class="{ 'vertical-nav': true, 'bg-white': true, active: menuclosed }"
      id="sidebar"
    >
      <div class="py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <div class="media-body">
            <h4 class="m-0">Jason Doe</h4>
            <p class="font-weight-light text-muted mb-0">Web developer</p>
          </div>
        </div>
      </div>

      <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Main
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic bg-light">
            <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/ssss" class="nav-link text-dark">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            About
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark">
            <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
            Services
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
            Gallery
          </a>
        </li>
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        Charts
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
            Area charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
            Bar charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
            Pie charts
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
            Line charts
          </a>
        </li>
      </ul>
    </div>
    <!-- End vertical navbar -->

    <!-- Page content holder -->
    <div
      :class="{ 'page-content': true, 'p-5': true, active: menuclosed }"
      id="content"
    >
      <!-- Toggle button -->
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <button
            @click="togglemenu"
            id="sidebarCollapse"
            type="button"
            class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          >
            <i class="fa fa-bars mr-2"></i
            ><small class="text-uppercase font-weight-bold">Toggle</small>
          </button>

          <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <b-card header-tag="header" footer-tag="footer" title="Title">
            <b-card-text>Header and footers using props.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuclosed: false,

      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      fields: [
        {
          key: "first_name",
          label: "Person Name",
          sortable: true,
        },
        "last_name",
        "age",
      ],
    };
  },
  methods: {
    togglemenu() {
      this.menuclosed = this.menuclosed ? false : true;
    },
  },
};
</script>

<style>
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 57px;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 15rem);
  margin-left: 15rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

.navbar .dropdown-menu {
  background-color: #ffffff !important;
  border-radius: 0px;
  margin-top: 7px;
}

.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}

.bg-primary {
  background-color: white !important;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
}

/* 
.navbar .dropdown-item {
  background-color: #bada55;
}
*/
</style>
