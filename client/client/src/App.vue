<template>
  <div class="main">
    <h3>Todo List</h3>

    <form class="form" @submit.prevent="addTodo">
      <div class="form-group">
        <label for="title">Todo:</label>
        <input v-model="title" type="text" id="title" class="input" placeholder="Enter todo" />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <input v-model="description" type="text" id="description" class="input" placeholder="Enter Description" />
      </div>

      <button class="submit-button">Add Todo</button>
    </form>

    <div class="todo-container">
      <ul>
        <li v-for="(todo, i) in todos" :key="todo._id">
          <div class="todo">
            <span class="todo-name">{{ todo.title }}</span>
            <br>
            <span class="todo-description">{{ todo.description }}</span>
          </div>
          <button class="delete-btn" @click="removeTodo(todo, i)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      description: "",
      title: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/todoList/");
    this.todos = response.data;
  },
  methods: {
    async addTodo() {
      const response = await axios.post("api/todoList/", {
        title: this.title,
        description: this.description,
      });
      this.todos.push(response.data);
      this.title = "";
      this.description = "";
    },
    async removeTodo(item, i) {
      await axios.delete("api/todoList/" + item._id);
      this.todos.splice(i, 1);
    },
  },
};
</script>

<style>
.main {
  max-width: 600px;
  margin: auto;
  margin-top: 3rem;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.todo-container {
  margin-top: 20px;
}

.todo-container ul {
  list-style: none;
  padding: 0;
}

.todo-container ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
}

.todo {
  flex-grow: 1;
}

.todo-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.todo-description {
  font-size: 14px;
  color: #555;
}

.delete-btn {
  background-color: #823938;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
