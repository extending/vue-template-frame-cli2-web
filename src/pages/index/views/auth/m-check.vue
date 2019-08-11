<template lang='pug'>
  .check
    template(v-if="loadFail")
      p 加载失败：{{errorMsg}}
      p 请<span class="try" @click="tryAgain">重试！</span>
</template>

<script>
export default {
  name: 'm-check',
  data () {
    return {
      loadFail: false,
      errorMsg: '',
    };
  },

  components: {},

  computed: {},

  methods: {
    check() {
      let urlSessionFail = "/api/getSessionFail";
      let urlSessionSuccess = "/api/getSessionSuccess";
      this.axios.get(urlSessionFail).then(res => {
        this.$store.commit({
          type: 'user',
          user: res.data.userName
        });
      }).catch(error => {
        this.errorMsg = error.message;
        this.loadFail = true;
        //no op
      })
    },
    tryAgain() {
      this.check();
    }
  },

  mounted() {
    this.check();
  },

}

</script>
<style lang='scss' scoped>
.check {
  text-align: center;
  padding: 30px 0;
  .try {
    color: blue;
    cursor: pointer;
  }
}
</style>
