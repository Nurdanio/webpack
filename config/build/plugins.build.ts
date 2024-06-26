import {Configuration, DefinePlugin} from 'webpack';
import html from "html-webpack-plugin"
import {BuildOptions} from "./types/types"
import {BuildPaths} from './types/types'

export const pluginsBuild = (htmlPath: BuildPaths['html'], platform: BuildOptions["platform"]): Configuration['plugins']  => {
    return [
        new html({template: htmlPath}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ]
}