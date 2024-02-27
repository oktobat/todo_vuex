<template>
  <header>
    <h1>일정관리앱 {{ complete }}/{{ total }}건 처리</h1>
  </header>
</template>

<script>
export default {
  name: "TodoHeader",
  computed:{
    complete(){
      return this.$store.getters.fnGetTodos.filter(item=>item.modify==true).length
    },
    total(){
      return this.$store.getters.fnGetTodos.length
    }
  }
};
</script>

<style scoped>
h1 {
  background: #22b8cf;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 20px;
}
</style>
