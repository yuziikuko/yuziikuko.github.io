import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as a,d as e,e as l}from"./app-0442e796.js";const i={},u={href:"https://cn.vuejs.org/guide/reusability/composables.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://juejin.cn/post/7123961170188304391",target:"_blank",rel:"noopener noreferrer"},d={href:"https://jishuin.proginn.com/p/763bfbd701ed",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="一-定义" tabindex="-1"><a class="header-anchor" href="#一-定义" aria-hidden="true">#</a> （一）定义</h2><ul><li>本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装</li><li>hooks 的文件一般命名为：<code>useXxxx.js</code></li></ul><h2 id="二-类比" tabindex="-1"><a class="header-anchor" href="#二-类比" aria-hidden="true">#</a> （二）类比</h2><ul><li>类似于 Vue2.x 中的 mixin</li></ul><h2 id="三-优势" tabindex="-1"><a class="header-anchor" href="#三-优势" aria-hidden="true">#</a> （三）优势</h2><ul><li>复用代码，让 setup 中的逻辑更清楚易懂</li></ul><h2 id="四-使用" tabindex="-1"><a class="header-anchor" href="#四-使用" aria-hidden="true">#</a> （四）使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// hooks/useXXX.js</span>
<span class="token keyword">import</span> <span class="token constant">XXX</span> <span class="token keyword">from</span> <span class="token string">&quot;XXX&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useXXX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">changeA</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">,</span>
    b<span class="token punctuation">,</span>
    changeA<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- test.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>useXXX<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../hooks/useXXX&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> changeA<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useXXX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(m,h){const s=p("ExternalLinkIcon");return o(),c("div",null,[n("blockquote",null,[n("p",null,[n("a",u,[a("Vue3 组合式函数"),e(s)])]),n("p",null,[n("a",r,[a("Hooks 时代，如何写出高质量的 react 和 vue 组件？"),e(s)])]),n("p",null,[n("a",d,[a("手摸手教你封装几个 Vue3 中很有用的组合式 API"),e(s)])])]),k])}const f=t(i,[["render",v],["__file","09.html.vue"]]);export{f as default};