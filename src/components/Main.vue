<template>
  <main id="content" class="pt-12 lg:pl-8 lg:w-2/3 lg:py-24">
    <div v-if="view === 'main'">
      <section
        id="about"
        ref="aboutSection"
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me">
        <About />
      </section>
      <section
        id="experience"
        ref="experienceSection"
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Experience">
        <Experience />
      </section>
      <section
        id="projects"
        ref="projectsSection"
        class="scroll-mt-16 lg:scroll-mt-24"
        aria-label="Projects">
        <Projects @open-project="handleOpenProject" />
      </section>
    </div>
    <div v-if="view === 'admin-panel'">
      <AdminPanelProject />
    </div>
  </main>
</template>

<script setup>
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import AdminPanelProject from "../components/AdminPanelProject.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router"; // Import useRoute from Vue Router
import { watch } from "vue";


const emit = defineEmits(["sectionChange"]);
const route = useRoute(); // Use the useRoute function to access the current route

// the view can only be 'main' or 'admin-panel'
const view = ref("main");

const aboutSection = ref(null);
const experienceSection = ref(null);
const projectsSection = ref(null);

// Variable to track the currently visible section
let currentActiveSection = ref("");

// Function to emit when user scrolls to a specific section
const handleSectionVisibility = () => {
  const about = aboutSection.value?.getBoundingClientRect();
  const experience = experienceSection.value?.getBoundingClientRect();
  const projects = projectsSection.value?.getBoundingClientRect();

  let newActiveSection = "";

  if (about && about.top < window.innerHeight / 2 && about.bottom > 0) {
    newActiveSection = 'about';
  } else if (experience && experience.top < window.innerHeight / 2 && experience.bottom > 0) {
    newActiveSection = 'experience';
  } else if (projects && projects.top < window.innerHeight / 2 && projects.bottom > 0) {
    newActiveSection = 'projects';
  }

  if (newActiveSection && newActiveSection !== currentActiveSection.value) {
    currentActiveSection.value = newActiveSection;
    emitFunction(newActiveSection);
  }
};

const emitFunction = (section) => {
  // Add your custom logic for the section here
  emit("sectionChange", section);
};

// Watch for changes in the route's `view` query parameter
watch(() => route.query.view, (newView) => {
  if (newView === "admin-panel") {
    view.value = newView;
    emitFunction("");

  } else {
    view.value = "main";
  }
});


onMounted(() => {
  window.addEventListener("scroll", handleSectionVisibility);
  handleSectionVisibility(); // Run initially
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleSectionVisibility);
});

// Function to handle project view change
const handleOpenProject = (project) => {
  view.value = project;
  window.history.pushState({}, "", window.location.pathname);
  emitFunction("");
  window.scrollTo(0, 0);
};
</script>