<template>
    <NConfigProvider>
        <ApplicationProvider>
            <router-view />
        </ApplicationProvider>
    </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ApplicationProvider from '@/components/Application/index'
export default defineComponent({
    name: 'APP',
    components: { ApplicationProvider }
})
</script>

<style lang="less">
#app {
    height: 100%;
}
</style>
