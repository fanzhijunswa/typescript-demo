<template>
  <div id="App">
    <Form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "./views/Form.vue";

@Component({
  name: "App",
  components: {
    Form
  }
})
export default class App extends Vue {}
</script>

<style lang="sass" scope>
#App
</style>
