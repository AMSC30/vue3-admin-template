import { create, NButton, NLayout, NLayoutHeader, NLayoutSider } from 'naive-ui'
import { App } from 'vue'

const naive = create({
    components: [NButton, NLayout, NLayoutHeader, NLayoutSider]
})

export default function (app: App) {
    app.use(naive)
}
