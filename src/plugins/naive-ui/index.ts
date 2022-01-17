import {
    create,
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NConfigProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NMenu,
    NAvatar,
    NEllipsis
} from 'naive-ui'
import { App } from 'vue'

const naive = create({
    components: [
        NButton,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        NMenu,
        NAvatar,
        NEllipsis,
        NConfigProvider,
        NDialogProvider,
        NNotificationProvider,
        NMessageProvider
    ]
})

export default function (app: App) {
    app.use(naive)
}
