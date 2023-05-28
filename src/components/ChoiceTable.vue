<template>
  <div class="q-pa-md">
    <q-markup-table separator="cell" dense>
      <thead>
        <tr>
          <th>Студент</th>
          <th>Уборок</th>
          <th>Отдежурил</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.name">
          <td class="text-left">{{ student.name }}</td>
          <td class="text-right">{{ student.count }}</td>
          <td>
            <q-btn class="q-mr-xs" size="xs" @click="inc(student)">
              <span class="material-icons"> add </span>
            </q-btn>
            <q-btn class="q-ml-xs" size="xs" @click="dec(student)">
              <span class="material-icons"> remove </span>
            </q-btn>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

const studentsCollectionRef = collection(db, "students");
const students = ref([]);

onMounted(() => {
  onSnapshot(studentsCollectionRef, (querySnapshot) => {
    const fbStudents = [];
    querySnapshot.forEach((doc) => {
      const student = {
        id: doc.id,
        name: doc.data().name,
        count: doc.data().count,
      };
      fbStudents.push(student);
    });
    students.value = fbStudents;
  });
});

const inc = async (student) => {
  await updateDoc(doc(studentsCollectionRef, student.id), {
    count: increment(1),
  });
};

const dec = (student) => {
  if (student.count > 0) {
    updateDoc(doc(studentsCollectionRef, student.id), {
      count: increment(-1),
    });
  }
};
</script>

<style></style>
