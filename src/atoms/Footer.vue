<template>
    <footer
        id="footer"
        class="max-h-24 flex justify-center gap-4 border-t sm:text-xl bg-base-100 dark:bg-(--dark-mode-main-bg-color) dark:text-(--dark-mode-main-text-color)"
    >
        <a
            :href="`tel:${$t('homepage.footer.contact.phone')}`"
            class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"
            ><phone-icon class="me-1 mt-1" />{{
                $t("homepage.footer.contact.phone")
            }}</a
        >
        <a
            :href="`mailto:${$t('homepage.footer.contact.email')}`"
            class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"
            ><email-outline-icon class="me-1 mt-1" />{{
                $t("homepage.footer.contact.email")
            }}</a
        >
        <a
            :href="`${$t('homepage.footer.contact.linkedin')}`"
            class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"
            target="_blank"
            ><linkedin-icon class="me-1 mt-1" />Linkedin</a
        >
        <a
            :href="`${$t('homepage.footer.contact.github')}`"
            class="flex flex-col items-center text-[0.75rem] sm:block cursor-pointer hover:font-semibold hover:underline sm:text-lg"
            target="_blank"
            ><github-icon class="me-1 mt-1" />Github</a
        >
    </footer>
</template>

<script setup lang="ts">
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailOutlineIcon from "vue-material-design-icons/EmailOutline.vue";
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";
</script>
