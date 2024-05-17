<template>
  <div>
    <div>
      <b-navbar type="dark" variant="primary" fixed="top" class="navbarcolor">
        <b-navbar-brand href="#">
          <button
            @click="togglemenu"
            id="sidebarCollapse"
            type="button"
            class="btn btn-light bg-white"
          >
            <i class="fa fa-bars"></i>
          </button>
          <img src="/iconcuoi.jpg" alt="Kitten" class="iconheader"/>
          ThangKhungTheKi
          <!--<button
            @click="togglemenu"
            id="sidebarCollapse"
            type="button"
            class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          >
            <i class="fa fa-bars mr-2"></i
            ><small class="text-uppercase font-weight-bold">Toggle</small>
          </button>-->
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto " >
          <!-- <b-nav-item href="#">Home</b-nav-item> -->

          <!-- Navbar dropdowns -->
          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    togglemenu() {
      //this.menuclosed = this.menuclosed ? false : true;
      this.$store.commit("menuToggle");
    },
  },
};
</script>

<style >
.iconheader{
  width: 30px;
  height: 30px;
}

.navbarcolor{
  background-color: blue;
}
</style>