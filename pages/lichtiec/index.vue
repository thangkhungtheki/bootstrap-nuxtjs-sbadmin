<template>
  <div>
  <client-only>
    <b-container fluid>
      
    <table>
      <tr>
        <td></td>
        <td class="text-center" :colspan="xulycolspan()" >
         <h3>Tháng: {{ thang }} - Năm: {{ nam }} </h3>
        </td>
      </tr>
      <tr class="mauhead"> 
        <td><b>Thứ</b></td>
        <td v-for="items, index in thangngay" :key="index" :class="getDayClass(items.thu)" >
          {{ items.thu}}
        </td>
      </tr>
      <tr>
        <td class="mauam">DL</td>
        <td v-for="items, index in thangngay" :key="index">
          {{ items.ngay}}
        </td>
      </tr>
      <tr>  
        <td class="mauduong">AL</td>
        <td v-for="items, index in thangngay" :key="index">
          <span v-if="items.am == 1 || index == 0 ">{{ items.am }}/{{ items.amthang }} </span>
          <span v-else> {{ items.am }} </span>
        </td>
      </tr>
      <tr>
        <td class="mausang"><b>Sảnh</b></td>
        <td class="text-center mausang" :colspan="xulycolspan()" >
         <strong>Sáng</strong>
        </td>
      </tr>
      <tr>
        <td>
          SAPPHIRE
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='sp' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td >
         RUBY 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
           <div class='fixcell' v-if="items.sanh=='rb1' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td >
         RUBY 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
         <div class='fixcell' v-if="items.sanh=='rb2' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='dp1' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='dp2' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
           PLATINUM
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='pla' && items.soban && items.buoi == 'sang'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <!-- Chiều -->
      
      <tr>
        <td class="mautoi"><b>Sảnh</b></td>
        <td class="text-center mautoi" :colspan="xulycolspan()" >
         <strong>Chiều</strong>
        </td>
      </tr>
      <tr>
        <td>
          SAPPHIRE
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='sp' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td >
         RUBY 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='rb1' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td >
         RUBY 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='rb2' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
         <div class='fixcell' v-if="items.sanh=='dp1' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='dp2' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
           PLATINUM
        </td>
        <td v-for="items, index in thangngay" :key="index">
          <div class='fixcell' v-if="items.sanh=='pla' && items.soban && items.buoi == 'chieu'">
            <b-button v-b-modal.modal-tall class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)"> {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <tr>
        <td class='blue'>
           OUTSIDE
        </td>
        <!-- <span v-for="items, index in thangngay" :key="index"> 
          <td :class='hangletiec(items.loaitiec)' v-if="items.sanh=='out'">
              {{ items.soban }}
          </td>
        </span> -->
        <td v-for="items, index in thangngay" :key="index">
          <!-- <b-button v-b-modal.modal-tall variant="danger" :class='hangletiec(items)' v-if="items.sanh=='out'" >{{ items.soban }}</b-button> -->
          <div class='fixcell' v-if="items.sanh=='out' && items.soban">
            <b-button v-b-modal.modal-tall  class='btnfixfullcell' squared :variant="hangletiec(items)" @click="handleClick(items)" > {{ items.soban }} </b-button>
          </div>
        </td>
      </tr>
      <!-- <tr> 
        <td class="mautoi"><b>Thứ</b></td>
        <td v-for="items, index in thangngay" :key="index" :class="getDayClass(items.thu)">
          {{ items.thu}}
        </td>
      </tr>
      <tr>
        <td>DL</td>
        <td v-for="items, index in thangngay" :key="index">
          {{ items.ngay}}
        </td>
      </tr>
      <tr>
        <td>AL</td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr> -->
    </table>
    </b-container>
  </client-only>
  <b-modal id="modal-tall" title="Overflowing Content">
    <p class="my-4">
      {{ itemthongtin }}
    </p>
  </b-modal>
  </div>
</template>

<script>

export default {
  layout: 'areaAdmin',
  data() {
    return {
      thangngay: [],
      fields: [] ,
      thang: null,
      nam: null  ,
      itemthongtin: null
    }
  },
  // watch: {
  //   thang: {
  //     handlergetAPI() {
  //       this.fetchLunarCalendar();
  //     },
  //     deep: true
  //   },
  //   nam: {
  //     handlergetAPI() {
  //       this.fetchLunarCalendar();
  //     },
  //     deep: true
  //   }
  // },
  async mounted () {
    
  },
  async asyncData({query, $axios}) {
    let thang = query.thang
    let nam = query.nam
    let promisehopdong =  $axios.$get(process.env.BACKEND_URL + "/hopdong/lichthang?thang=" + thang + '&nam='+ nam)
    let resultPromise = await Promise.all([
      promisehopdong
    ])
    return({
      thangngay: resultPromise[0],
      thang: thang,
      nam: nam,
      
    })
  },
  methods: {
    async fetchLunarCalendar(){
      let result = await this.$axios.$get(process.env.BACKEND_URL + "/hopdong/lichthang?thang=" + this.thang + '&nam='+ this.nam)
      return({
        thangngay: result
      })
    },
    getDayClass(items) {
      return (items === 'T7' || items === 'CN') ? 'red' : '';
    },
    xulycolspan(){
      // console.log(this.tongsongay)
      return this.thangngay.length 
    },
    hangletiec(item){
      if(item.loaitiec == 'cuoi' && item.soban){
        // console.log(item)
        return "danger"
      }else if(item.loaitiec == 'out' && item.soban){
        return "primary"
      }
    },
    handleClick(items){
      this.itemthongtin = items
    }

  }
}
</script>

<style scoped>
.btnfixfullcell{
  font-weight: inherit;
  font-size: inherit;
}
.fixcell {
  /* background-color: crimson; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: ivory;
}
body {
  font-size: x-small;
}
.red {
 
  color: rgb(235, 10, 10);
}
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  position: relative;
}

th {
  background-color: #f2f2f2;
}
.mausang{
  background-color: #faf5df;
}
.mautoi{
  background-color: #cef4f798;
}
.mauhead{
  background-color: #7a7cf098;
}
.mauduong{
  background-color: #f07aab4d;
}
.mauam{
  background-color: #7ae2f056;
}
.blue{
  background-color: rgba(10, 10, 240, 0.349);
}
</style>