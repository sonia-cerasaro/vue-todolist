var app = new Vue({
    el: '#root',
    data: {
      inputText: '',
      todos: [
        {
          title: 'Fare la spesa',
          status: 'todo',
        },
        {
          title: 'Annaffiare le piante',
          status: 'todo',
        },
        {
          title: 'Preparare la cena',
          status: 'todo',
        },
        {
          title: 'Fare jogging',
          status: 'todo',
        },
      ],
    },
    computed: {
      todosComputed: function () {
        let todosDone = this.todos.filter[(todo) => todo.status == 'done'];
        let todosTodo = this.todos.filter[(todo) => todo.status == 'todo'];
        return [...todosTodo, ...todosDone];
      }
    },
    methods: {
      add: function () {
        if (this.inputText !='') {
          let obj = {
          title: this.inputText,
          status: 'todo'
        }
        this.todos.push(obj);
        this.inputText = '';
      }
    },
    check: function (index) {
      this.todos[index].status = 'done';
    },
    remove: function (todo) {
      let index = this.todos.indexOf(todo);
    }
  }
});
