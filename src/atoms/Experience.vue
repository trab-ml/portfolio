<template>
  <li>
    <hr v-if="index > 0"/>
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
    <div :class="`${style} p-2 border-1 rounded-box hover:bg-gray-100 hover:cursor-pointer`" @click="handleClick">
      <time class="font-mono italic">{{ `${experience.startDate} - ${experience.endDate}` }}</time>
      <div class="text-lg font-black">{{ experience.title }}</div>
      {{ experience.description }}
    </div>
    <hr/>
  </li>
  <dialog :id="modalId" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
      <button
          class="p-1 text-3xl text-red-600 font-light btn btn-sm btn-circle btn-ghost hover:font-semibold absolute right-2 top-2"
          @click="closeModal">X
      </button>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  index: number,
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate: string | null;
    period: string;
    description: string;
    technologies: string[];
  },
  style: string
}>();

const modalId = ref(`modal-${props.index}`)

const handleClick = () => {
  const modal = document.getElementById(modalId.value) as HTMLDialogElement
  modal?.showModal()
}

const closeModal = () => {
  const modal = document.getElementById(modalId.value) as HTMLDialogElement
  modal?.close()
}
</script>

<style scoped></style>