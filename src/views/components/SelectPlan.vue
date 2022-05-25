<template>
    <div>
        <h6 class="text-h6 primary--text px-8 mb-4">Plan</h6>
        <v-data-table :headers="headers" disable-sort :loading="loadingPlans" :items="allPlans" hide-default-footer
            class="elevation-0 mb-14">
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td class="px-4 py-2">
                            <v-radio-group v-model="radioGroup" v-ripple="false" class="my-2" hide-details>
                                <v-radio :value="item" color="#2C5EFF" class="justify-center">
                                </v-radio>
                            </v-radio-group>
                        </td>
                        <td class="primary--text font-weight-regular subtitle-2 px-4 py-2">
                            {{ item.specification.cpu }} CPU
                        </td>
                        <td class="primary--text font-weight-regular subtitle-2 px-4 py-2">
                            {{ item.specification.ram }} GB
                        </td>
                        <td class="primary--text font-weight-regular subtitle-2 px-4 py-2">
                            {{ item.specification.storage }} GB
                        </td>
                        <td class="primary--text font-weight-regular subtitle-2 px-4 py-2">
                            Up to 1 Gbps
                        </td>
                        <td
                            class="primary--text font-weight-regular subtitle-2 px-4 py-8 d-flex flex-row justify-space-between align-center">
                            <span>$ {{ item.monthlyPrice }}</span>
                            <v-tooltip bottom color="primary" :nudge-top="10">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon :color="item.disable ? 'grey' : 'primary'" dark v-bind="attrs" v-on="on">
                                        mdi-information-outline
                                    </v-icon>
                                </template>
                                <span>{{ item.hourlyPrice }}/hour</span>
                            </v-tooltip>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { PlansActions } from "@/store/plans/actions";
import { computed, defineComponent, onBeforeMount, ref, watch } from "@vue/composition-api";

export default defineComponent({
    name: "SelectPlan",
    setup() {
        const state = store.state;
        const allPlans = computed(() => state.plans.all);
        const loadingPlans = computed(() => state.plans.loading);
        const radioGroup = ref(null);
        onBeforeMount(() => {
            store.dispatch(PlansActions.GET_PLANS);
        });
        watch(radioGroup, (val) => {
            store.commit(MutationApp.SET_CURRENT_PLAN, val)
        })
        return {
            allPlans,
            loadingPlans,
            radioGroup,
            headers: [
                {
                    text: '',
                    align: 'center',
                    value: 'id',
                },
                { text: 'Memory' },
                { text: 'CPU' },
                { text: 'Storage' },
                { text: 'Connection speed' },
                { text: 'Monthly price' },
            ],
        }
    }
})
</script>

<style>
</style>