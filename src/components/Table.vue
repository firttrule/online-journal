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
            <q-btn class="q-mr-xs" size="xs" label="+" @click="inc(student)" />
            <q-btn class="q-ml-xs" size="xs" label="-" @click="dec(student)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const students = ref([
  {
    name: "Балитов Юрий",
    count: ref(0),
  },
  {
    name: "Белгородский Никита",
    count: ref(0),
  },
  {
    name: "Белоусов Богдан",
    count: ref(0),
  },
  {
    name: "Бутрешкин Павел",
    count: ref(0),
  },
  {
    name: "Васильев Максим",
    count: ref(0),
  },
  {
    name: "Винников Максим",
    count: ref(0),
  },
  {
    name: "Джумаев Салохиддин",
    count: ref(0),
  },
  {
    name: "Егармин Михаил",
    count: ref(0),
  },
  {
    name: "Егоренкова Алина",
    count: ref(0),
  },
  {
    name: "Карев Артемий",
    count: ref(0),
  },
  {
    name: "Клевцова Мария",
    count: ref(0),
  },
  {
    name: "Медведский Александр",
    count: ref(0),
  },
  {
    name: "Мещанинов Кирилл",
    count: ref(0),
  },
  {
    name: "Мотовилов Иван",
    count: ref(0),
  },
  {
    name: "Нетрибовский Владислав",
    count: ref(0),
  },
  {
    name: "Никитин Никита",
    count: ref(0),
  },
  {
    name: "Омаров Кади",
    count: ref(0),
  },
  {
    name: "Саженов Кирилл",
    count: ref(0),
  },
  {
    name: "Скоробулатова Анастасия",
    count: ref(0),
  },
  {
    name: "Тихонов Дмитрий",
    count: ref(0),
  },
  {
    name: "Унгурян Екатерина",
    count: ref(0),
  },
  {
    name: "Чудаев Виктор",
    count: ref(0),
  },
]);

const inc = (student) => {
  student.count++;
};

const dec = (student) => {
  if (student.count > 0) {
    student.count--;
  }
};
</script>

<style></style>
