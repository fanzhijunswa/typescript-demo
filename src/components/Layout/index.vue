<template>
  <div id="Layout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name:"Layout",
  components: {}
})

export default class Layout extends Vue{}
</script>

<style lang="sass" scope>
#Layout
</style>