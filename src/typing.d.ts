
interface InterceptRule {
    /**
     * match request url
     */
    url: string;
    /**
     * match request method
     */
    method?: 'post' | 'get' | 'put' | 'delete'
    /**
     * mock response text
     */
    response: string
    /**
     * enable this rule, default true
     */
    enable?: boolean
    /**
     * delay response handle, default 0
     */
    delay?: number
    /**
     * mock response header, default {}
     */
    responseHeaders?: Record<string, string>
    /**
     * mock response status, defalut 200
     */
    status?: number
}

interface Window {
    __INTERCEPTOR_DEVTOOL__: {
        /**
         * get rules
         */
        get: () => Promise<InterceptRule[]>
        /**
         * set a rule
         * @param id be used as key
         * @param rule a rule
         * @description if rule is null or undefined, it will remove rule by id
         */
        set: (id: string, rule?: InterceptRule | null) => Promise<void>
        /**
         * clear all rules
         */
        clear: () => Promise<void>
    }
}