<template>
         <List :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery"
            class='col-sm-4 col-sm-offset-4'><List> 
</template>

<script>
import List from './List.vue'

export default {
  data: function() {
       return {
           searchQuery: '',
           gridColumns: ['name', 'power','addr'],
           gridData: [
               { name: 'Chuck Norris', power: Infinity, addr: 'abc street', image:"http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg" },
               { name: 'Bruce Lee', power: 9000, addr: 'loe tree', image: "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg" },
               { name: 'Jackie Chan', power: 7000, addr: 'colorado',image: "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg" },
               { name: 'Jet Li', power: 8000, addr:'test',image: "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png" }
            ]
        }
   },
  components:{
       List
    }
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>