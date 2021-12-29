import { create, NButton } from 'naive-ui'
import { App } from 'vue'

const naive = create({
    components: [NButton]
})

export default function (app: App) {
    app.use(naive)
}
