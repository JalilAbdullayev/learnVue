<script>
export default {
  name: "StudentList",
  props: ["students"]
};
</script>

<template>
  <h2>
    My students
  </h2>
  <ul>
    <li v-for="student in students" :key="student.name">
      {{ student.name }} - {{ student.phone }}
    </li>
  </ul>
</template>

<style scoped>

</style>