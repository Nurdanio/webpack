import { resolve } from 'path';
import { Configuration } from 'webpack';

import { buildWebpack } from './config/build/buildWebpack'
import { BuildOptions } from './config/build/types/types'

const config = (env: BuildOptions): Configuration => {
    const configPaths = {
        html: resolve(__dirname, "public", "index.html"),
        entry: resolve(__dirname, "src", "index.tsx"),
        output: resolve(__dirname, 'dist'),
        src: resolve(__dirname, 'src')
    }

    return buildWebpack({
        ...env,
        mode: env.mode ?? "development",
        platform: env.platform ?? "desktop", 
        paths: configPaths
    })
}

export default config;