<template>
  <header class="navbar bg-base-100 shadow-sm">
    <div class="ms-4 p-0">
      <xml-icon class="text-5xl text-indigo-950"/>
    </div>

    <div class="flex grow justify-end gap-3 me-4">
      <div class="dropdown dropdown-center">
        <div tabindex="0" role="button"
             class="h-full text-base btn rounded-box p-2 sm:p-0 border-1 border-solid border-black bg-base-100">
          <menu-icon class="mb-1"/>
          <span>{{ $t('header.nav.menu') }}</span>
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content bg-base-100 rounded-box z-1 w-auto m-0 p-0 shadow-sm">
          <li><a>
            <briefcase-outline-icon class="mb-1"/>
            <span>{{ $t('header.nav.experiences') }}</span></a></li>
          <li class="border-t-1 border-solid"><a>
            <hammer-wrench-icon class="mb-1"/>
            <span>{{ $t('header.nav.projects') }}</span></a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-center">
        <div tabindex="0" role="button"
             class="h-full text-base btn rounded-box p-2 sm:p-0 border-1 border-solid border-black">
          <span>{{ $t('abbreviation') }}</span>
          <chevron-down-icon class="mb-1"/>
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content bg-base-200 rounded-box z-1 w-auto m-0 p-0 shadow-sm">
          <li>Fr</li>
          <li class="border-t-1 border-solid">En</li>
        </ul>
      </div>
    </div>

    <div class="locale-changer my-1 p-0 focus:bg-base-200">
      <select class="h-full m-0 p-2 text-base font-semibold capitalize border-1 border-solid rounded-box" v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="m-0 p-0 cursor-pointer">{{ locale }}</option>
      </select>
    </div>
  </header>
</template>

<script setup lang="js">
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import XmlIcon from 'vue-material-design-icons/Xml.vue'
import HammerWrenchIcon from 'vue-material-design-icons/HammerWrench.vue'
import BriefcaseOutlineIcon from 'vue-material-design-icons/BriefcaseOutline.vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'


</script>
