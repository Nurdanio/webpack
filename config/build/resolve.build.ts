import {Configuration} from 'webpack'
import { resolve } from 'path'

export const resolveBuild = (path: string): Configuration['resolve'] => {
    return {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            // Было лень писать, сделал на скорую руку 
            "@": path,
        }
    }
}