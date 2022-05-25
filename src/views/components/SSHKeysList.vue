<template>
    <div class="px-8">
        <h6 class="text-h6 primary--text mb-4">
            SSH Key
            <span class="text-subtitle-1 text-grey">(optional)</span>
        </h6>
        <v-row class="mb-14">
            <v-col @click="addNewSSHKey()" style="cursor:pointer;" cols="4">
                <v-hover v-slot="{ hover }">
                    <v-card class="bg-white custom-add-ssh pa-5 text-primary custom-border-ssh"
                        :elevation="hover ? 2 : 0">
                        <v-icon class="mr-2" color="primary" style="font-size:1.6rem;">mdi-plus-circle-outline</v-icon>
                        <span class="text-body-1 font-weight-medium">Add New</span>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="4" v-for="item in list" :key="item.id">
                <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 3 : 0" class="custom-check-ssh pa-5 text-primary custom-border-ssh">
                        <div style="display:flex;align-items:center;justify-content:space-between;column-gap:10px;">
                            <v-checkbox v-model="item.checked" :label="item.name" hide-details class="ma-0 pa-0"
                                color="primary">
                            </v-checkbox>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on" color="primary">
                                        mdi-information-outline
                                    </v-icon>
                                </template>
                                <span>{{ item.name }}</span>
                            </v-tooltip>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
    setup() {
        let count = 3;
        const list = ref<{
            name: string;
            id: number;
            checked: boolean;
        }[]>([]);
        const addNewSSHKey = () => {
            count += 1;
            list.value.push({
                id: count,
                name: "Key Name " + count,
                checked: false
            })
        }
        for (var i = 1; i <= count; i++) {
            list.value.push({
                id: i,
                name: "Key Name " + i,
                checked: false,
            });
        }
        store.commit(MutationApp.SET_SSH_KEY, list.value);
        watch(list.value, (val) => {
            store.commit(MutationApp.SET_SSH_KEY, val);
        })
        return {
            list,
            addNewSSHKey
        }
    }
})
</script>

<style>
.custom-border-ssh {
    border: 1.5px solid rgba(0, 0, 0, 0.12) !important;
}
</style>