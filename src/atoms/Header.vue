<template>
  <header class="navbar bg-base-100 shadow-sm dark:bg-(--dark-mode-main-bg-color)">
    <div class="ms-4 p-0">
      <button @click="toggleDarkMode" class="p-2 rounded hover:cursor-pointer">
        <moon-icon v-if="darkMode" class="text-5xl text-white"/>
        <sun-icon v-else class="text-5xl text-black font-black dark:text-amber-50"/>
      </button> 
    </div>

    <div class="flex grow justify-end gap-3 me-4">
      <div class="flex dropdown dropdown-center visible sm:hidden">
        <!-- Mobile Menu -->
        <div tabindex="0" role="button"
             class="my-auto text-base btn rounded-box p-1 sm:p-0 border border-solid border-black bg-base-100 dark:border-white dark:shadow-none">
          <menu-icon class="mb-1"/>
          <span>{{ $t('header.nav.menu') }}</span>
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content bg-base-100 rounded-box z-1 w-auto mt-12 p-0 shadow-sm dark:bg-(--dark-mode-main-bg-color) dark:text-(--dark-mode-main-text-color)">
          <li><a href="#experiences">
            <briefcase-outline-icon class="mb-1"/>
            <span>{{ $t('header.nav.experiences') }}</span></a></li>
          <li class="border-t border-solid"><a href="#projects">
            <hammer-wrench-icon class="mb-1"/>
            <span>{{ $t('header.nav.projects') }}</span></a></li>
          <li class="border-t border-solid"><a href="#footer">
            <account-tie-icon class="mb-1"/>
            <span>{{ $t('header.nav.contact') }}</span></a></li>
        </ul>
      </div>
      <ul class="bg-white dark:bg-(--dark-mode-main-bg-color) dark:text-(--dark-mode-main-text-color) border-0 w-auto m-0 p-0 gap-3 text-base font-semibold hidden sm:flex">
        <!-- On Desktop (Mobile menu elements) -->
        <li class="flex items-center"><a href="#experiences" class="flex items-center gap-1">
          <briefcase-outline-icon class="mb-3 text-4xl"/>
          <span>{{ $t('header.nav.experiences') }}</span></a></li>
        <li class="flex items-center"><a href="#projects" class="flex items-center gap-1">
          <hammer-wrench-icon class="mb-3 text-4xl"/>
          <span>{{ $t('header.nav.projects') }}</span></a></li>
        <li class="flex items-center"><a href="#footer" class="flex items-center gap-1">
          <account-tie-icon class="mb-3 text-4xl"/>
          <span>{{ $t('header.nav.contact') }}</span></a></li>
      </ul>
      <div class="h-full locale-changer m-0 p-0 focus:outline-none">
        <label for="locale-select" class="sr-only">{{ $t('header.language.label') }}</label>
        <select id="locale-select" class="h-auto m-0 my-2 px-1 py-2 text-base font-semibold capitalize border border-solid rounded-box cursor-pointer dark:bg-white dark:text-black"
                v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"
                  class="max-w-6 m-0 p-0 capitalize bg-white text-black dark:bg-(--dark-mode-main-bg-color) dark:text-(--dark-mode-main-text-color)">{{ locale }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuIcon from "icons/Menu.vue"
import MoonIcon from 'icons/MoonWaningCrescent.vue'
import SunIcon from 'icons/WhiteBalanceSunny.vue'
import HammerWrenchIcon from 'icons/HammerWrench.vue'
import BriefcaseOutlineIcon from 'icons/BriefcaseOutline.vue'
import AccountTieIcon from 'icons/AccountTie.vue'
import { ref, onMounted } from 'vue'

const darkMode = ref(false)
const LOCAL_STORAGE_THEME_KEY = 'theme'

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', darkMode.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme) {
    darkMode.value = savedTheme === 'dark'
  } else {
    darkMode.value = prefersDark
  }

  document.documentElement.classList.toggle('dark', darkMode.value)
})
</script>
