import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.093d3470.js";const p={},o=t(`<ul><li><p><code>onAdd</code> \u5BFC\u81F4 <code>A</code> \u7EC4\u4EF6\u7684 <code>props</code> \u4E00\u5B9A\u4F1A\u53D8\u5316\uFF0C <code>memo</code> \u65E0\u6548\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>useCallback()</code> \u3002</p></li><li><p><code>useCallback()</code> \u662F\u4E00\u4E2A\u94A9\u5B50\u51FD\u6570\uFF0C\u7528\u6765\u521B\u5EFA <code>React</code> \u4E2D\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><ul><li><p>\u8BE5\u56DE\u8C03\u51FD\u6570\u4E0D\u4F1A\u603B\u5728\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\u91CD\u65B0\u521B\u5EFA\u3002</p></li><li><p>\u53C2\u6570\uFF1A</p><ul><li><p>1.\u56DE\u8C03\u51FD\u6570\u3002</p></li><li><p>2.\u4F9D\u8D56\u6570\u7EC4\u3002</p><ul><li><p>\u5F53\u4F9D\u8D56\u6570\u7EC4\u4E2D\u7684\u53D8\u91CF\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570\u624D\u4F1A\u91CD\u65B0\u521B\u5EFA\u3002</p></li><li><p>\u5982\u679C\u4E0D\u6307\u5B9A\u4F9D\u8D56\u6570\u7EC4\uFF0C\u56DE\u8C03\u51FD\u6570\u6BCF\u6B21\u90FD\u4F1A\u91CD\u65B0\u521B\u5EFA\u3002</p></li><li><p>\u4E00\u5B9A\u8981\u5C06\u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u5230\u7684\u6240\u6709\u53D8\u91CF\u90FD\u8BBE\u7F6E\u5230\u4F9D\u8D56\u6570\u7EC4\u4E2D\uFF0C\u9664\u4E86 <code>setState</code> \u3002</p></li></ul></li></ul></li></ul></li></ul><h2 id="\u4E00-src-index-js" tabindex="-1"><a class="header-anchor" href="#\u4E00-src-index-js" aria-hidden="true">#</a> \uFF08\u4E00\uFF09 <code>src/index.js</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-src-app-jsx" tabindex="-1"><a class="header-anchor" href="#\u4E8C-src-app-jsx" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09 <code>src/App.jsx</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">A</span> <span class="token keyword">from</span> <span class="token string">&quot;./A&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;App\u6E32\u67D3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// const clickHandler = () =&gt; {</span>
  <span class="token comment">//   setCount((pre) =&gt; pre + 1);</span>
  <span class="token comment">// };</span>

  <span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// setCount((pre) =&gt; pre + 1);</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setNumber</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>App <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u589E\u52A0<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token constant">A</span> onAdd<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-src-a-jsx" tabindex="-1"><a class="header-anchor" href="#\u4E09-src-a-jsx" aria-hidden="true">#</a> \uFF08\u4E09\uFF09 <code>src/A.jsx</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">&quot;./B&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">A</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;A\u6E32\u67D3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> test <span class="token operator">=</span> count <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token constant">A</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u589E\u52A0<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onAdd<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u589E\u52A0App\u7684Count<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token constant">B</span> test<span class="token operator">=</span><span class="token punctuation">{</span>test<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB-src-b-jsx" tabindex="-1"><a class="header-anchor" href="#\u56DB-src-b-jsx" aria-hidden="true">#</a> \uFF08\u56DB\uFF09 <code>src/B.jsx</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">B</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;B\u6E32\u67D3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>test <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;\u54C8\u54C8\u54C8&quot;</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// export default B;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","11.html.vue"]]);export{k as default};
