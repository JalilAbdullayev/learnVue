<script>
export default {
  name: "StudentList",
  props: ["name", "phone", "email"],
  data() {
    return {
      show: false
    };
  }
};
</script>

<template>
  <h2>
    My students
  </h2>
  {{ name }}
  <button @click="show = !show">
    Show data
  </button>
  <ul v-if="show">
    <li>
      <p>
        Phone:
      </p>
      {{ phone }}
    </li>
    <li>
      <p>
        Email:
      </p>
      {{ email }}
    </li>
  </ul>
</template>

<style scoped>

</style>