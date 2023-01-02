import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.093d3470.js";const t={},p=e(`<h2 id="\u4E00-src-out-js" tabindex="-1"><a class="header-anchor" href="#\u4E00-src-out-js" aria-hidden="true">#</a> \uFF08\u4E00\uFF09 <code>src/Out.js</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Out</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-src-app-js" tabindex="-1"><a class="header-anchor" href="#\u4E8C-src-app-js" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09 <code>src/App.js</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import { Out } from &quot;./Out&quot;;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// \u9ED8\u8BA4\u5FC5\u987B\u6709\u4E00\u4E2A\u6839\u6807\u7B7E</span>
    <span class="token comment">// &lt;div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF61&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF62&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF63&lt;/div&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// \u65B9\u6CD5\u4E00\uFF1A\u81EA\u5B9A\u4E49\u65E0\u5185\u5BB9\u7EC4\u4EF6\u5305\u88F9</span>
    <span class="token comment">// &lt;Out&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF61&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF62&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF63&lt;/div&gt;</span>
    <span class="token comment">// &lt;/Out&gt;</span>

    <span class="token comment">// \u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528React\u5B9A\u4E49\u7684\u65E0\u5185\u5BB9\u7EC4\u4EF6\u5305\u88F9</span>
    <span class="token comment">// \u662F\u4E00\u4E2A\u4E13\u95E8\u7528\u6765\u4F5C\u7236\u5BB9\u5668\u7684\u7EC4\u4EF6\uFF0C\u53EA\u4F1A\u5C06\u6807\u7B7E\u4F53\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u4F1A\u521B\u5EFA\u591A\u4F59\u5143\u7D20</span>
    <span class="token comment">// &lt;React.Fragment&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF61&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF62&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;\u7EC4\u4EF63&lt;/div&gt;</span>
    <span class="token comment">// &lt;/React.Fragment&gt;</span>

    <span class="token comment">// \u65B9\u6CD5\u4E09\uFF1AFragment\u8BED\u6CD5\u7CD6</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u7EC4\u4EF6<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u7EC4\u4EF6<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u7EC4\u4EF6<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function l(c,i){return s(),a("div",null,o)}const v=n(t,[["render",l],["__file","08.html.vue"]]);export{v as default};
