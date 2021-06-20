<template>
  <div>
    <TopNavBar />
    <div
      :class="{
        'vertical-nav': true,
        'bg-white': true,
        active: menuclosed,
      }"
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
      :class="{
        'page-content': true,
        'p-5': true,
        active: menuclosed,
        'mt-4': true,
      }"
      id="content"
    >
      <CountBar />

      <div class="row pt-4" id="tbls">
        <div class="col-lg-6 col-md-12 col-sm-12 mb-2">
          <b-card
            header-tag="header"
            footer-tag="footer"
            header="Table"
            body-class="p-0 card-fixed"
          >
            <b-table hover :items="items" :fields="fields"></b-table>
          </b-card>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 mb-2">
          <b-card
            header-tag="header"
            footer-tag="footer"
            body-class="p-2 card-fixed"
            header="Book"
          >
            <!--dummy-->
            <b-card>
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card>

            <h5 class="mt-1"></h5>
            <b-card>
              <b-skeleton animation="fade" width="85%"></b-skeleton>
              <b-skeleton animation="fade" width="55%"></b-skeleton>
              <b-skeleton animation="fade" width="70%"></b-skeleton>
            </b-card>
            <!--dummy-->
            <div class="float-right m-3">
              <b-button
                href="#"
                variant="primary"
                class="btn btn-light bg-white rounded-pill shadow-sm"
                ><i class="fa fa-plus"></i
              ></b-button>
            </div>
          </b-card>
        </div>
      </div>

      <!--dummy-->
      <div class="row pt-4" id="tbls">
        <div class="col-lg-6 col-md-12 col-sm-12 mb-2">
          <b-card
            header-tag="header"
            footer-tag="footer"
            header="BAR CHART"
            body-class="p-0"
          >
            <Barchart
              :data="barChartData"
              :options="barChartOptions"
              :height="300"
            />
          </b-card>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 mb-2">
          <b-card
            header-tag="header"
            footer-tag="footer"
            body-class="p-2"
            header="PIE CHART"
          >
            <Doughnutchart
              :data="pieChart.chartData"
              :options="pieChart.chartOptions"
              :height="300"
            />
          </b-card>
        </div>
      </div>
      <!--dummy-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //menuclosed: false,

      pieChart: {
        chartOptions: {
          hoverBorderWidth: 20,
        },
        chartData: {
          hoverBackgroundColor: "red",
          hoverBorderWidth: 10,
          labels: ["Green", "Red", "Blue"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
              data: [1, 10, 5],
            },
          ],
        },
      },

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

      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.8)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        /*title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },*/
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
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

.navbar .dropdown-menu {
  background-color: #ffffff !important;
  border-radius: 0px;
  margin-top: 7px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #6d6b6b !important;
  font-family: "Open Sans";
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

.navbar-brand {
  color: black;
  color: #6d6b6b !important;
  font-family: "Open Sans";
}
</style>
