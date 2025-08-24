// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'  // Import Tailwind CSS here
import router from './router'; // Assuming you have a router.js file


createApp(App).use(router).mount('#app')

