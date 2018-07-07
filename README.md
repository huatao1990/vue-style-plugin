## vue-style-plugin
#### 描述
    在用做小程序项目中的时候,遇到个问题,框架用的是[mpvue](https://github.com/Meituan-Dianping/mpvue),在用[convremvw-loader]
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
