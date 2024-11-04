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
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        }
    }
}).mount("#frontend");
