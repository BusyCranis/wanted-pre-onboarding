<template>
  <v-app>
    <v-app-bar
      app
    >
    <router-link :to="{name: 'Home'}"> 홈으로 </router-link>
    

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
