<template>
  <div>
  <client-only>
    <b-container fluid>
      <div><h2>Tháng: {{ thang }} - Năm: {{ nam }}</h2></div>
    <table>
      
      <tr class="mauhead"> 
        <td><b>Thứ</b></td>
        <td v-for="items, index in thangngay" :key="index" :class="getDayClass(items.thu)" >
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
          
        </td>
      </tr>
      <tr>
        <td >
         RUBY 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td >
         RUBY 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
           PLATINUM
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
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
          
        </td>
      </tr>
      <tr>
        <td >
         RUBY 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td >
         RUBY 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 1
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
          DIAMOND 2
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
           PLATINUM
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
        </td>
      </tr>
      <tr>
        <td>
           OUTSIDE
        </td>
        <td v-for="items, index in thangngay" :key="index">
          
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
      
    }
  },
  watch: {
    thang: {
      handlergetAPI() {
        this.fetchLunarCalendar();
      },
      deep: true
    },
    nam: {
      handlergetAPI() {
        this.fetchLunarCalendar();
      },
      deep: true
    }
  },
  async mounted () {
    
  },
  async asyncData({query, $axios}) {
    let thang = query.thang
    let nam = query.nam
    let resuls =  await $axios.$get(process.env.BACKEND_URL + "/hopdong/lichthang?thang=" + thang + '&nam='+ nam)
    return({
      thangngay: resuls,
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
    }
  }
}
</script>

<style scoped>
body {
  font-size: .8rem; /* Thay đổi kích thước font theo ý muốn */
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
</style>