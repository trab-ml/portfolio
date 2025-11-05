<template>
  <footer id="footer" class="max-h-24 flex justify-center gap-4 border-t-1 sm:text-xl">
    <a :href="`tel:${myContactInfos.phone}`" class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"><phone-icon class="me-1 mt-1"/>{{myContactInfos.clearerPhone}}</a>
    <a :href="`mailto:${myContactInfos.email}`" class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"><email-outline-icon class="me-1 mt-1"/>{{myContactInfos.email}}</a>
    <a :href="`${myContactInfos.linkedin}`" class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"><linkedin-icon class="me-1 mt-1"/> Linkedin</a>
    <a :href="`${myContactInfos.github}`" class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg" target="_blank"><github-icon class="me-1 mt-1"/> Github</a>
  </footer>
</template>

<script setup lang="ts">
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue'
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue'
import GithubIcon from 'vue-material-design-icons/Github.vue'

const myContactInfos = {
  phone: "+33753855479",
  clearerPhone: "+33753855479",
  email: "btra2420@gmail.com",
  linkedin: "https://www.linkedin.com/in/bernard-traor%C3%A9-8764621b9/",
  github: "https://github.com/trab-ml"
}
</script>
