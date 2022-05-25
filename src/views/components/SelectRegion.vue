<template>
    <div class="px-8 pb-14">
        <h6 class="text-h6 primary--text mb-4">Region</h6>
        <v-row>
            <v-col class="px-2" md="4" v-for="region in regions" :key="region.id">
                <v-card @click="selectRegion(region.id)" class="d-flex align-center py-4 px-3 disable-grey-overlay"
                    :class="region.checked ? 'border-color-active' : 'border-color-disable'"
                    :elevation="region.checked ? 2 : 0">
                    <img :class="region.checked ? '' : 'greyscale-mode'" :src="region.img" width="40">
                    <span :class="region.checked ? 'primary--text' : 'grey--text'"
                        class="ml-3 body-1 font-weight-medium">
                        {{ region.name }}
                    </span>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
    name: "SelectRegion",
    setup() {
        const selectRegion = (id: number) => {
            regions.value.filter(region => region.id == id ? region.checked = true : region.checked = false);
        };
        const regions = ref<{
            id: number,
            name: string,
            img: any,
            checked: boolean
        }[]>([
            {
                id: 0,
                name: "Germany",
                img: require("../../assets/regions/germany.png"),
                checked: false,
            },
            {
                id: 1,
                name: "Los Angeles",
                img: require("../../assets/regions/united-states.png"),
                checked: false
            },
            {
                id: 2,
                name: "Singapore",
                img: require("../../assets/regions/singapore.png"),
                checked: false
            },
        ]);
        watch(regions.value, async (val) => {
            await val.map((region: any) => {
                if (region.checked) {
                    store.commit(MutationApp.SET_CURRENT_REGION, region)
                }
            })
        })
        return {
            selectRegion,
            regions
        }
    }
})
</script>

<style lang="scss" scoped>
.border-color {
    &-active {
        border: 2px solid #2C5EFF !important;
    }

    &-disable {
        border: 2px solid rgba(0, 0, 0, 0.12) !important;
    }
}

.greyscale-mode {
    filter: grayscale(1) brightness(2);
}

.disable-grey-overlay::before {
    background: none !important;
}
</style>