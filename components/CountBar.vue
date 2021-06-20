<template>
  <div class="row pb-2">
    <div class="col-3">
      <b-card>
        <div class="inn">
          <i class="mdi mdi-clock-time-eleven icon"></i>
          <div class="text"><h5>NEW</h5></div>
          <h2 class="count">200</h2>
        </div>
      </b-card>
    </div>
    <div class="col-3">
      <b-card>
        <div class="inn success text-dark">
          <i class="mdi mdi-briefcase-clock icon"></i>
          <div class="text"><h5>ON PROCESS</h5></div>
          <h2 class="count">200</h2>
        </div>
      </b-card>
    </div>
    <div class="col-3">
      <b-card>
        <div class="inn">
          <i class="mdi mdi-cart icon"></i>
          <div class="text"><h5>CLOSED</h5></div>
          <h2 class="count">200</h2>
        </div>
      </b-card>
    </div>
    <div class="col-3">
      <b-card>
        <div class="inn">
          <i class="mdi mdi-cart icon"></i>
          <div class="text"><h5>TOTAL</h5></div>
          <h2 class="count">2000</h2>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.icon {
  font-size: 44px;
  color: rgba(8, 135, 240, 0.548);
  position: absolute;
  bottom: 0px;
  left: 5px;
}
.count {
  position: absolute;
  bottom: 5px;
  right: 40px;
}
.text {
  position: absolute;
  top: 5px;
  left: 5px;
}
.inn {
  position: relative;
  width: 100%;
  height: 90px;
}

.inn:hover {
  background-color: #4b9deb6b;
  padding: 5px;
}

.success {
  background-color: #a8e6cf;
}

.card-body {
  padding: 0px;
}
</style>