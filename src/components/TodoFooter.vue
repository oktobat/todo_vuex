<template>
  <footer>
    <button type="button" @click="finishRemove">완료일정 삭제</button>
    <button type="button" @click="allRemove">전체 삭제</button>
  </footer>
</template>

<script>
export default {
  name: "TodoFooter",
  methods : {
    finishRemove(){
      // this.$emit("finishRemove")
      this.$store.commit("finish__Remove")
    },
    allRemove(){
      // this.$emit("allRemove")
      this.$store.commit("all__Remove")
    }
  }
};
</script>

<style lang="scss" scoped>
  footer {
    padding:30px; text-align:center; 
    button { background:#000; color:#fff; padding:10px;
      border-radius:5px; margin:0 10px; 
    }
  }
</style>
