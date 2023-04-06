<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/Todo/TodoHeader.vue'
import TodoInput from '../components/Todo/TodoInput.vue'
import TodoList from '../components/Todo/TodoList.vue'
import TodoFooter from '../components/Todo/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  text-align: center;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
