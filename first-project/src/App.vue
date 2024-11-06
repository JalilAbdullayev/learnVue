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

<script>
export default {
  name: 'App',
  data() {
    return {
      students: [
        {
          name: 'Jalil Abdullayev',
          phone: '+994104154315'
        },
        {
          name: 'Jack Martin',
          phone: '+994514578964'
        },
        {
          name: 'John Doe',
          phone: '+994554987654'
        }
      ]
    };
  }
};
</script>
