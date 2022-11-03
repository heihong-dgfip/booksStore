<template>
  <ul>
  <li v-for="item in books" >
    {{ item.title }}
    {{item.price}}€
  </li>
</ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from "axios";

const books: any = ref(); 

onMounted(() => {
 
    axios.get('data.json')
  .then(response => console.log(response))
  


});

</script>
