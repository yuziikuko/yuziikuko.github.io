import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,e as s}from"./app-27ab1db0.js";const e="/assets/vue2transition-54117793.png",o={},c=s('<h2 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用" aria-hidden="true">#</a> 1.作用</h2><p>在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名。</p><h2 id="_2-图示" tabindex="-1"><a class="header-anchor" href="#_2-图示" aria-hidden="true">#</a> 2.图示</h2><p><img src="'+e+`" alt=""></p><h2 id="_3-写法" tabindex="-1"><a class="header-anchor" href="#_3-写法" aria-hidden="true">#</a> 3.写法</h2><h3 id="_1-准备好样式" tabindex="-1"><a class="header-anchor" href="#_1-准备好样式" aria-hidden="true">#</a> 1）准备好样式</h3><table><thead><tr><th>元素进入的样式</th><th>元素离开的样式</th></tr></thead><tbody><tr><td>v-enter：进入的起点</td><td>v-leave：离开的起点</td></tr><tr><td>v-enter-active：进入过程中</td><td>v-leave-active：离开过程中</td></tr><tr><td>v-enter-to：进入的终点</td><td>v-leave-to：离开的终点</td></tr></tbody></table><h3 id="_2-使用-transition-包裹要过渡的元素-并配置-name-属性" tabindex="-1"><a class="header-anchor" href="#_2-使用-transition-包裹要过渡的元素-并配置-name-属性" aria-hidden="true">#</a> 2）使用<code>&lt;transition&gt;</code>包裹要过渡的元素，并配置 name 属性：</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好啊!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-备注" tabindex="-1"><a class="header-anchor" href="#_3-备注" aria-hidden="true">#</a> 3）备注</h3><p>若有多个元素需要过渡，则需要使用：<code>&lt;transition-group&gt;</code>，且每个元素都要指定<code>key</code>值。</p>`,11),i=[c];function p(r,d){return t(),n("div",null,i)}const h=a(o,[["render",p],["__file","35.html.vue"]]);export{h as default};