Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            fullName: ''
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
    },
    computed: {
        fullNameComputed() {
            if(this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    watch: {
        name(value) {
            if(value === '') {
                this.fullName = '';
            } else {
                this.fullName = value + ' ' + this.lastName;
            }
        },
        lastName(value) {
            if(value === '') {
                this.fullName = '';
            } else {
                this.fullName = this.name + ' ' + value;
            }
        },
        counter(value) {
            if(value > 20) {
                this.counter = 0;
            }
        }
    }
}).mount("#frontend");
