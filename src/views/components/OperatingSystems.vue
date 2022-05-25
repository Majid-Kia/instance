<template>
    <div class="px-8">
        <h6 class="text-h6 primary--text mb-4">Operating System</h6>
        <v-row class="mb-14">
            <v-col style="padding:10px;" cols="4" v-for="os in operatingSystems" :key="os.id">
                <v-card :elevation="currentOS.osId == os.id ? 2 : 0"
                    class="border mt-1 d-flex flex-column justify-center"
                    :class="currentOS.osId == os.id ? 'border-active' : ''" style="padding:16px;">
                    <div class="d-flex align-center mb-4">
                        <img :src="os.img" width="40" class="mr-5">
                        <span class="primary--text text-body-1 font-weight-medium">{{ os.name }}</span>
                    </div>
                    <v-select :items="os.versions" class="text-caption-2" hide-details label="Select Version" outlined
                        dense v-model="currentOS" return-object>
                    </v-select>
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
    setup() {
        const currentOS = ref({
            osId: 0
        });

        watch(currentOS, (val) => {
            store.commit(MutationApp.SET_CURRENT_OS, val);
        })
        return {
            currentOS,
            operatingSystems: [
                {
                    id: 1,
                    name: "Windows",
                    img: require("../../assets/os/windows.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 1,
                            text: "2019",
                            value: "Windows 2019",
                        },
                        {
                            osId: 1,
                            text: "2016",
                            value: "Windows 2016",
                        },
                        {
                            osId: 1,
                            text: "2012-R2",
                            value: "Windows 2012-R2",
                        },
                        {
                            osId: 1,
                            text: "2012",
                            value: "Windows 2012",
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Ubuntu",
                    img: require("../../assets/os/ubuntu.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 2,
                            text: "21.10",
                            value: "Ubuntu 21.10",
                        },
                        {
                            osId: 2,
                            text: "20.04",
                            value: "Ubuntu 20.04",
                        },
                        {
                            osId: 2,
                            text: "19.10",
                            value: "Ubuntu 19.10",
                        },
                        {
                            osId: 2,
                            text: "18.04",
                            value: "Ubuntu 18.04",
                        }
                    ]
                },
                {
                    id: 3,
                    name: "CentOS",
                    img: require("../../assets/os/centos.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 3,
                            text: "7.6-1810",
                            value: "CentOS 7.6-1810",
                        },
                        {
                            osId: 3,
                            text: "7.5-1804",
                            value: "CentOS 7.5-1804",
                        },
                        {
                            osId: 3,
                            text: "7.2-1511",
                            value: "CentOS 7.2-1511",
                        },
                        {
                            osId: 3,
                            text: "7.1-1503",
                            value: "CentOS 7.1-1503",
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Debian",
                    img: require("../../assets/os/debian.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 4,
                            text: "10.0",
                            value: "Debian 10.0",
                        },
                        {
                            osId: 4,
                            text: "9.0",
                            value: "Debian 9.0",
                        },
                        {
                            osId: 4,
                            text: "8.0",
                            value: "Debian 8.0",
                        },
                        {
                            osId: 4,
                            text: "7.0",
                            value: "Debian 7.0",
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Fedora",
                    img: require("../../assets/os/fedora.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 5,
                            text: "32",
                            value: "Fedora 31",
                        },
                        {
                            osId: 5,
                            text: "31",
                            value: "Fedora 31",
                        },
                        {
                            osId: 5,
                            text: "30",
                            value: "Fedora 30",
                        },
                        {
                            osId: 5,
                            text: "29",
                            value: "Fedora 29",
                        }
                    ]
                },
                {
                    id: 6,
                    name: "FreeBSD",
                    img: require("../../assets/os/freebsd.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 6,
                            text: "9",
                            value: "FreeBSD 9",
                        },
                        {
                            osId: 6,
                            text: "7",
                            value: "FreeBSD 7",
                        },
                        {
                            osId: 6,
                            text: "5",
                            value: "FreeBSD 5",
                        },
                        {
                            osId: 6,
                            text: "4",
                            value: "FreeBSD 4",
                        }
                    ]
                },
                {
                    id: 7,
                    name: "Rocky",
                    img: require("../../assets/os/rocky.png"),
                    disable: true,
                    versions: [
                        {
                            osId: 7,
                            text: "8.6",
                            value: "Rocky 8.6",
                        },
                        {
                            osId: 7,
                            text: "8.5",
                            value: "Rocky 8.5",
                        },
                        {
                            osId: 7,
                            text: "8.4",
                            value: "Rocky 8.4",
                        },
                    ]
                }
            ]
        }

    }
})
</script>

<style lang="scss" scoped>
.border {
    border: 1.5px solid rgba(0, 0, 0, 0.12);

    &-active {
        border: 1.5px solid #2C5EFF;
    }
}
</style>