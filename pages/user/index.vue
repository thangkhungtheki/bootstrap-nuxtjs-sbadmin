'
<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
  <div>
    <b-container class='containerTable'>
      
        <b-table-lite hover small caption-top responsive :items="fataa" :fields="fields" />

    
      
    
    </b-container>
  </div>
</template>

<script>
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
    layout: "areaAdmin",
    data() {
      return {


        fields: [{
            key: "id",
            sortable: true,
          },
          {
            key: "name",
            // label: "Last name",
            sortable: true,
          },
          {
            key: "email",
            // label: "Age",
            sortable: true,
          },
          {
            key: "phan4",
            sortable: true,
          },
          {
            key: "phan5",
            sortable: true,
          },
          {
            key: "phan6",
            sortable: true,
          },
        ],
      }
    },
  }
</script>

<style>
.containerTable {
  margin: 0%;
}
</style>