<template>
  <!-- <b-table :items="items" :fields="fields"></b-table> -->
  <div>
    <b-card header-tag="header" footer-tag="footer" header="Table"  footer="End Table" >
      <b-table hover :items="items" :fields="fields"></b-table>
    </b-card>
  </div>
</template>

<script>
  export default {

    layout: "areaAdmin",
    data() {
      return {
        items: [{
            age: 40,
            first_name: "Dickerson",
            last_name: "Macdonald"
          },
          {
            age: 21,
            first_name: "Larsen",
            last_name: "Shaw"
          },
          {
            age: 89,
            first_name: "Geneva",
            last_name: "Wilson"
          },
          {
            age: 38,
            first_name: "Jami",
            last_name: "Carney"
          },
        ],

        fields: [{
            key: "first_name",
            label: "Person Name",
            sortable: true,
          },
          {
            key: "last_name",
            label: "Last name",
            sortable: true,
          },
          {
            key: "age",
            label: "Age",
            sortable: true,
          },

        ],
      }
    },
  }
</script>

<style>

</style>