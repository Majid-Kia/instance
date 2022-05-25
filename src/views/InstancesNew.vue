<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col class="pr-2" cols="8">
                <v-card elevation="0" class="py-8">
                    <SelectRegion />
                    <SelectPlan />
                    <OperatingSystems />
                    <SSHKeysList />
                    <HostNameInput />
                </v-card>
            </v-col>
            <v-col class="pl-2" cols="4" style="position:relative;">
                <v-card elevation="0" class="px-5 py-8" style="position: sticky;top: 70px;">
                    <InstanceQuantityCounter />
                    <EnableIPv4 />
                    <v-divider></v-divider>
                    <div class="price-container my-6">
                        <h6 class="primary--text text-h6">Total</h6>
                        <h6 class="text-h6">
                            <span class="text-h5 primary--text font-weight-medium">$ 57.95</span>
                            <span class="grey--text lighten-1 text-body-1"> /month</span>
                        </h6>
                    </div>
                    <v-btn @click="showUserData" :disabled="deployBtnDisable"
                        :color="deployBtnDisable ? 'normal' : 'success'" large elevation="0" class="py-5"
                        :class="!deployBtnDisable && 'bg-success'" block>
                        <span :class="!deployBtnDisable ? 'text-white' : ''">DEPLOY NOW</span>
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from "@vue/composition-api";
import SelectRegion from "./components/SelectRegion.vue";
import SelectPlan from "./components/SelectPlan.vue";
import HostNameInput from "./components/HostNameInput.vue";
import EnableIPv4 from "./components/EnableIPv4.vue";
import InstanceQuantityCounter from "./components/InstanceQuantityCounter.vue";
import OperatingSystems from "./components/OperatingSystems.vue";
import SSHKeysList from "./components/SSHKeysList.vue";
import store from "@/store";
import { ToastsMutations } from "@/store/toast/mutations";

export default defineComponent({
    name: "InstancesNew",
    components: {
        SelectRegion,
        SelectPlan,
        HostNameInput,
        EnableIPv4,
        InstanceQuantityCounter,
        OperatingSystems,
        SSHKeysList,
    },
    setup() {
        const state = store.state;
        const deployBtnDisable = ref(true);
        const instances = computed(() => state.app.instances);

        const userData = ref({
            region: null,
            plan: null,
            os: null,
            sshList: null,
            hostName: null,
            quantity: null,
            ipv4: false
        });

        watch(instances.value, ({
            currentRegion,
            currentOS,
            currentPlan,
            hostName,
            sshList,
            quantity,
            ipv4
        }: any) => {
            const data = userData.value;
            data.region = currentRegion;
            data.os = currentOS;
            data.plan = currentPlan;
            data.hostName = hostName;
            data.sshList = sshList;
            data.quantity = quantity;
            data.ipv4 = ipv4;
        })

        watch(userData.value, ({ hostName, region, plan, os }) => {
            deployBtnDisable.value = !(hostName && region && plan && os);
        })

        const showUserData = () => {
            console.log(userData.value)
            store.commit(ToastsMutations.SET_TOAST, {
                color: "warning",
                text: "Check the inspector to see the log result",
                timeout: 5000,
                show: true
            })
        }

        document.title = "Cloudzy";
        return {
            showUserData,
            deployBtnDisable,
        }
    }
})
</script>


<style lang="scss">
.logo-box {
    min-width: 220px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: thin solid rgba(0, 0, 0, 0.12);
    margin-right: 32px;
}

.price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>