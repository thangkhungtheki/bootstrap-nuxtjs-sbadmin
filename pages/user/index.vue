'
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
 

  <div>
    <h2>Counter: {{ counter }}</h2>
    <hr/>
    <b-button variant="success" @click="handletang">TĂNG</b-button>
    <b-button variant="danger" @click="handlegiam">GIẢM</b-button>
    <hr/>
    <b-card header-tag="header" footer-tag="footer" header="Table" body-class="p-0 card-fixed">
      <b-table hover :fields="fields"></b-table>
    </b-card>
  </div>




</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {

  async asyncData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/users')
      const fata = await response.json()
      return {
        fataa: fata ? fata : []
      }
    } catch (error) {
      return {
        fataa: []
      }
    }

  },
  computed: {
    ...mapState({
      counter: state => state.counter,
    })
  },
  methods: {
    ...mapActions({
      add: 'increment',
      except: 'decrement'
    }),
    handletang(){
      this.add()
    },
    handlegiam(){
      this.except()
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
