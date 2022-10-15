# mx-single-spa
一个微前端demo

## v1功能点

- 监听页面 URL 变化，切换子应用
- 根据当前 URL、子应用的触发规则来判断是否要加载、卸载子应用
  
## Examples
所有示例均在 examples 目录下。
### simple example
```
pnpm dev
```
构建后，使用 vscode live server 插件（或别的本地服务器）打开 simple.html

```
src/
├── application
│   ├── apps.ts                     // 真正调用卸载和加载大文件
│   └── registerApplication.ts      // 注册子应用
├── index.ts
├── lifecycle
│   ├── bootstrap.ts                // 调用 registerApplication() 注册一个子应用后，它的状态默认为 bootstrap，下一个转换状态为 mount
│   ├── mount.ts                    // 子应用挂载成功后的状态，它的下一个转换状态为 unmount
│   └── unmount.ts                  // 子应用卸载成功后的状态，它的下一个转换状态为 mount，即卸载后的应用可再次加载
├── navigation
│   └── overwriteEventsAndHistory.ts    // 重写两个 API 和监听两个事件
├── start.ts                        // 初始化子应用
├── types.ts
└── utils
    └── utils.ts
```