var app = new Vue({
    el: '#root',
    data: {
      inputText: '',
      todos: [
        {
          title: 'Fare la spesa',
        },
        {
          title: 'Annaffiare le piante',
        },
        {
          title: 'Preparare la cena',
        },
        {
          title: 'Fare jogging',
        },
      ],
    },
    methods: {
      add: function() {
        let obj = {
          title: this.inputText
        }
        this.todos.push(obj);
      }

    }
  });
