# vue-mpa

> 一个采用webpack开发多页面的应用程序架构

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 项目结构
``` bash
vue-mpa
├───build                            # 构建脚本
├───node_modules                     # 第三方依赖，库等
├───dist                             # 上生产编译后的文件目录
├───src                              # 源代码
├───────assets                       # 静态资源，相对的资源路径，将由Webpack解析为模块依赖。
├───────layout                       # 公共布局html
├───────moudles                      # 各个模块
├──────────common                    # common模块
├──────────index                     # Index模块
├──────────main                      # Main模块
├───static                           # 静态文件 绝对资源路径，不会被 Webpack 处理，它们会直接被复制到最终目录
```

