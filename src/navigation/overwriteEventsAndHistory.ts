import { loadApps } from '../application/apps'

const originalPushState = window.history.pushState
const originalReplaceState = window.history.replaceState

// 重写pushState、replaceState两个 API 和 监听两个事件
export default function overwriteEventsAndHistory() {
    window.history.pushState = function (state: any, title: string, url: string) {
        const result = originalPushState.call(this, state, title, url)
        // 根据当前 url 加载或卸载 app
        loadApps()
        return result
    }
    
    window.history.replaceState = function (state: any, title: string, url: string) {
        const result = originalReplaceState.call(this, state, title, url)
        loadApps()
        return result
    }
    
    window.addEventListener('popstate', () => {
        loadApps()
    }, true)
    
    // 监听 hashchange 事件
    window.addEventListener('hashchange', () => {
        loadApps()
    }, true)
}
