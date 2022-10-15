import overwriteEventsAndHistory from './navigation/overwriteEventsAndHistory'
export { default as registerApplication } from './application/registerApplication'
export { default as start } from './start'

declare const window: any

// 是否运行在 single spa 下
window.__IS_SINGLE_SPA__ = true

// 重写pushState\replaceState这两个 API。
// 当这两个 API 被 SPA 应用调用时，说明 URL 发生了变化，这时就可以根据当前已改变的 URL 判断是否要加载、卸载子应用
overwriteEventsAndHistory()