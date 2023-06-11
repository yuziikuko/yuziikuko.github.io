import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bad45217.js";const p={},t=e(`<h2 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用" aria-hidden="true">#</a> 1.作用</h2><ul><li><p>定义一个 <strong>对象类型</strong> 的响应式数据。</p></li><li><p>基本类型不要用它，要用<code>ref</code>函数。</p></li></ul><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2.语法</h2><ul><li><p><code>const 代理对象 = reactive(源对象)</code></p></li><li><p>接收一个对象（或数组），返回一个 <strong>代理对象（Proxy 的实例对象，简称 proxy 对象）</strong> 。</p></li></ul><h2 id="_3-层级" tabindex="-1"><a class="header-anchor" href="#_3-层级" aria-hidden="true">#</a> 3.层级</h2><p>reactive 定义的响应式数据是“深层次的”。</p><h2 id="_4-原理" tabindex="-1"><a class="header-anchor" href="#_4-原理" aria-hidden="true">#</a> 4.原理</h2><p>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。</p><h2 id="_5-使用" tabindex="-1"><a class="header-anchor" href="#_5-使用" aria-hidden="true">#</a> 5.使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token comment">/*
 * Object类型：使用Object.assign(target, source)赋值
 * Array类型：将数组定义为对象的一个属性，使用七大API操作
 * https://www.cnblogs.com/goloving/p/15437343.html
*/</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">299</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 直接赋值丢失响应性——不可行</span>
obj <span class="token operator">=</span> data<span class="token punctuation">;</span>
<span class="token comment">// 使用Object类型内部封装的赋值方法——可行</span>
obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组类型则应该使用七大API操作才能维持响应性</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
state<span class="token punctuation">.</span>arr <span class="token operator">=</span> res<span class="token punctuation">;</span>
state<span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
state<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","04.html.vue"]]);export{d as default};
