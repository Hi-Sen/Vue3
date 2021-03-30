
import { ref } from "vue"

export default function () {
  const mixinValue = ref();
  const mixinFunc = (n) => {
    mixinValue.value = n.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
      return s + ','
    })
  }
  return { mixinValue, mixinFunc }
}

