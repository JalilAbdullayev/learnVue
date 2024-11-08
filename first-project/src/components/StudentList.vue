<script>
export default {
  name: "StudentList",
  props: ["name", "phone", "email"]
};
</script>

<template>
  <h2>
    My students
  </h2>
  <ul>
    <li>
      <p>
        Name:
      </p>
      {{ name }}
      <p>
        Phone:
      </p>
      {{ phone }}
      <p>
        Email:
      </p>
      {{ email }}
    </li>
  </ul>
</template>

<style scoped>

</style>