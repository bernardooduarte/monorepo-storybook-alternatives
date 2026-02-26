const path = require("node:path");

const r = (p) => path.resolve(__dirname, p);

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                include: [
                    r("./src"),
                    r("./"),
                    r("../../packages/ui-react/src"),
                    r("../../packages/ui-tokens/src")
                ],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                            ["@babel/preset-react", { runtime: "automatic" }],
                            ["@babel/preset-typescript"]
                        ]
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset"
            }
        ]
    }
};
