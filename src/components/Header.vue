<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
    <div>
      <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Ebrar Karademir
      </h1>
      <h2
        class="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Cloud Engineer
      </h2>
      <p class="mt-3 max-w-xs leading-normal">
        I like building, maintaining, fixing, engineering cloud infrastructure.
      </p>
      <a
        class="mt-2 group/korok inline-flex lg:font-medium text-slate-200 "
        href="./mehmet_ebrar_karademir_cv.pdf"
        download
        target="_blank">
        <span class="sr-only">Download my CV</span>
        <span
          class="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
          aria-hidden="true">
          D
        </span>
        <span
          class="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
          aria-hidden="true">
          o
        </span>
        <span
          class="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
          aria-hidden="true">
          w
        </span>
        <span
          class="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
          aria-hidden="true">
          n
        </span>
        <span
          class="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
          aria-hidden="true">
          l
        </span>
        <span
          class="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
          aria-hidden="true">
          o
        </span>
        <span
          class="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
          aria-hidden="true">
          a
        </span>
        <span
          class="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
          aria-hidden="true">
          d
        </span>
        <span
          class="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
          aria-hidden="true">
          &nbsp;
        </span>
        <span
          class="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
          aria-hidden="true">
          m
        </span>
        <span
          class="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
          aria-hidden="true">
          y
        </span>
        <span
          class="group-hover/korok:text-pink-400 transition duration-75 group-hover/korok:-translate-y-px delay-[325ms]"
          aria-hidden="true">
          &nbsp;
        </span>
        <span
          class="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[350ms]"
          aria-hidden="true">
          C
        </span>
        <span
          class="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[375ms]"
          aria-hidden="true">
          V
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[425ms]"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true">
          <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 4h14v-2H5v2z" />
        </svg>
      </a>
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-12 w-max">
          <li>
            <a
              :class="[
                'group flex items-center py-3',
                { active: activeSection === 'about' },
              ]"
              href="/personal-page/?view=main#about">
              <!-- Dynamic Indicator -->
              <span
                :class="[
                  'nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none',
                  {
                    'w-16 bg-slate-200': activeSection === 'about', // When active
                    'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 bg-slate-600':
                      activeSection !== 'about',
                  },
                ]">
              </span>

              <!-- Dynamic Text -->
              <span
                :class="[
                  'nav-text text-xs font-bold uppercase tracking-widest transition-all',
                  {
                    'text-slate-200': activeSection === 'about', // Text color when active
                    'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200':
                      activeSection !== 'about',
                  },
                ]">
                About
              </span>
            </a>
          </li>
          <li>
            <a
              :class="[
                'group flex items-center py-3',
                { active: activeSection === 'experience' },
              ]"
              href="/personal-page/?view=main#experience">
              <!-- Dynamic Indicator -->
              <span
                :class="[
                  'nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none',
                  {
                    'w-16 bg-slate-200': activeSection === 'experience', // When active
                    'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 bg-slate-600':
                      activeSection !== 'experience',
                  },
                ]">
              </span>

              <!-- Dynamic Text -->
              <span
                :class="[
                  'nav-text text-xs font-bold uppercase tracking-widest transition-all',
                  {
                    'text-slate-200': activeSection === 'experience', // Text color when active
                    'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200':
                      activeSection !== 'experience',
                  },
                ]">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a
              :class="[
                'group flex items-center py-3',
                { active: activeSection === 'projects' },
              ]"
              href="/personal-page/?view=main#projects">
              <!-- Dynamic Indicator -->
              <span
                :class="[
                  'nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none',
                  {
                    'w-16 bg-slate-200': activeSection === 'projects', // When active
                    'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 bg-slate-600':
                      activeSection !== 'projects',
                  },
                ]">
              </span>

              <!-- Dynamic Text -->
              <span
                :class="[
                  'nav-text text-xs font-bold uppercase tracking-widest transition-all',
                  {
                    'text-slate-200': activeSection === 'projects', // Text color when active
                    'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200':
                      activeSection !== 'projects',
                  },
                ]">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="ml-1 mt-8 flex-col items-center" aria-label="Social media">
      <li class="mr-5 shrink-0 text-xs">
        <p class="mt-4 max-w-xs leading-normal">
          +90 555 554 52 26
        </p>
        </li>
        <li class="mr-5 shrink-0 text-xs">
        <p class="mt-4 max-w-xs leading-normal">
          ebrarkarademir999@gmail.com
        </p>
        </li>
    </ul>
    <ul class="ml-1 mt-4 flex items-center" aria-label="Social media">
      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-slate-200"
          href="https://github.com/ebrarkarademir"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
          ><span class="sr-only">GitHub</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-6 w-6"
            aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </li>
      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-slate-200"
          href="https://www.linkedin.com/in/ebrar-karademir/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
          ><span class="sr-only">LinkedIn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
            aria-hidden="true">
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg
        ></a>
      </li>

      <li class="mr-5 shrink-0 text-xs">
        <a
          class="block hover:text-slate-200"
          href="https://www.goodreads.com/user/show/118422049-ebrar"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Goodreads (opens in a new tab)"
          title="Goodreads">
          <span class="sr-only">Goodreads</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            class="h-6 w-6"
            aria-hidden="true">
            <path
              d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z"
              fill=""></path>
          </svg>
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
const props = defineProps({
  activeSection: String,
});
</script>
