<template>
  <div id="Son">
    <input type="text" v-model="iptValue" />
    <button @click="confirmation">发布</button>
    <h2>父组件给的名字： {{ testName }}</h2>
    <h2>父组件给的年龄： {{ testAge }}</h2>
    <h2>父组件给的目标： {{ testObj }}</h2>
    <h2>父组件名字的长度: {{ addoption }}</h2>
    <h1>测试 vuex {{ userInfo }}</h1>
    <h1>测试 vuex {{ userName }}</h1>
    <button @click="changeUserName(0)">改变</button>
    <button @click="changeUserName(1)">延迟改变</button>
  </div>
</template>

<script lang="ts">
import { TestObjRule } from "./interface";
import { Component, Vue, Emit, Prop, Watch } from "vue-property-decorator";
// eslint-disable-next-line
import { State, Getter, Action, Mutation, namespace as newNamespce } from "vuex-class";

// 使用namespce装饰器，来知道使用的是哪个模块内的 仓库
const userModule = newNamespce("user");
const namespace = "user";

@Component({
  name: "Son",
  components: {}
})
export default class Son extends Vue {
  // vuex
  // 前两个是 一种写法，后两种是第二种写法，但是意思是一样的
  @userModule.State("userInfo") public userInfo!: {};
  @userModule.Getter("userName") public userName!: string;
  @Mutation("EDIT_USER_INFO", { namespace }) public editUserInfo!: function;
  @Action("syncEditUserInfo", { namespace }) public syncEditUserInfo!: function;

  // Data
  private iptValue: string = "";

  // Computed
  private get addoption(): string {
    const { testName } = this;
    return testName?.length;
  }

  // Prop
  @Prop(String)
  private testName!: string;

  @Prop(Number)
  private testAge!: number;

  @Prop(Object)
  private testObj!: TestObjRule;

  // Methods
  private changeUserName(flag: number): void {
    !!flag ? this.syncEditUserInfo("杜甫") : this.editUserInfo("李白");
  }
  // Watch
  @Watch("testName", { immediate: true, deep: true })
  private doTestName(newV: string | number): void {
    console.log(newV);
  }
  @Watch("userInfo", { immediate: true, deep: true })
  private doUserInfo(newV: {}): void {
    console.log(newV);
  }

  // Event
  @Emit("do-change-value")
  private confirmation(): string {
    const _iptValue: string = this.iptValue;
    this.iptValue = "";
    return _iptValue;
  }
}
</script>

<style lang="sass" scope>
#Son
</style>
