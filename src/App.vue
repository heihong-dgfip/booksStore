<template>
  <v-app>
    <v-main>

      <RouterLink to="/">books</RouterLink>
        <RouterLink to="/cart">cart</RouterLink>
    
        <div class="content">
            <RouterView/>
        </div>
     
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

   
</script>

<style>
    .content{
        margin-top: '25px';
        border: 1px solid black;
    }

</style>