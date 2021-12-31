<template>
    <n-layout style="height: 100%">
        <n-layout-header bordered style="height: 64px; padding: 24px">颐和园路</n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 0">
            <n-layout-sider :native-scrollbar="false" bordered content-style="padding: 24px;">
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
                <n-h2>海淀桥</n-h2>
            </n-layout-sider>
            <n-layout :native-scrollbar="false" content-style="padding: 24px;">
                <router-view></router-view>
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home'
})
</script>
