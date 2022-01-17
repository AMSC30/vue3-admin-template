<script lang="ts">
import { defineComponent } from 'vue'
import { useDialog } from 'naive-ui'

export default defineComponent({
    name: 'MessageContent',
    setup() {
        window.$dialog = useDialog()
    }
})
</script>

<style lang="less" scoped></style>
