<template>
  <b-table>
    <thead>
      <tr>
        <th v-for="(items, index) in daysOrder" :key="index">

          {{ items }}

        </th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
          <td v-for="(day, index) in $data._thang.value" :key="index">
            {{ day }}
          </td>
        </tr> -->
    </tbody>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      thang: 
         [
          { '5': 1, '6': 2, '7': 3, cn: 4 },
          { '2': 5, '3': 6, '4': 7, '5': 8, '6': 9, '7': 10, cn: 11 },
          { '2': 12, '3': 13, '4': 14, '5': 15, '6': 16, '7': 17, cn: 18 },
          { '2': 19, '3': 20, '4': 21, '5': 22, '6': 23, '7': 24, cn: 25 },
          { '2': 26, '3': 27, '4': 28, '5': 29, '6': 30, '7': 31 }
        ],
      daysOrder: ['2', '3', '4', '5', '6', '7', 'cn','2', '3', '4', '5', '6', '7', 'cn','2', '3', '4', '5', '6', '7', 'cn','2', '3', '4', '5', '6', '7', 'cn'],
      days: []
    }
  },
  computed: {
    // flatDays() {
    //   return this.flattenArrayUsingFor(this._thang.weeks);
    // }
  },
  methods: {
    flattenArrayUsingFor(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        const week = arr[i];
        for (const day in week) {
          if (week.hasOwnProperty(day)) {
            result.push(week[day]);
          }
        }
      }
      return result;
    },
  }
}
</script>

<style scoped>
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
</style>