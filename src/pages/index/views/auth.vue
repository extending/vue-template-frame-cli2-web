<template lang='pug'>
  m-check(v-if="$store.state.user == null")
  m-workbench(v-else-if="$store.state.user")
  m-login(v-else)
</template>

<script>
import MCheck from './auth/m-check'
import MWorkbench from './auth/m-workbench'
import MLogin from './auth/m-login'

export default {
  name: 'auth',
  data () {
    return {
    };
  },

  components: {
    MCheck,
    MWorkbench,
    MLogin,
  },

  computed: {},

  mounted() {

  },

  methods: {}
}

</script>
<style lang="scss" scoped>
</style>
