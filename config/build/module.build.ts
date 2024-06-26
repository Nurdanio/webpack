import {Configuration} from 'webpack';

export const moduleBuild = (): Configuration['module'] => {
    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }
    
    const tsLoader = { 
        test: /\.([cm]?ts|tsx)$/, 
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            }
        ], 
        // use: "ts-loader",
        exclude: "/node_modules/",
    } 
    
    const assetsLoader = {
        test: /\.(png|jpg|gif)$/i,
       type: 'asset/resource'
      }

    return {
        rules: [assetsLoader, cssLoader, tsLoader]
    }
}