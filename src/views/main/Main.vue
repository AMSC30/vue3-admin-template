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
                <n-menu :on-update:value="handleMenuClick" :options="menuList" :value="$route.path" accordion />
            </n-layout-sider>
            <n-layout :native-scrollbar="false" content-style="padding: 15px;">
                <router-view></router-view>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import menuList from '@/constants/menu'

export default defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter()
        const handleMenuClick = (key: string) => {
            router.push(key)
        }
        return {
            menuList,
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
