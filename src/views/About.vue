<template>
  <div class="about">
    <h3>我是 About</h3>
    <p>
      {{ refValue }}
      <br />
      原对象形式： {{ reactiveValue.name }} ： {{ reactiveValue.age }}
      <br />
      toRefs形式(解构)：{{ name }} ： {{ age }}
    </p>

    <hr />

    【数组】
    <button @click="addList">Push list.lengrth++</button>
    <br />
    <span v-for="i in reactiveValueArray"
          :key="i">{{ i }}， </span>
  </div>
  <hr />
  <h3>About 子组件</h3>
  <Detail :attr="reactiveValue"
          @addList="addAgeFun" />
  <h3>Mixin 复用代码</h3>
  <input type="number"
         v-model="number">
  mixin 通过复用方法将输入的数字千分位
  <br>
  <h4>{{mixinValue}}</h4>
  <button @click="mixinFunc(number)">变化</button>
  <hr>
  <h4>Vue Router</h4>
  <router-link to="/copy_about"> router-link 跳转方式 About 2 号</router-link>
  <button @click="routerClick">routerClick</button>
  <hr>
  <h4>Vuex</h4>
  vuex store state count 值 {{storeNum}}
  <button @click="vuexClick">commit / dispatch count++</button>
</template>

<script>
import {
  ref, reactive, watch, toRefs, provide,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTriggered, computed,
} from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useStore } from "vuex"
import Detail from "./Detail.vue";
import Mixin from "./useMixin.js"
export default {
  components: { Detail },
  beforeCreate () {
    console.log(`----beforeCreate----`);
  },
  created () {
    console.log(`----created----`);
  },
  // setup 执行时间在 beforCreate 之前, 因此组件实例还没有被创建，此时还没有 this 
  setup (props, context) {
    console.log(`----setup----`);
    // 这些跟 vue2 的生命周期差不多，就是写法上加了前缀 on 
    onBeforeMount(() => console.log(`----onBeforeMount----`));
    onMounted(() => console.log(`----onMounted----`));
    onBeforeUpdate(() => console.log(`----onBeforeUpdate----`));
    onUpdated(() => console.log(`----onUpdated----`));
    onBeforeUnmount(() => console.log(`----onBeforeMount----`));
    onUnmounted(() => console.log(`----onUnmounted----`));
    // 新增生命周期：监听哪些数据发生变化
    onRenderTriggered((event) =>
      console.log(`----onRenderTriggered----`, event)
    );

    // 声明，创建响应式数据 
    // 基本数据类型常用 ref，引用类型常用 reactive 
    // 当然 ref 也支持引用类型 
    const refValue = ref("---");
    const reactiveValue = reactive({ name: "小娜", age: 17 });
    const reactiveValueArray = reactive([1, 2, 3, 4, 5]);

    // 复制声明变量
    const D = new Date();
    // onMounted(() => {
    //   refValue.value = `${D.getFullYear()}年${D.getMonth()}月${D.getDay()}日`;
    //   reactiveValue.name = "Hisen";
    //   reactiveValue.age++;
    // });

    // 多变量监听，注意基本类型与引用类型的不同写法
    // 第三个参数是 options 支持 deep、immediate 和 flush 
    watch(
      [refValue, () => reactiveValue.age],
      ([n_ref, n_rt], [o_ref, o_rt]) => {
        // console.log("refValue:new", n_ref, "old", o_ref);
        // console.log("reactiveValue.key: new", n_rt, "old", o_rt);
      }, {}
    );

    // 按钮点击事件  
    const addList = () => {
      reactiveValueArray.push(reactiveValueArray.length + 1);
    };

    // 父组件监听子组件 emit 
    const addAgeFun = (num) => {
      reactiveValueArray.push(num._value);
    }

    // provide / inject 提供注入的方式传参  
    provide("provideValue", {
      title: 'from about comp',
      value: refValue
    })

    // mixin 代码逻辑复用 
    const number = ref();
    const { mixinValue, mixinFunc } = Mixin();

    // router click event 
    const router = useRouter();
    const route = useRoute();
    const routerClick = () => {
      console.log(router, route);
      // router.push({ path: "/", query: { params: '123456789' } });
      router.push({ name: "Home", params: { params: '123456789' } });
    }

    // vuex 
    const store = useStore();
    const storeNum = computed(() => {
      return store.state.count;
    })
    const vuexClick = () => {
      store.commit("addCount", { a: 2 });
      store.dispatch("asyncAddCount", { b: 1 });
    }

    return {
      refValue,
      reactiveValue,
      reactiveValueArray,
      ...toRefs(reactiveValue), // 解构 reactiveValue ，相当于返回了多个变量 name,age .....
      addList,
      addAgeFun,
      number,
      mixinValue,
      mixinFunc,
      routerClick,
      vuexClick,
      storeNum
    };
  },
};
</script> 
