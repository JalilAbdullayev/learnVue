<template>
  <StudentList name="Jalil Abdullayev" phone="+994104154315" email="abdullacelil00@gmail.com"/>
  <StudentList name="Jack Martin" phone="+994514578964" email="jackmartin@gmailcom"/>
  <StudentList name="John Doe" phone="+994554987654" email="johndoe@gmailcom"/>
</template>

<script>
import StudentList from "@/components/StudentList.vue";

export default {
  name: 'App',
  components: {StudentList},
  data() {
    return {
      students: [{
        name: 'Jalil Abdullayev',
        phone: '+994104154315'
      }, {
        name: 'Jack Martin',
        phone: '+994514578964'
      }, {
        name: 'John Doe',
        phone: '+994554987654'
      }]
    };
  }
};
</script>
