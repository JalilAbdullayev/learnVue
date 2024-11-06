Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
            show: true
        };
    },
    methods: {
        addTodo() {
            if(this.newTodo === '') {
                return;
            }
            this.todos.push(this.newTodo);
            this.newTodo = '';
        }
    }
}).mount('main');