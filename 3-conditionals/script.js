Vue.createApp({
    data() {
        return {
            skills: [],
            skill: ''
        };
    },
    methods: {
        addSkill() {
            this.skills.push(this.skill);
            this.skill = '';
        },
        deleteSkill(index) {
            this.skills.splice(index, 1);
        }
    }
}).mount('main');