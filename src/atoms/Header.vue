<template>
  <header>
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Code Icon</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <!-- On Mobile -->
            <details class="dropdown">
              <summary>Menu</summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 shadow-sm">
                <li><a>Experiences</a></li>
                <li><a>Projects</a></li>
              </ul>
            </details>
          </li>
          <li>
            <button class="btn" popovertarget="lang-popover" style="anchor-name:--lang-anchor">
              Fr v
            </button>
            <ul class="dropdown menu w--52 rounded-box bg-base-100 shadow-sm mx-2"
                popover id="lang-popover" style="position-anchor:--lang-anchor">
              <li><a>Fr</a></li>
              <li><a>En</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="js">
import MenuIcon from 'vue-material-design-icons/Menu.vue'
</script>
