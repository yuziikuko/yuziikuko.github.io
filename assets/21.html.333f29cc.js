import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.1e3ece80.js";const p={},e=t(`<h2 id="\u4E00-async-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E00-async-\u51FD\u6570" aria-hidden="true">#</a> \uFF08\u4E00\uFF09async \u51FD\u6570</h2><ul><li><p><code>async</code> \u548C <code>await</code> \u4E24\u79CD\u8BED\u6CD5\u7ED3\u5408\u53EF\u4EE5\u8BA9\u5F02\u6B65\u4EE3\u7801\u50CF\u540C\u6B65\u4EE3\u7801\u4E00\u6837\u3002</p></li><li><p>\u8FD4\u56DE\u503C\u4E3A <code>Promise</code> \u5BF9\u8C61\u3002</p></li><li><p><code>Promise</code> \u5BF9\u8C61\u7684\u7ED3\u679C\u7531 <code>async</code> \u51FD\u6570\u6267\u884C\u7684\u8FD4\u56DE\u503C\u51B3\u5B9A\u3002</p><ul><li><p>\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\u975E <code>Promise</code> \u5BF9\u8C61\uFF0C\u5219 <code>async</code> \u51FD\u6570\u8FD4\u56DE\u503C\u662F\u6210\u529F\u7684 <code>Promise</code> \u5BF9\u8C61\uFF0C\u4E14\u5BF9\u8C61\u503C\u4E3A <code>return</code> \u7684\u503C\u3002</p></li><li><p>\u8FD4\u56DE\u7684\u7ED3\u679C\u629B\u51FA\u9519\u8BEF\uFF0C\u5219 <code>async</code> \u51FD\u6570\u8FD4\u56DE\u503C\u662F\u5931\u8D25\u7684 <code>Promise</code> \u5BF9\u8C61\uFF0C\u4E14\u503C\u4E3A\u629B\u51FA\u7684\u9519\u8BEF\u3002</p></li><li><p>\u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A <code>Promise</code> \u5BF9\u8C61\uFF0C\u5219 <code>async</code> \u51FD\u6570\u8FD4\u56DE\u503C\u7531 <code>return</code> \u7684 <code>Promise</code> \u5BF9\u8C61\u8FD4\u56DE\u503C\u51B3\u5B9A\u3002</p></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// return &#39;ikuko&#39;;</span>

  <span class="token comment">// throw new Error(&#39;\u51FA\u9519\u5566!&#39;);</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u7684\u6570\u636E!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// reject(&#39;\u5931\u8D25\u7684\u9519\u8BEF!&#39;);</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Promise {&lt;fulfilled&gt;: &#39;ikuko&#39;}</span>

<span class="token comment">// Promise {&lt;rejected&gt;: Error: \u51FA\u9519\u5566! at fn (http://localhost:5500/ECMAScript6-11/39.ES8-async%E5%87%BD%E6%95%B0.html:35:\u2026}</span>

<span class="token comment">// Promise {&lt;pending&gt;}</span>

res<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-await-\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C-await-\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09await \u8868\u8FBE\u5F0F</h2><ul><li><p><code>await</code> \u5FC5\u987B\u5199\u5728 <code>async</code> \u51FD\u6570\u4E2D\uFF0C <code>async</code> \u4E2D\u53EF\u4EE5\u6CA1\u6709 <code>await</code> \u3002</p></li><li><p><code>await</code> \u53F3\u4FA7\u7684\u8868\u8FBE\u5F0F\u4E00\u822C\u4E3A <code>Promise</code> \u5BF9\u8C61\u3002</p></li><li><p><code>await</code> \u8FD4\u56DE\u7684\u662F <code>Promise</code> \u6210\u529F\u7684\u503C\u3002</p></li><li><p><code>await</code> \u7684 <code>Promise</code> \u5931\u8D25\u4E86\uFF0C\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u9700\u8981\u901A\u8FC7 <code>try...catch</code> \u6355\u83B7\u5904\u7406\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFAPromise\u5BF9\u8C61</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// resolve(&#39;\u7528\u6237\u6570\u636E&#39;);</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;\u5931\u8D25\u5566!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7528\u6237\u6570\u636E</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5931\u8D25\u5566!</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u51FD\u6570</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-async-\u548C-await-\u7ED3\u5408\u8BFB\u53D6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E09-async-\u548C-await-\u7ED3\u5408\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a> \uFF08\u4E09\uFF09async \u548C await \u7ED3\u5408\u8BFB\u53D6\u6587\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165fs\u6A21\u5757</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BFB\u53D6\u4E3A\u5B66.md</span>
<span class="token keyword">function</span> <span class="token function">readWeiXue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./resources/\u4E3A\u5B66.md&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BFB\u53D6\u63D2\u79E7\u8BD7.md</span>
<span class="token keyword">function</span> <span class="token function">readChaYangShi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./resources/\u63D2\u79E7\u8BD7.md&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BFB\u53D6\u89C2\u4E66\u6709\u611F.md</span>
<span class="token keyword">function</span> <span class="token function">readGuanShuYouGan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;./resources/\u89C2\u4E66\u6709\u611F.md&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u58F0\u660E\u4E00\u4E2Aasync\u51FD\u6570</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u4E3A\u5B66\u5185\u5BB9</span>
  <span class="token keyword">let</span> weixue <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readWeiXue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u53D6\u63D2\u79E7\u8BD7\u5185\u5BB9</span>
  <span class="token keyword">let</span> chayangshi <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readChaYangShi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u83B7\u53D6\u89C2\u4E66\u6709\u611F\u5185\u5BB9</span>
  <span class="token keyword">let</span> guanshuyougan <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">readGuanShuYouGan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weixue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chayangshi<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>guanshuyougan<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB-async-\u548C-await-\u7ED3\u5408\u53D1\u9001-ajax-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u56DB-async-\u548C-await-\u7ED3\u5408\u53D1\u9001-ajax-\u8BF7\u6C42" aria-hidden="true">#</a> \uFF08\u56DB\uFF09async \u548C await \u7ED3\u5408\u53D1\u9001 Ajax \u8BF7\u6C42</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53D1\u9001Ajax\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u662FPromise\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">sendAjax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.\u521B\u5EFA\u5BF9\u8C61</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.\u521D\u59CB\u5316</span>
    x<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.\u53D1\u9001</span>
    x<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.\u4E8B\u4EF6\u7ED1\u5B9A</span>
    x<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Promise.then \u65B9\u6CD5\u6D4B\u8BD5</span>
<span class="token function">sendAjax</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.apiopen.top/getJoke&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// async \u4E0E await \u6D4B\u8BD5</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAjax</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.apiopen.top/getJoke&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94-\u5BF9\u8C61\u65B9\u6CD5\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u4E94-\u5BF9\u8C61\u65B9\u6CD5\u6269\u5C55" aria-hidden="true">#</a> \uFF08\u4E94\uFF09\u5BF9\u8C61\u65B9\u6CD5\u6269\u5C55</h2><ul><li><p><code>Object.values()</code> \u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\u503C\u7684\u6570\u7EC4\u3002</p></li><li><p><code>Object.entries()</code> \u8FD4\u56DE\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u53EF\u904D\u5386\u5C5E\u6027 <code>[key, value]</code> \u7684\u6570\u7EC4\u3002</p></li><li><p><code>Object.getOwnPropertyDescriptors()</code> \u8FD4\u56DE\u6307\u5B9A\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5BF9\u8C61</span>
<span class="token keyword">const</span> yg <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cities</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6DF1\u5733&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skill</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u524D\u7AEF&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PHP&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u952E" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u952E" aria-hidden="true">#</a> 1.\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u952E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>yg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;name&#39;, &#39;cities&#39;, &#39;skill&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#_2-\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u503C" aria-hidden="true">#</a> 2.\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u7684\u503C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>yg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;ikuko&#39;, Array(3), Array(2)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-entries" tabindex="-1"><a class="header-anchor" href="#_3-entries" aria-hidden="true">#</a> 3.entries</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>yg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [Array(2), Array(2), Array(2)]</span>
<span class="token comment">//     0: (2) [&#39;name&#39;, &#39;ikuko&#39;]</span>
<span class="token comment">//     1: (2) [&#39;cities&#39;, Array(3)]</span>
<span class="token comment">//     2: (2) [&#39;skill&#39;, Array(2)]</span>

<span class="token comment">// \u4EE5\u4E0A\u7ED3\u679C\u53EF\u4EE5\u521B\u5EFAMap</span>
<span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>yg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(3) {&#39;name&#39; =&gt; &#39;ikuko&#39;, &#39;cities&#39; =&gt; Array(3), &#39;skill&#39; =&gt; Array(2)}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u8FD4\u56DE\u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_4-\u8FD4\u56DE\u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61" aria-hidden="true">#</a> 4.\u8FD4\u56DE\u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>yg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {name: {\u2026}, cities: {\u2026}, skill: {\u2026}}</span>
<span class="token comment">// name:</span>
<span class="token comment">//     configurable: true</span>
<span class="token comment">//     enumerable: true</span>
<span class="token comment">//     value: &quot;ikuko&quot;</span>
<span class="token comment">//     writable: true</span>

<span class="token comment">// \u83B7\u53D6\u7684\u662Fcreate\u5B9A\u4E49\u65F6\u8BBE\u7F6E\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u8FDB\u884C\u6DF1\u5C42\u6B21\u7684\u514B\u9686\uFF1A</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBE\u7F6E\u503C</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;yg&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5C5E\u6027\u7279\u6027</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","21.html.vue"]]);export{k as default};