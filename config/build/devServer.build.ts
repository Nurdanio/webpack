import type {Configuration as DevServerConfig} from "webpack-dev-server";
import {BuildOptions} from './types/types'

export const devServerBuild = (port: BuildOptions["port"]): DevServerConfig => {
    return {
        port: port ?? 5000,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}