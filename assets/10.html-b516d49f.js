import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as t}from"./app-546dd93b.js";const l={},h=t('<h2 id="一-监视属性" tabindex="-1"><a class="header-anchor" href="#一-监视属性" aria-hidden="true">#</a> （一）监视属性</h2><ul><li>当被监视的属性变化时，回调函数自动调用，进行相关操作</li><li>监视的属性必须存在，才能进行监视</li></ul><h3 id="_1-监视的两种写法" tabindex="-1"><a class="header-anchor" href="#_1-监视的两种写法" aria-hidden="true">#</a> 1.监视的两种写法</h3><h4 id="_1-new-vue-时传入-watch-配置" tabindex="-1"><a class="header-anchor" href="#_1-new-vue-时传入-watch-配置" aria-hidden="true">#</a> 1）new Vue 时传入 watch 配置</h4><ul><li>创建 Vue 实例时已经明确需要监视什么属性</li></ul><h4 id="_2-通过-vm-watch-监视" tabindex="-1"><a class="header-anchor" href="#_2-通过-vm-watch-监视" aria-hidden="true">#</a> 2）通过 <code>vm.$watch</code> 监视</h4><ul><li>Vue 实例挂载后通过某种行为需要监视某些属性</li></ul><h2 id="二-深度监视" tabindex="-1"><a class="header-anchor" href="#二-深度监视" aria-hidden="true">#</a> （二）深度监视</h2><ul><li>Vue 中的 watch 默认不监测对象内部值的改变（一层）</li><li>配置 <code>deep: true</code> 可以监测对象内部值的改变（多层）</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>Vue 自身可以监测对象内部值的改变，但 Vue 提供的 watch 默认不可以</li><li>使用 watch 时根据数据的具体结构，决定是否采用深度监视</li></ul></div><h2 id="三-computed-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#三-computed-和-watch-的区别" aria-hidden="true">#</a> （三）computed 和 watch 的区别</h2><ul><li>computed 能完成的功能，watch 都可以完成</li><li>watch 能完成的功能，computed 不一定能完成 <ul><li>如：watch 可以进行异步操作</li></ul></li></ul><h2 id="四-两个重要的小原则" tabindex="-1"><a class="header-anchor" href="#四-两个重要的小原则" aria-hidden="true">#</a> （四）两个重要的小原则</h2><ul><li>所有被 Vue 管理的函数，最好写成普通函数 <ul><li>这样 this 的指向才是 <strong>vm</strong> 或 <strong>组件实例对象</strong></li></ul></li><li>所有不被 Vue 管理的函数（定时器的回调函数、Ajax 的回调函数、Promise 的回调函数等），最好写成箭头函数 <ul><li>这样 this 的指向才是 <strong>vm</strong> 或 <strong>组件实例对象</strong></li></ul></li></ul>',14),r=[h];function c(d,n){return a(),i("div",null,r)}const s=e(l,[["render",c],["__file","10.html.vue"]]);export{s as default};