<template>
    <section class="flex flex-col items-center sm:flex-row sm:items-start">
        <h1
            class="text-xl text-black px-2 font-bold sm:px-0 sm:w-1/3 sm:mt-4 md:w-full md:px-0 lg:text-3xl"
        >
            {{ $t("homepage.title.partOne") }} <br />
            <span class="font-light">{{ $t("homepage.title.partTwo") }}</span>
            <br />
            <span class="font-semi-bold">{{
                $t("homepage.title.partThree")
            }}</span>
        </h1>
        <div class="w-full mt-1 sm:w-2/3 sm:mt-12 md:w-full">
            <div class="mockup-code">
                <pre data-prefix="1"><code>const profile = {</code></pre>
                <pre
                    data-prefix="2"
                    class="text-info"
                ><code>"firstname": "{{ $t('homepage.firstname') }}",</code></pre>
                <pre
                    data-prefix="3"
                    class="text-info"
                ><code>"lastname": "{{ $t('homepage.lastname') }}",</code></pre>
                <pre
                    data-prefix="4"
                    class="text-warning"
                ><code>"job": "{{ $t('homepage.job') }}",</code></pre>
                <pre
                    data-prefix="5"
                    class="text-success"
                ><code>"status": {{ $t('homepage.status') }},</code></pre>
                <pre
                    data-prefix="6"
                    class="text-success"
                ><code>"mobility": "{{ $t('homepage.mobility') }}",</code></pre>
                <pre data-prefix="7"><code>}</code></pre>
            </div>
            <div class="flex gap-3 max-w-fit mx-auto mt-4">
                <a href="Bernard_T.(CV).pdf" download>
                    <button class="btn border rounded-md">
                        <file-download-outline-icon
                            class="mb-2 text-xl text-md-3xl"
                        />
                        {{ $t("homepage.downloadTheCV") }}
                    </button>
                </a>
                <a href="cv-qr-code.png" target="__blank">
                    <button
                        class="btn border rounded-md dark:text-amber-50 dark:bg-black"
                    >
                        <eye-outline-icon class="mb-2 text-xl text-md-3xl" />
                        {{ $t("homepage.qrCode") }}
                    </button>
                </a>
            </div>
        </div>
    </section>
    <Experiences />
    <Projects />
</template>

<script setup lang="ts">
import Experiences from "../molecules/Experiences.vue";
import Projects from "../molecules/Projects.vue";
import FileDownloadOutlineIcon from "icons/FileDownloadOutline.vue";
import EyeOutlineIcon from "icons/EyeOutline.vue";
import {awake} from "@/scripts/awake";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const projectsToAwake = tm("awake") as string[];

onMounted(async () => {
    awake(projectsToAwake);
});
</script>
