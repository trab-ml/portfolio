<template>
  <header class="navbar bg-base-100 shadow-sm">
    <div class="ms-4 p-0">
      <xml-icon class="text-5xl text-indigo-950"/>
    </div>

    <div class="flex grow justify-end gap-3 me-4">
      <div class="flex dropdown dropdown-center visible sm:hidden">
        <!-- Mobile Menu -->
        <div tabindex="0" role="button"
             class="my-auto text-base btn rounded-box p-1 sm:p-0 border-1 border-solid border-black bg-base-100">
          <menu-icon class="mb-1"/>
          <span>{{ $t('header.nav.menu') }}</span>
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content bg-base-100 rounded-box z-1 w-auto mt-[3rem] p-0 shadow-sm">
          <li><a href="#experiences">
            <briefcase-outline-icon class="mb-1"/>
            <span>{{ $t('header.nav.experiences') }}</span></a></li>
          <li class="border-t-1 border-solid"><a href="#projects">
            <hammer-wrench-icon class="mb-1"/>
            <span>{{ $t('header.nav.projects') }}</span></a></li>
        </ul>
      </div>
      <ul class="bg-white border-0 w-auto m-0 p-0 gap-3 text-base font-semibold hidden sm:flex">
        <!-- On Desktop (Mobile menu elements) -->
        <li class="flex items-center"><a href="#experiences" class="flex items-center gap-1">
          <briefcase-outline-icon class="mb-[0.75rem] text-4xl"/>
          <span>{{ $t('header.nav.experiences') }}</span></a></li>
        <li class="flex items-center"><a href="#projects" class="flex items-center gap-1">
          <hammer-wrench-icon class="mb-[0.75rem] text-4xl"/>
          <span>{{ $t('header.nav.projects') }}</span></a></li>
      </ul>
      <div class="h-full locale-changer m-0 p-0 focus:outline-none">
        <select class="h-auto m-0 my-[0.5rem] px-1 py-[0.5rem] text-base font-semibold capitalize border-1 border-solid rounded-box cursor-pointer"
                v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"
                  class="max-w-[1.5rem] m-0 p-0 capitalize">{{ locale }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import XmlIcon from 'vue-material-design-icons/Xml.vue'
import HammerWrenchIcon from 'vue-material-design-icons/HammerWrench.vue'
import BriefcaseOutlineIcon from 'vue-material-design-icons/BriefcaseOutline.vue'
import {RouterLink} from "vue-router"
</script>
