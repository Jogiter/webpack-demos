# 兼容IE8的项目构建（基于webpack打包，commonJs的模块化加载）

1.`zepto`没有封装CommonJS的引用，`jquery`有，因此不使用zepto(需要额外对它进行封装)而使用jquery
2.`style-loader`中使用了`Function.bind`和`Array.filter`方法，因此需要使用[es5-shim](https://github.com/es-shims/es5-shim)，具体参考[style-loader/issues/42](https://github.com/webpack/style-loader/issues/42)

# todo

- [ ]   autoprefixer来辅助css
- [x]   jquery的使用，以及其插件的使用。参见[imports-loader](https://github.com/webpack/imports-loader)


# issues 

##jquery的使用，以及相关的插件使用

### jquery的版本选择

1.bootstrap(3.0.0 -- 3.3.7)的插件对jquery的依赖条件如下

```js
// 3.0.0
{
    "dependencies": {
        "jquery": ">= 1.9.0"
    }
}

// 3.3.7
{
    "dependencies": {
        "jquery": "1.9.1 - 3"
    }
}
```

因此，如果要使用[bootstrap3](http://getbootstrap.com/getting-started)，`jquery`的版本必须`>=1.9.1`

2.[jquery](https://github.com/jquery/jquery/)对IE(6-8)的兼容最高版本是`1.10.2`，从`1.11.0`开始，会提示

>Browser support differs between the master (2.x) branch and the 1.x-master branch. Specifically, 2.x does not support legacy browsers such as IE6-8.

因此，如果要使用bootstrap兼容IE8，jquery的版本需要控制在`1.9.1 -- 1.10.2`。

### Webpack引入jquery及其插件

+   [Webpack引入jquery及其插件的几种方法](http://blog.csdn.net/yiifaa/article/details/51916560)
+   [imports-loader](https://github.com/webpack/imports-loader#usage)


## webpack版本控制 && 静态资源部署CDN

需要注意的是：

1.`url-loader?limit=10240`中的limit的值控制图片的大小，如果图片小于limit，webpack会将该图片转换成base64，否则会直接引用图片所在的路径
2.`html-webpack-plugin`如果有多个页面，需要多个配置
3.output中的`publicPath`会指向`html-webpack-plugin`添加到页面上的资源的路径(可以将静态资源上传到cdn，将这里的路径改为cdn路径)，`path`则是webpack打包后文件所在的位置
