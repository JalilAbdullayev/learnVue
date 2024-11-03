Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment(number) {
            this.counter += number;
        },
        decrement(number) {
            this.counter -= number;
        }
    }
}).mount("#frontend");
