## vue-style-plugin
#### 描述
        在用做小程序项目中的时候,遇到个问题,框架用的是[mpvue](https://github.com/Meituan-Dianping/mpvue),
在用[convremvw-loader](https://github.com/huatao1990/convremvw-loader)和px2rpx-loader分别转换单位之后,发现这种组件动态传参变换style是不支持预转换的,所以这就可能导致我们不能自由的根据设计稿编写px了,但是为了团队中小伙伴能愉快的开发,只能解决掉,因为像px2rpx convremvw这种的loader都是在打包阶段运行的,但我们的style是动态的,所以解决就只能在运行的时候解决了,mpvue基本上继承了vue的方法，生命周期等，所以也有computed计算属性，我们可以在computed的时候调用我们的vue-style-plugin插件，如下
#### 安装
```
npm install vue-style-plugin
```
#### 在main.js全局文件里注册一下
###### *main.js*
```
import Plugin from 'vue-style-plugin'
Vue.use(Plugin)
```
#### 文件中如下调用
###### *star.vue*
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
解决px2rem px2rpx等转换单位Loader在vue框架以及mpvue的内联动态样式不被编译成rem和rpx的问题
#### 后记
转换rpx的时候有些问题 mpvue文档里说不支持动态转换style，所以我这边只能做了转成px的操作，小程序里也是可以用px的
