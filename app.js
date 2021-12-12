const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalA: "Learn Vue & Try Best",
      courseGoalB: "Master Vue & Build Amazing Apps",
      information: { name: "Thet Tun Kyaw", birthPlace: "Mandalay", age: 24 },
      vueLink: "https://vuejs.org",
      googleLink: "https://www.google.com",
      htmlA: "<p>This is HTML A.</p>",
      htmlB: "<p>This is HTML B.</p>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    outputHTML() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.htmlA;
      } else {
        return this.htmlB;
      }
    },
  },
});

app.mount("#user-goal");
