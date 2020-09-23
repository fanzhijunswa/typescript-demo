<template>
  <div id="Form">
    <div class="label">当前的值为: {{ buttonValue }}</div>
    <button @click="addButtonValue">+1</button>
    <div>这个是子组件传递过来的值: {{ sonValue }}</div>
    <Son
      @do-change-value="changeValue"
      :testName="testName"
      :testAge="testAge"
      :testObj="testObj"
    />
  </div>
</template>

<script lang="ts">
import { TestObjRule } from "./interface";
import { Component, Vue } from "vue-property-decorator";
import Son from "./Son.vue";

@Component({
  name: "Form",
  components: {
    Son
  }
})
export default class Form extends Vue {
  private buttonValue = 0;
  private sonValue: string = "";
  private testName: string = "樊志军";
  private testAge: number = 12;
  private testObj: TestObjRule = {
    song: "billie jean",
    dance: "dangerous"
  };

  addButtonValue(): void {
    this.buttonValue += 1;
  }
  changeValue(val: string): void {
    this.sonValue = val;
  }
}
</script>

<style lang="sass" scope>
#Form
</style>
