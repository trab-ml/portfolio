import { ref, computed } from "vue";

const loadingCount = ref(0);

export const isLoading = computed(() => loadingCount.value > 0);

export function startLoading() {
    loadingCount.value++;
}

export function stopLoading() {
    loadingCount.value--;
}
