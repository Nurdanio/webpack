import path from 'path';
import {Configuration} from 'webpack';

import {devServerBuild} from "./devServer.build" 
import {moduleBuild} from "./module.build"
import {pluginsBuild} from './plugins.build'
import {resolveBuild} from './resolve.build'

import {BuildOptions} from './types/types'

export const buildWebpack = ({port, mode, paths, platform}: BuildOptions): Configuration => {
    // console.log(platform)
    
    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output:     {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true 
        },
        plugins: pluginsBuild(paths.html, platform),
        resolve: resolveBuild(paths.src),
        module: moduleBuild(),
        devServer: devServerBuild(port),
    }    
}