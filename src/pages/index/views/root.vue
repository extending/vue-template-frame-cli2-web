<template lang="pug">
.root
  .links
    router-link(:to="{name: 'page1'}") page1
    router-link(:to="{name: 'page2'}") page2
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
