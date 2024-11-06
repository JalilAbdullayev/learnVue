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
        }
    }
}).mount('main');