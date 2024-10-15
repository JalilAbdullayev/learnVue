const app = Vue.createApp({
  data() {
    return {
      firstGoal: "HTML",
      secondGoal: "<h3>CSS</h3>",
      thirdGoal: "JS",
      website: "https://www.google.com/",
    };
  },
  methods: {
    ourGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.4) {
        return this.secondGoal;
      } else {
        return this.thirdGoal;
      }
    },
  },
});
app.mount("#frontend");
