import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-76ddb839.js";const t={},p=e(`<h2 id="一-src-out-js" tabindex="-1"><a class="header-anchor" href="#一-src-out-js" aria-hidden="true">#</a> （一） <code>src/Out.js</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Out</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-src-app-js" tabindex="-1"><a class="header-anchor" href="#二-src-app-js" aria-hidden="true">#</a> （二） <code>src/App.js</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import { Out } from &quot;./Out&quot;;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// 默认必须有一个根标签</span>
    <span class="token comment">// &lt;div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件1&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件2&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件3&lt;/div&gt;</span>
    <span class="token comment">// &lt;/div&gt;</span>

    <span class="token comment">// 方法一：自定义无内容组件包裹</span>
    <span class="token comment">// &lt;Out&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件1&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件2&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件3&lt;/div&gt;</span>
    <span class="token comment">// &lt;/Out&gt;</span>

    <span class="token comment">// 方法二：使用React定义的无内容组件包裹</span>
    <span class="token comment">// 是一个专门用来作父容器的组件，只会将标签体直接返回，不会创建多余元素</span>
    <span class="token comment">// &lt;React.Fragment&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件1&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件2&lt;/div&gt;</span>
    <span class="token comment">//   &lt;div&gt;组件3&lt;/div&gt;</span>
    <span class="token comment">// &lt;/React.Fragment&gt;</span>

    <span class="token comment">// 方法三：Fragment语法糖</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>组件<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>组件<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>组件<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function l(c,i){return s(),a("div",null,o)}const v=n(t,[["render",l],["__file","08.html.vue"]]);export{v as default};
