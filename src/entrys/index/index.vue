<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
    this.axios.interceptors.request.use(config => {
      config.data = typeof config.data == 'string' ? config.data : qs.stringify(config.data);
      return config;
    }, error => {
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use(response => {
      if (response.data.status == 0) {
        return response;
      }else if (response.data.status == -2) {
        this.$store.commit('user', false);
        return Promise.reject(error);
      }
    }, error => {
      return Promise.reject(error);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
