import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-469ec77f.js";const e={},o=t(`<ul><li><code>ES6</code> 允许在大括号里面直接写入变量和函数，作为对象的属性和方法，更加简洁</li></ul><h2 id="一-属性名和变量名相同时可以省略-只写一次" tabindex="-1"><a class="header-anchor" href="#一-属性名和变量名相同时可以省略-只写一次" aria-hidden="true">#</a> （一）属性名和变量名相同时可以省略，只写一次</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;最美不过二次元!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> love <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// name: name,</span>
  <span class="token comment">// change: change,</span>
  name<span class="token punctuation">,</span>
  change<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-方法的声明方式可以简化" tabindex="-1"><a class="header-anchor" href="#二-方法的声明方式可以简化" aria-hidden="true">#</a> （二）方法的声明方式可以简化</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;最美不过二次元!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> love <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// watchCartoon: function() {</span>
  <span class="token comment">//   console.log(&quot;看日漫。&quot;);</span>
  <span class="token comment">// },</span>
  <span class="token function">watchCartoon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;看日漫。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>love<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","05.html.vue"]]);export{r as default};
