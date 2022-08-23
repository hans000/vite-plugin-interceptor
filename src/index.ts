import { Connect, PluginOption } from 'vite'
import fs from 'fs'
import path from 'path'
import * as http from 'http'

function handle(id: string, code: string, mockDir?: string) {
    const scriptText = fs.readFileSync(path.resolve(__dirname, './scripts/inject.js')).toString()
    console.log(`[${pluginName}] intercept successfully ${id}`)
    
    return `
// #region vite-plugin-interceptor generate
const __moduleMap__ = import.meta.globEager('/${mockDir || 'mock'}/**/*.(t|j)s')
${scriptText}
// #endregion

${code}
`
}

const pluginName = 'vite-plugin-interceptor'

interface Options {
    /** entry, default main.ts */
    input?: string
    /** mock dir, defalut mock */
    mockDir?: string
}

export default function interceptor(options: Options = {}): PluginOption {
    return {
        name: pluginName,
        apply: 'serve',
        transform(code, id) {
            let input = options.input || 'src/main'
            
            id = path.normalize(id)
            input = path.normalize(input)
            input = path.isAbsolute(input) ? input : path.join(process.cwd(), input)

            if (! path.extname(input)) {
                const exts = ['.tsx', '.ts', '.jsx', '.mjs', '.js']
                for(let ext of exts) {
                    if (input + ext === id) {
                        return handle(id, code, options.mockDir)
                    }
                }
            } else if (input === id) {
                return handle(id, code, options.mockDir)
            }
            return code
        },
        configureServer(server) {
            return () => {
                server.middlewares.use((req: Connect.IncomingMessage, res: http.ServerResponse, next: Connect.NextFunction) => {
                    const scriptText = fs.readFileSync(path.resolve(__dirname, './scripts/sw000.js')).toString()
                    if (req.url === '/sw000.js') {
                        res.writeHead(200, {
                            'Content-Type': 'application/javascript'
                        })
                        res.end(scriptText)
                    } else {
                        next()
                    }
                })
            }
        },
    }
}