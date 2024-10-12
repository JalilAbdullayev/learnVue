const app = Vue.createApp({
  data() {
    return {
      firstGoal: "HTML",
      website: "https://www.google.com/",
    };
  },
  methods: {
    ourGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.4) {
        return "CSS";
      } else {
        return "JS";
      }
    },
  },
});
app.mount("#frontend");
