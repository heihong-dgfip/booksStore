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

const books: any = ref(); 

onMounted(() => {
 
  fetch('http://localhost:3000/books')
  .then(response => response.json())
  .then(data => books.value = data)


});

</script>
