<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Фамилия и имя студента"
        lazy-rules
      />

      <q-input
        filled
        type="number"
        v-model="count"
        label="Количество дежурств"
        lazy-rules
        :rules="[
          (val) =>
            (val >= 0 && val < 100) || 'Число не может быть отрицательным',
        ]"
      />

      <div>
        <q-btn label="Добавить" type="submit" color="primary" />
        <q-btn
          label="Сбросить"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";

const $q = useQuasar();

const name = ref(null);
const count = ref(null);
// передать пропсами studentsCollectionRef

const onSubmit = () => {
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Добален",
  });

  onReset();
};

// const addStudent = async () => {
//   await addDoc(collection(db, "students"), {
//     name: "",
//     count: "",
//   });
// };

const onReset = () => {
  name.value = null;
  count.value = null;
};
</script>
