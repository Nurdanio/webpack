export type BuildModes = "development" | "production"
export type BuildPlatform = "mobile" | "desktop" 

export interface BuildPaths {
    html: string,
    entry: string,
    output: string,
    src: string
}


export interface BuildOptions {
    port: number,
    mode: BuildModes,
    paths: BuildPaths,
    platform: BuildPlatform
}