navigator.serviceWorker.register('./sw000.js', { scope: './' })

!(function(window, modules) {
    let getResolve;
    let setResolve;
    let clearResolve;
    
    const handleMap = {
        __INTERCEPTOR_DEVTOOL_SW_GET__(payload) {
            getResolve(payload)
        },
        __INTERCEPTOR_DEVTOOL_SW_SET__() {
            setResolve()
        },
        __INTERCEPTOR_DEVTOOL_SW_CLEAR__() {
            clearResolve()
        },
    }
    
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && typeof event.data === 'object') {
            const { type, payload } = event.data
            const handle = handleMap[type]
            if (handle) {
                handle(payload)
            }
        }
    })

    navigator.serviceWorker.ready.then(() => {
        const postMessage = (message) => navigator.serviceWorker.controller.postMessage(message)

        // expose api on window
        Object.defineProperty(window, '__INTERCEPTOR_DEVTOOL__', {
            value: Object.freeze({
                get() {
                    postMessage({
                        type: '__INTERCEPTOR_DEVTOOL_GET__',
                    })
                    return new Promise((resolve) => {
                        getResolve = resolve
                    })
                },
                set(id, rule) {
                    postMessage({
                        type: '__INTERCEPTOR_DEVTOOL_SET__',
                        payload: {
                            id,
                            rule,
                        },
                    })
                    return new Promise((resolve) => {
                        setResolve = resolve
                    })
                },
                clear() {
                    postMessage({
                        type: '__INTERCEPTOR_DEVTOOL_CLEAR__',
                    })
                    return new Promise((resolve) => {
                        clearResolve = resolve
                    })
                }
            }),
            enumerable: false,
            configurable: false,
            writable: false,
        })

        // run mock script, create a macrotask to avoid the error. (postMessage is undefined ??)
        setTimeout(() => {
            Object.keys(modules).forEach(key => {
                const handle = modules[key].default
                if (handle) {
                    handle()
                } else {
                    console.error('must use export default in', key)
                }
            })
        })
    })


})(window, __moduleMap__);