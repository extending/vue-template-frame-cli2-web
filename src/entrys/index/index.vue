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
        this.$store.commit({
          type: 'user',
          user: false
        });
        this.$message.error(response.data.msg);
        return Promise.reject(error);
      }
    }, error => {
      this.$message.error(error.message);
      return Promise.reject(error);
    })
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
</style>
