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
      let url = "/api/getSessionFail";
      let params = {name: 89, year: 65};
      this.axios.get(url, params).then(res => {

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
  .try {
    color: blue;
    cursor: pointer;
  }
}
</style>
