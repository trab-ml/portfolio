<template>
    <li>
        <hr v-if="index > 0" />
        <div class="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div
            :class="`${style} md:mb-10 p-2 border rounded-box hover:bg-gray-100 hover:cursor-pointer dark:bg-black dark:text-white dark:hover:bg-(--dark-mode-secondary-bg-color)`"
            @click="handleClick"
        >
            <time class="font-mono italic">{{
                `${experience.startDate} - ${experience.endDate}`
            }}</time>
            <div class="text-lg font-black">{{ experience.title }}</div>
        </div>
        <hr />
    </li>
    <dialog :id="modalId" class="modal">
        <div class="modal-box dark:bg-black dark:text-white">
            <h3 class="text-md font-semibold md:text-lg">
                {{ experience.title }} -

                <a
                    v-if="experience.companyWebsite"
                    :href="experience.companyWebsite"
                    target="_blank"
                    class="cursor-pointer"
                    ><span
                        class="underline underline-offset-2 hover:no-underline text-sm font-normal md:text-md"
                        >{{ experience.company }}</span
                    ></a
                >
                <span v-else class="text-sm font-normal md:text-md">{{
                    experience.company
                }}</span>

                <span class="text-xs font-normal md:text-sm">
                    ({{ experience.period }})</span
                >
            </h3>
            <div class="py-1">
                <span
                    v-for="(tech, idx) in randomTechnologies"
                    :key="idx"
                    class="badge badge-sm badge-neutral mr-1 md:badge-md"
                    >{{ tech }}</span
                >
            </div>
            <p class="text-sm md:text-lg py-1">{{ experience.description }}</p>
            <button
                class="p-1 text-3xl text-red-600 font-light btn btn-sm btn-circle btn-ghost hover:font-semibold absolute right-2 top-2"
                @click="closeModal"
            >
                X
            </button>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type TInternShip } from "../types/utils.ts";

const props = defineProps<{
    index: number;
    experience: TInternShip;
    style: string;
}>();

const modalId = ref(`modal-${props.index}`);

const handleClick = () => {
    const modal = document.getElementById(modalId.value) as HTMLDialogElement;
    modal?.showModal();
};

const closeModal = () => {
    const modal = document.getElementById(modalId.value) as HTMLDialogElement;
    modal?.close();
};

const randomTechnologies = () => {
    return props.experience.technologies
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
};
</script>
