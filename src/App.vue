<template>
  <div>
    <v-snackbar class="snackbar" :class="'snackbar-' + toast.color" transition="scroll-y-reverse-transition" text
      v-model="toast.show" :timeout="toast.timeout" top centered>
      <svg v-if="toast.color == 'warning'" width="20" height="18" viewBox="0 0 20 18" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.47012 18.0001H17.5301C19.0701 18.0001 20.0301 16.3301 19.2601 15.0001L11.7301 1.99005C10.9601 0.660054 9.04012 0.660054 8.27012 1.99005L0.740121 15.0001C-0.0298788 16.3301 0.930121 18.0001 2.47012 18.0001ZM10.0001 11.0001C9.45012 11.0001 9.00012 10.5501 9.00012 10.0001V8.00005C9.00012 7.45005 9.45012 7.00005 10.0001 7.00005C10.5501 7.00005 11.0001 7.45005 11.0001 8.00005V10.0001C11.0001 10.5501 10.5501 11.0001 10.0001 11.0001ZM11.0001 15.0001H9.00012V13.0001H11.0001V15.0001Z"
          fill="#FAC802" />
      </svg>
      <svg v-if="toast.color == 'error'" width="20" height="20" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C13.91 14.69 13.28 14.69 12.89 14.3L10 11.41L7.11 14.3C6.72 14.69 6.09 14.69 5.7 14.3C5.31 13.91 5.31 13.28 5.7 12.89L8.59 10L5.7 7.11C5.31 6.72 5.31 6.09 5.7 5.7C6.09 5.31 6.72 5.31 7.11 5.7L10 8.59L12.89 5.7C13.28 5.31 13.91 5.31 14.3 5.7C14.69 6.09 14.69 6.72 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z"
          fill="#FF4465" />
      </svg>
      <span>{{ toast.text }}</span>
    </v-snackbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "@vue/composition-api";
import store from "./store";

export default defineComponent({
  name: "App",
  setup() {
    const state = store.state;
    const toast = computed(() => state.toast);
    return {
      toast
    }
  }
})
</script>