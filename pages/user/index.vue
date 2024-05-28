
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
 

  <div>
    <h2>Counter: {{ counter }}</h2>
    <CountBar/>
    <hr/>
    <b-button variant="success" @click="handletang">TĂNG</b-button>
    <b-button variant="danger" @click="handlegiam">GIẢM</b-button>
    <b-button variant="outline-primary" @click="getData">CHECK LOG</b-button>
    <hr/>
    <!-- <b-card header-tag="header" footer-tag="footer" header="Bảng dữ liệu" body-class="p-0 card-fixed">
      
    </b-card> -->
    <b-table-lite hover :fields="fields"></b-table-lite>
  </div>




</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  // middleware: ["checkcontext"],

   async asyncData({ $axios }) {
    try {
      const response =  await $axios.$get('http://127.0.0.1:4000/')
      .then(data=>{
        console.log(data)
      })
      
    } catch (error) {
      
    }

  },

  // asyncData({ $axios }) {
  //   return $axios.$get('http://127.0.0.1:4000/')
  //     .then(data => {
  //       console.log(data);
  //       return {
  //         // return any data you want to use in your component
  //         responseData: data
  //       };
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       return {
  //         // handle error, return some default or empty data if needed
  //         responseData: null
  //       };
  //     });
  // },
   mounted() {
    
  },
  computed: {
    ...mapState({
      counter: state => state.counter,
    })
  },
  methods: {
    ...mapActions({
      add: 'increment',
      except: 'decrement',
      
    }),
    handletang(){
      this.add()
    },
    handlegiam(){
      this.except()
    },
     getData(){
      try {
        const data = this.$axios.$get('http://127.0.0.1:4000/')
        .then(data=>{
          console.log(data)
        })
        
      } catch (error) {
        console.error(error)
      }
    }
  },

  layout: "areaAdmin",
  data() {
    return {
      items: [

      ],
      fields: [
        {
          key: "first_name",
          label: "Person Name",
          sortable: true,
        },
        {
          key: "last_name",
          label: "last_name",
          sortable: true,
        },
        {
          key: "age",
          label: "age",
          sortable: true,
        },
        {
          key: "BON",
          label: "bon",
          sortable: true,
        },
        {
          key: "NAM",
          label: "nam",
          sortable: true,
        },
        
      ],
    }
  },
}
</script>
