<template>
  <div id="container">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import "./assets/css/reset.css";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created(){
    let id = localStorage.getItem("id")
    let todos = JSON.parse(localStorage.getItem("todos"))
    if (id){
      this.$store.state.id = id
    }
    if (todos) {
      this.$store.state.todos = todos
    } else {
      this.$store.state.todos = []
    }
  }
};
</script>

<!-- scoped 속성을 가지고 있으면, css는 현재 컴포넌트의 요소에만 적용 -->
<style scoped>
#container {
  max-width: 600px;
  margin: 50px auto;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  background:#fff; 
}
</style>
