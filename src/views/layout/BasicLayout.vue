<template>
    <n-layout style="height: 100%">
        <n-layout-header bordered style="height: 64px; padding: 10px">
            <div class="flex flex-h-end flex-v-center h-100-p">
                <img alt="avatar" class="avatar" src="@/assets/images/avatar.png" />
                <n-ellipsis class="m-l-10" style="max-width: 80px">AMSC30</n-ellipsis>
            </div>
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 0">
            <n-layout-sider :native-scrollbar="true" bordered content-style="padding: 15px;">
                <n-menu :on-update:value="handleMenuClick" :options="menuOptions" :value="$route.path" accordion />
            </n-layout-sider>
            <n-layout :native-scrollbar="false" content-style="padding: 15px;">
                <router-view></router-view>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import { getService } from '@/plugins/axios'
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from 'naive-ui'

export default defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter()
        const menuOptions = [
            {
                key: '/test1',
                label: 'test1',
                children: [
                    { key: '/test-1', label: 'test1-1' },
                    { key: '/test-2', label: 'test1-2' }
                ]
            },
            {
                key: '/test2',
                label: 'test2',
                children: [
                    { key: '/test-1', label: 'test2-1' },
                    { key: '/test-2', label: 'test2-2' }
                ]
            }
        ]
        const handleMenuClick = (key: string) => {
            router.push(key)
        }
        onMounted(() => {
            const notification = useNotification()
            console.log(notification)
            notification.success({
                content: '说点啥呢',
                meta: '想不出来'
            })

            getService('/ci/auth/session/userInfo', {})
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        })
        return {
            menuOptions,
            handleMenuClick
        }
    }
})
</script>

<style lang="less" scoped>
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
