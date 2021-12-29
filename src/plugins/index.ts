import { App } from 'vue'
import NaiveUI from './naive-ui/index'

const plugins = [NaiveUI]

export default function (app: App) {
    plugins.forEach((plugin) => {
        app.use(plugin)
    })
}
