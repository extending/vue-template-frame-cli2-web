<template lang="pug">
.root
  .links
    router-link(:to="{name: 'page3'}") page3
    router-link(:to="{name: 'page4'}") page4
  router-view.cont
</template>

<script>
export default {
    name: 'root',
    data() {
        return {}
    }
}
</script>

<style>

</style>
