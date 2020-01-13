import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        { task: "Shop", priority: "Low" },
        { task: "Housework", priority: "Low" },
        { task: "School run", priority: "High" }
      ],
      newTodo: { task: "", priority: "" }
      // items: [
      //   {name: "Egg", isPurchased: false},
      //   {name: "Bacon", isPurchased: false},
      //   {name: "Rolls", isPurchased: true}
      // ],
      // newItem: {name: "", isPurchased: false}
    },
    methods: {
      saveNewChore: function() {
        this.todos.push(this.newTodo);
        this.newTodo = { task: "", priority: "" }
      }
      // saveNewItem: function() {
      //   this.items.push(this.newItem);
      //   this.newItem = {name: "", isPurchased: false};
      // },
      // purchaseItem: function(index) {
      //   this.items[index].isPurchased = true;
      // }
    }
  });
});
