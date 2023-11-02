import DefaultTheme from 'vitepress/theme'
import { install } from 'element-plus'
import 'element-plus/dist/index.css'
import './custom.css'

const modules = import.meta.globEager('./components/*.vue')

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        install(app)
        Object.entries(modules).forEach(([path, component]) => {
            const name = path.match(/\.\/components\/(.*)\.vue$/)[1]
            app.component(name, component.default)
        })
    }
}