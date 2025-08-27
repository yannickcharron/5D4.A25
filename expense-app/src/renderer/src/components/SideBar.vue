<template>
  <!-- sidenav  -->
  <aside
    class="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
    aria-expanded="false"
  >
    <div class="h-19">
      <div class="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
        <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
          Expense tracker
        </span>
      </div>
    </div>

    <hr
      class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
    />

    <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
      <ul class="flex flex-col pl-0 mb-0">
        <li class="mt-0.5 w-full">
          <router-link
            class="nav-expanse-sidebar-item dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
            :to="{ name: 'dashboard'}"
          >
            <div
              class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5"
            >
              <FontAwesomeIcon
                class="relative top-0 text-sm leading-normal text-blue-500"
                icon="fa-solid fa-grip"
              />
            </div>
            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Dashboard</span>
          </router-link>
        </li>
        <li class="mt-0.5 w-full">
          <router-link
            class="nav-expanse-sidebar-item dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
            :to="{ name: 'expenses'}"
          >
            <div
              class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5"
            >
              <FontAwesomeIcon
                class="relative top-0 text-sm leading-normal text-green-500"
                icon="fa-solid fa-money-check-dollar"
              />
              <!-- <i class="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i> -->
            </div>
            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Expenses</span>
          </router-link>
        </li>

        <li class="mt-0.5 w-full cursor-pointer">
          <a
            class="expanse-sidebar-item dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <div
              class="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5"
            >
              <FontAwesomeIcon
                class="relative top-0 text-sm leading-normal text-cyan-500"
                icon="fa-solid fa-right-from-bracket"
              />
            </div>
            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <!-- end sidenav -->
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-expanse-sidebar-item.is-active {
  text-decoration: underline;
}
.nav-expanse-sidebar-item.is-exact-active {
  font-weight: 900;
}
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
</style>
