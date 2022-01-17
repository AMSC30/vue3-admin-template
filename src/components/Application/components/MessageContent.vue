<script lang="ts">
import { defineComponent } from 'vue'
import { MessageOptions, useMessage } from 'naive-ui'
import type { MessageType } from '../types'

export default defineComponent({
    name: 'MessageContent',
    setup() {
        const message = useMessage()
        window['$message'] = (type: MessageType, content: string, config: MessageOptions) => {
            return message[type](content, {
                ...config,
                duration: 1500
            })
        }
    }
})
</script>

<style lang="less" scoped></style>
