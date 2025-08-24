<template>
  <Header :activeSection="activeSection" />
  <Main @sectionChange="handleSectionChange" />
</template>

<script setup>
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import { ref } from "vue";

const activeSection = ref("");

const handleSectionChange = (sectionId) => {
  activeSection.value = sectionId;
};
</script>
