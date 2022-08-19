# vite-plugin-interceptor

中文 | [English](./readme.md)

一款基于service worker在**开发环境**中用于拦截并修改请求的vite插件。

> 浏览器需要支持service worker

> 生产环境可以借助浏览器插件[easy-interceptor](https://github.com/hans000/easy-interceptor)

## 使用方法

```
npm i -D vite-plugin-interceptor
```
// 在vite.config.ts
```

import interceptor from 'vite-plugin-interceptor'

export default defineConfig({
    plugins: [
        // interceptor()
        // or
        interceptor({
            input: 'src/index.ts', // 默认src/main.ts
            mockDir: '__mock__',   // 默认mock
        }),
    ]
})
```
// __mock__目录下新建ts或js文件，必须使用默认导出，使用暴露的api来设置规则
```
export default function() {
    window.__INTERCEPTOR_DEVTOOL__.set(
        '1',
        {
            url: '**/tsconfig.json',
            method: 'get',
            response: '{"foo":"test"}',
            // enable: false,
            // delay: 5000,
        }
    )
}

```

## API

### \_\_INTERCEPTOR_DEVTOOL\_\_

|属性|说明|类型|备注|
|:--:|:---|:---|:---|
|get|获取规则|()=>Promise|
|set|设置规则|(id, rule) => void|
|clear|清除所有规则|()=>void|

### InterceptorRule
|属性|说明|类型|备注|
|:--|:---|:---|:---|
|url|匹配url|string|必填
|response|返回数据|string|必填
|delay|请求延迟|number|0
|enable|是否启用此规则|boolean|true
|method|请求方法|`get` `post` `put` `delete`|
|responseHeaders|响应头|Record<string, string>|{}
|status|状态码|number|200


> vite2.0 报类型错误是由于vite接口改变，可以强制 `as any as Plugin` 解决

> 关于多页面项目，sw.js的scope设置的是`./`，因此其实是支持多页面的，只不过需要先加载一下配置的页面，使脚本生效。

## LICENSE
[MIT](./LICENSE)