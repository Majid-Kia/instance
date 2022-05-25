<template>
    <div>
        <div class="text-body-2 primary--text mb-1">Instance quantity:</div>
        <div class="ip-counter-container">
            <div elevation="0" @click="decrease" class="btn btn-reduce text-subtitle-1 text-grey-darken-1">
                <v-icon>mdi-minus</v-icon>
            </div>
            <div type="number" class="rounded-0 counter text-body-2 text-primary">
                {{ count }}
            </div>
            <div elevation="0" @click="increase" class="btn btn-add text-subtitle-1 text-grey-darken-1">
                <v-icon>mdi-plus</v-icon>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationApp } from "@/store/app/mutations";
import { ToastsActions } from "@/store/toast/actions";
import { ToastsMutations } from "@/store/toast/mutations";
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
    setup() {
        const count = ref(1);
        const decrease = () => {
            count.value -= 1;
        }
        const increase = () => {
            count.value += 1;
        }
        watch(count, (val) => {
            if (count.value > 10) {
                count.value = 10;
                store.commit(ToastsMutations.SET_TOAST, {
                    color: "error",
                    show: true,
                    text: "Instance Quantity can't be more than 10",
                    timeout: 4000
                })
            }
            if (count.value < 1) {
                count.value = 1;
                store.commit(ToastsMutations.SET_TOAST, {
                    color: "error",
                    show: true,
                    text: "Instance Quantity can't be less than 1",
                    timeout: 4000
                })
            }
            store.commit(MutationApp.SET_QUANTITY, val)
        })
        return {
            increase,
            decrease,
            count
        }
    }
})
</script>

<style lang="scss">
.ip-counter-container {
    display: flex;
    align-items: center;
    justify-content: center;

    div.counter {
        width: 60%;
        text-align: center;
        padding: 10px 8px;
        border: 1.5px solid rgba(0, 0, 0, 0.12);
        user-select: none;
    }

    div.btn {
        cursor: pointer;
        padding: 8px;
        width: 20%;
        height: 100%;
        border: 1.5px solid rgba(0, 0, 0, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;

        &-reduce {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-right: 0;
        }

        &-add {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            border-left: 0;
        }

        &-disable {
            cursor: not-allowed;

            i {
                color: rgba(0, 0, 0, 0.26);
            }
        }
    }
}
</style>