import { isPromise } from 'src/utils/utils'
import { Application, AppStatus } from '../types'

export default function mountApp(app: Application): Promise<any> {
    app.status = AppStatus.BEFORE_MOUNT
    // 加载子应用前赋值给挂载的 DOM
    app.container.innerHTML = app.pageBody
    
    let result = (app as any).mount({ props: app.props, container: app.container })
    if (!isPromise(result)) {
        result = Promise.resolve(result)
    }
    
    return result
    .then(() => {
        app.status = AppStatus.MOUNTED
    })
    .catch((err: Error) => {
        app.status = AppStatus.MOUNT_ERROR
        throw err
    })
}