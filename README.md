## vue-style-plugin

#### 描述
   &nbsp;&nbsp;&nbsp;&nbsp;在用做小程序项目中的时候,遇到个问题,框架用的是[mpvue](https://github.com/Meituan-Dianping/mpvue),
在用[convremvw-loader](https://github.com/huatao1990/convremvw-loader)和 px2rpx-loader 分别转换单位之后,发现这种组件动态传参变换 style 是不支持预转换的,所以这就可能导致我们不能自由的根据设计稿编写 px 了,但是为了团队中小伙伴能愉快的开发,因为像 px2rpx convremvw 这种的 loader 都是在打包阶段运行的,但我们的 style 是动态的,所以解决就只能在运行的时候解决了,mpvue 基本上继承了 vue 的方法，生命周期等，所以也有 computed 计算属性，我们可以在 computed 的时候调用我们的 vue-style-plugin 插件，如下

#### 安装

```
npm install vue-style-plugin
```

#### 在 main.js 全局文件里注册一下

###### _main.js_

```
import Plugin from 'vue-style-plugin'
Vue.use(Plugin,[option])
```
option参数unit值可以传vw，默认为rem
#### 文件中如下调用

###### _star.vue_

```
<template>
	<div :style="starStyle">
    </div>
</template>
<script>
export default {
    props: {
        size: Number,
    },
    computed: {
        starStyle () {
            let str = `width: ${this.size}rpx `
            return **this.$convstyle(str)**
        }
    }
}
</script>
```

#### 功能

解决 px2rem px2rpx 等转换单位 Loader 在 vue 框架以及 mpvue 的内联动态样式不被编译成 rem 和 rpx 的问题

#### 后记

转换 rpx 的时候有些问题 mpvue 文档里说不支持动态转换 style，所以我这边只能做了转成 px 的操作，小程序里也是可以用 px 的
