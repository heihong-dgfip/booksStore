<template>
  <ul>
    <li v-for="item in books" >
        <v-card
    class="mx-auto margin"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
            {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle>  {{ item.price }}€</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn  @click="store.addElement(item)"
        outlined
        rounded
        text
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
  
   {{store}}
  </li>
</ul>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from "axios";
import { store } from './store'

const books: any = ref(); 

onMounted(() => {
 
   axios.get('data.json')
  .then(response => books.value= response.data.books)


});

</script>

<style>
    .margin{
        margin:20px;
    }
</style>