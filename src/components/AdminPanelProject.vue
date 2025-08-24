<template>
  <div
    class="border-t pt-8 lg:border-none lg:pt-0"
    aria-label="Selected projects">
    <header class="mb-8 lg:mb-16 lg:text-center">
      <h1 class="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
        Admin Panel
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">
        Admin panel for appointment scheduling web app!
      </h2>
    </header>

    <div>
      <ul class="group/list">
        <li v-for="(item, index) in projects" :key="index" class="mb-12">
          <div
            class="group relative flex flex-col pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div
              class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10">
              <h3>
                <span
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                  <span
                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4"></span>
                  <span>{{ item.title }}</span>
                </span>
              </h3>
              <p class="mt-2 text-sm leading-normal">{{ item.description }}</p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li
                  v-for="feature in item.features"
                  :key="feature"
                  class="mr-1.5 mt-2">
                  <div
                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {{ feature }}
                  </div>
                </li>
              </ul>
            </div>

            <!-- Image Slider Container -->
            <div
              class="relative translate-y-1 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30">
         
                <img
                  v-for="(image, imgIndex) in item.images"
                  :key="imgIndex"
                  v-show="imgIndex === currentIndexes[index]"
                  :src="image"
                  :alt="`Screenshot of ${item.title}`"
                  class="rounded w-full h-auto object-cover transition-opacity duration-500" />
              <!-- Navigation Buttons -->
              <button
                class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full z-10"
                @click="prevSlide(index)">
                <svg
                  class="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full z-10"
                @click="nextSlide(index)">
                <svg
                  class="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer class="lg:hidden text-center font-medium tracking-tight text-base text-slate-200">
      <a href="/personal-page/">Home</a>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import AddBlog from "../assets/add-blog.webp";
import EditBlog from "../assets/edit-blog.webp";
import ViewBlog from "../assets/view-blog.webp";
import ViewMeetings from "../assets/view-meetings.webp";
import AcceptMeeting from "../assets/accept-meeting.webp";
import UserMeetings from "../assets/user-meetings.webp";
import Notifications from "../assets/notifications.webp";
import AdminSettings from "../assets/admin-settings.webp";
import WorkingHours from "../assets/working-hours.webp";
import AttorneySettings from "../assets/attorney-settings.webp";
import Attorneys from "../assets/attorneys.webp";
import AppointmentStep1 from "../assets/appointment-step-1.webp";
import AppointmentStep2 from "../assets/appointment-step-2.webp";
import AppointmentStep3 from "../assets/appointment-step-3.webp";
import AppointmentStep4 from "../assets/appointment-step-4.webp";
import AppointmentStep5 from "../assets/appointment-step-5.webp";
import Iyzico from "../assets/iyzico.webp";
import PaymentSuccess from "../assets/payment-success.webp";
import Mail1 from "../assets/mail-1.webp";
import Mail2 from "../assets/mail-2.webp";

const projects = [
  {
    title: "Online Meetings Management",
    description:
      "Online meetings management for viewing and managing scheduled appointments. Admin can accept, reject and join to the meetings",
    images: [ViewMeetings, AcceptMeeting, UserMeetings],
  },
  {
    title: "Attorney Settings",
    description:
      "Attorney settings for setting working hours, exceptional hours, and more.",
    images: [WorkingHours, AttorneySettings, Attorneys],
  },
  {
    title: "Blog Management",
    description:
      "Blog management tab for creating, updating, and deleting blog posts.",
    images: [ViewBlog, AddBlog, EditBlog],
  },
  {
    title: "Notifications and Settings",
    description:
      "Sync notifications for appointment request, new user and contact form submission.",
    images: [Notifications, AdminSettings],
  },
  {
    title: "Schedule Appointment Flow",
    description:
      "Schedule appointment flow for selecting attorney, date, time, and payment.",
    images: [
      AppointmentStep1,
      AppointmentStep2,
      AppointmentStep3,
      AppointmentStep4,
      AppointmentStep5,
      Iyzico,
      PaymentSuccess,
    ],
  },
  {
    title: "Email Service",
    description:
      "Email service for sending emails to both users and attorneys when meeting received, accepted, rejected, or setted a meeting.",
    images: [Mail1, Mail2],
  },
];

const currentIndexes = reactive(projects.map(() => 0)); // Keeps track of the current image index for each project

const nextSlide = (index) => {
  currentIndexes[index] =
    (currentIndexes[index] + 1) % projects[index].images.length;
};

const prevSlide = (index) => {
  currentIndexes[index] =
    (currentIndexes[index] + projects[index].images.length - 1) %
    projects[index].images.length;
};
</script>
