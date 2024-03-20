<template>
  <div>
    <TopNavBar />
    <div :class="{
          'vertical-nav': true,
          'bg-white': false,
          active: menuclosed,
          'bg-color': true
        }" id="sidebar">
      <div class="py-4 px-3 mb-4">
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
      <ul class="nav flex-column bg-white mb-0 ">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic bg-light">
            <i class="fa fa-th-large mr-3 text-primary fa-fw "></i>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic bg-light">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            About
          </a>
        </li>
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        Charts
      </p>
    </div>
    <div :class="{
          'page-content': true,
          'p-5': true,
          active: menuclosed,
          'mt-4': true,
        }" id="content">
      <b-container>     
          <nuxt />
      </b-container>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from "vuex";
  export default {
    data() {
      return {
        //menuclosed: false,

      };
    },
    computed: mapState(["menuclosed"]),
    methods: {
      togglemenu() {
        //this.menuclosed = this.menuclosed ? false : true;
        this.$store.commit("toggle");
      },
    },
  };
</script>

<style>
  .card-fixed {
    min-height: 300px;
  }

  .vertical-nav {
    min-width: 17rem;
    width: 17rem;
    height: 100vh;
    position: fixed;
    top: 55px;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;

  }

  .page-content {
    width: calc(100% - 15rem);
    
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
      position: absolute;
      z-index: 1000;
      left: -17rem;
    }

    #sidebar.active {
      margin-left: 0;
      position: fixed;
      z-index: 1000;
      left: 0rem;
      height: 100vh;
    }

    #content {
      width: 100%;
      margin: 0;
      padding-left: 8px !important;
      padding-right: 8px !important;
    }

    #content.active {
      margin: 0px;
      width: 100%;
    }
  }

  /* màu backgroud của thanh xổ user góc phải trên */
  .navbar .dropdown-menu {
    background-color: #f7f4f6 !important;
    border-radius: 0px;
    margin-top: 7px;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #5a5858 !important;
    font-family: "Open Sans";
  }

  .bg-primary {
    background-color: rgb(248, 244, 244) !important;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  }

  /* 
  .navbar .dropdown-item {
    background-color: #bada55;
  }
  */

  .navbar-brand {
    color: black;
    color: #6d6b6b !important;
    font-family: "Open Sans";
  }

  .bg-color {
    background-color: aqua;
  }
</style>