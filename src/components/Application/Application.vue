<template>
    <n-dialog-provider>
        <DialogContent />
        <n-notification-provider :max="5">
            <NoticeContent />
            <n-message-provider>
                <MessageContent />
                <slot></slot>
            </n-message-provider>
        </n-notification-provider>
    </n-dialog-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MessageContent from './components/MessageContent.vue'
import DialogContent from './components/DialogContent.vue'
import NoticeContent from './components/NoticeContent.vue'

export default defineComponent({
    name: 'Application',
    components: { MessageContent, DialogContent, NoticeContent },
    setup() {
        return {}
    }
})
</script>
