<template>
  <div>
    我是 Detail , About 的子组件
    <p>props 接收参数: {{name || "From App link-router"}} {{age || "no attrs"}}</p>
    <p>
      <!-- inject_value 可以用 toRefs 解构 -->
      provie/inject 接收参数:
      静态：{{inject_value.title}}
      动态：{{inject_value.value._value}}
    </p>
    <input v-model="txt"
           type="text">
    <button @click="add">添加到父组件 num 数组</button>

    <hr>
    <p>计算属性值 {{computedValue}}</p>
  </div>
</template>
 
<script> 
import { ref, reactive, toRefs, nextTick, inject, computed } from 'vue';
export default {
  props: {
    attr: Object
  },
  setup (props, context) {

    const txt = ref();
    const attrs = reactive(props.attr);

    // 注入的方式接收参数  
    const inject_value = inject("provideValue");

    // 上下文包含 emit , slot , props 
    // 利用 emit 发布向父组件传参 
    const add = () => {
      nextTick(() => {
        txt.value && context.emit("addList", txt);
        txt.value = ""
      })
    }

    // 计算属性
    let computedValue = computed({
      get: () => txt.value,
      set: val => {
        // 创建一个可写的 ref 对象
        console.log(val)
      }
    })

    return {
      ...toRefs(attrs),
      add,
      txt,
      inject_value,
      computedValue
    }
  }
};
</script>
