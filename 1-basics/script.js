Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        increment(number) {
            this.counter += number;
        },
        decrement(number) {
            this.counter -= number;
        },
        setName(event) {
            this.name = event.target.value;
        },
        login() {
            alert("You're logged in!");
        },
        reset() {
            this.name = '';
        }
    }
}).mount("#frontend");
