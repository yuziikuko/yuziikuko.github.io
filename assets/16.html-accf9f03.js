import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,e as a}from"./app-2cb7ffb0.js";const c={},d=a('<h2 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义" aria-hidden="true">#</a> 1.定义</h2><p>对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。</p><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2.语法</h2><ul><li><p>注册过滤器：</p><ul><li><p><code>Vue.filter(name, callback)</code></p></li><li><p><code>new Vue({filters:{}})</code></p></li></ul></li><li><p>使用过滤器：</p><ul><li><p><code>{{ xxx | 过滤器名 }}</code></p></li><li><p><code>v-bind:属性=&quot;xxx | 过滤器名&quot;</code></p></li></ul></li></ul><h2 id="_3-备注" tabindex="-1"><a class="header-anchor" href="#_3-备注" aria-hidden="true">#</a> 3.备注</h2><ul><li><p>过滤器可以接收额外参数、多个过滤器也可以串联。</p></li><li><p>并没有改变原本的数据，是产生新的对应的数据。</p></li></ul>',6),o=[d];function r(t,n){return i(),l("div",null,o)}const _=e(c,[["render",r],["__file","16.html.vue"]]);export{_ as default};