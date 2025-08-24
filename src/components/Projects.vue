<template>
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2
      class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      Projects
    </h2>
  </div>
  <div>
    <ul class="group/list">
      <li class="mb-12">
        <div
          class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div class="z-10 sm:order-2 sm:col-span-4">
            <h3>
              <a
                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href="https://www.tiryakihukuk.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Build a Spotify Connected App (opens in a new tab)"
                ><span
                  class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span
                ><span
                  >Tiryaki Hukuk Web App<!-- -->
                  <span class="inline-block"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 mb-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"></path></svg></span></span
              ></a>
            </h3>
            <p class="mt-2 text-sm leading-normal">
              Appointment scheduling web app for attorneys. Users schedule
              Google Meet integrated online video meetings, in-person meetings,
              and phone calls with attorneys. Online payment integration with
              İyzico.
            </p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Vue
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Google Meet API
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  İyzico
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Firebase
                </div>
              </li>
            </ul>
          </div>
          <img
            alt="Tiryaki Hukuk web page"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            class="rounded border-2 w-full border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-4 sm:translate-y-1"
            style="color: transparent"
            src="../assets/tiryaki-hukuk.webp" />
        </div>
      </li>
      <li class="mb-12">
        <div
          class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div class="z-10 sm:order-2 sm:col-span-4">
            <h3>
              <button
                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                @click="handleOpenProject('admin-panel')"
                aria-label="project">
                <span
                  class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span
                ><span
                  >Admin Panel<!-- -->
                  <span class="inline-block"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 mb-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"></path></svg></span
                ></span>
              </button>
            </h3>
            <p class="mt-2 text-sm leading-normal">
              Admin panel for managing blogs, scheduled appointments, attorney
              working hours, exceptional hours and more. Admin and attorney
              roles with different permissions. Includes email service for
              customers and attorneys.
            </p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Vue
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Firebase
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  AWS
                </div>
              </li>
            </ul>
          </div>
          <img
            alt="Admin Panel"
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            data-nimg="1"
            class="rounded border-2 w-full border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-4 sm:translate-y-1"
            style="color: transparent"
            src="../assets/view-blog.webp" />
        </div>
      </li>
      <li>
        <div
          class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div class="z-10 sm:order-2 sm:col-span-4">
            <h3>
              <a
                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href="https://github.com/ebrarkarademir/game-ai-project"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Spotify Profile (opens in a new tab)"
                ><span
                  class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span
                ><span
                  >Game AI Project<!-- -->
                  <span class="inline-block"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="inline-block h-4 w-4 mb-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"></path></svg></span></span
              ></a>
            </h3>
            <p class="mt-2 text-sm leading-normal">
              I developed a game for an AI to learn how to play it. The game is
              a simple 2D game where the AI tries to jump or slide to avoid
              obstacles. The AI learns how to play the game by using a NEAT
              genetic algorithm.
            </p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Python
                </div>
              </li>
              <li class="mr-1.5 mt-2">
                <div
                  class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Pygame
                </div>
              </li>
            </ul>
          </div>
          <img
            alt="Game AI"
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            data-nimg="1"
            class="rounded border-2 w-full border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-4 sm:translate-y-1"
            style="color: transparent"
            src="../assets/game-ai.webp" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(["openProject"]);

const handleOpenProject = (project) => {
  emit("openProject", project);
};
</script>
