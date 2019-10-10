<template lang="pug">
.cont
  h2 page2
  json-excel.btn.btn-default(:data="json_data")
    button Download Excel
</template>

<script>
import JsonExcel from 'vue-json-excel'

export default {
  name: 'page2',
  components: {
    JsonExcel
  },
  data () {
    return {
      json_fields: {
        'Complete name': 'name',
        City: 'city',
        Telephone: 'phone.mobile'
      },
      json_data: [
        {
          name: 'Tony Peña',
          city: 'New York',
          country: 'United States',
          birthdate: '1978-03-15'
        },
        {
          name: 'Thessaloniki',
          city: 'Athens',
          country: 'Greece',
          birthdate: '1987-11-23'
        }
      ],
      json_meta: [
        [
          {
            key: 'charset',
            value: 'utf-8'
          }
        ]
      ]
    }
  }
}
</script>
