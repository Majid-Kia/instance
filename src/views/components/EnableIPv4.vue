<template>
    <div>
        <v-checkbox class="my-6 checkbox-label-opacity" v-model="enableIP4" color="primary" hide-details>
            <template v-slot:label>
                <span class="text-primary text-body-1">Enable Ip4</span>
            </template>
        </v-checkbox>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
    setup() {
        const enableIP4 = ref(false);
        store.commit(MutationApp.SET_IPV4, false);
        watch(enableIP4, (val) => {
            store.commit(MutationApp.SET_IPV4, val);
        })
        return { enableIP4 }
    }
})
</script>