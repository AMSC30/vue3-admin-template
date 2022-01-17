<script lang="ts">
import { defineComponent } from 'vue'
import { NotificationOptions, useNotification } from 'naive-ui'
import type { NoticeType } from '../types'

export default defineComponent({
    name: 'MessageContent',
    setup() {
        const notification = useNotification()
        window['$notice'] = (type: NoticeType, config?: NotificationOptions) => {
            return notification[type]({
                duration: 1500,
                ...config
            })
        }
    }
})
</script>

<style lang="less" scoped></style>
