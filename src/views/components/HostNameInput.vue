<template>
    <div class="px-8">
        <h6 class="text-h6 primary--text mb-4">Hostname</h6>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="hostName" label="Host Name" outlined dense hide-details>
                </v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
    name: "HostNameInput",
    setup() {
        const hostName = ref("");
        watch(hostName, (val) => {
            store.commit(MutationApp.SET_HOST_NAME, val)
        })
        return {
            hostName
        }
    }
});
</script>

<style>
</style>