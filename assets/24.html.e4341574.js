import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.3d25c4e3.js";const e={},p=t(`<h2 id="\u4E00-\u79C1\u6709\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u79C1\u6709\u5C5E\u6027" aria-hidden="true">#</a> \uFF08\u4E00\uFF09\u79C1\u6709\u5C5E\u6027</h2><ul><li>\u53D8\u91CF\u540D\u524D\u52A0 <code>#</code> \u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u516C\u6709\u5C5E\u6027</span>
  name<span class="token punctuation">;</span>

  <span class="token comment">// \u79C1\u6709\u5C5E\u6027</span>
  #age<span class="token punctuation">;</span>
  #weight<span class="token punctuation">;</span>

  <span class="token comment">// \u6784\u9020\u65B9\u6CD5</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> weight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#weight <span class="token operator">=</span> weight<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7C7B\u5185\u90E8\u8C03\u7528</span>
  <span class="token function">intro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">.</span>#age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">.</span>#weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//  \u5B9E\u4F8B\u5316</span>
<span class="token keyword">const</span> girl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token string">&quot;62kg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Person {name: &#39;ikuko&#39;, #age: 24, #weight: &#39;62kg&#39;}</span>

<span class="token comment">// \u7C7B\u5916\u90E8\u8C03\u7528\uFF1A\u65E0\u6CD5\u8BBF\u95EE\u79C1\u6709\u5C5E\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">.</span>#age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Private field &#39;#age&#39; must be declared in an enclosing class</span>

<span class="token comment">// \u7C7B\u5185\u90E8\u8C03\u7528\uFF1A\u53EF\u4EE5\u8BBF\u95EE</span>
girl<span class="token punctuation">.</span><span class="token function">intro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko</span>
<span class="token comment">// 24</span>
<span class="token comment">// 62kg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-promise-\u65B9\u6CD5\u6269\u5C55-\u2014\u2014-promise-allsettled" tabindex="-1"><a class="header-anchor" href="#\u4E8C-promise-\u65B9\u6CD5\u6269\u5C55-\u2014\u2014-promise-allsettled" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09Promise \u65B9\u6CD5\u6269\u5C55 \u2014\u2014 Promise.allSettled</h2><ul><li><p><code>allSettled()</code></p><ul><li>\u8FD4\u56DE\u7684\u7ED3\u679C\u59CB\u7EC8\u662F\u6210\u529F\u7684\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u5305\u542B\u6BCF\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u7684\u72B6\u6001\u548C\u8FD4\u56DE\u503C\u3002</li></ul></li><li><p><code>all()</code></p><ul><li>\u8FD4\u56DE\u7684\u7ED3\u679C\u6839\u636E\u6570\u7EC4\u5185\u7684\u5F02\u6B65\u4EFB\u52A1\u8FD4\u56DE\u503C\u53CA\u72B6\u6001\u51B3\u5B9A\uFF0C\u90FD\u6210\u529F\u624D\u6210\u529F\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u4E24\u4E2APromise\uFF0C\u7EC4\u6210\u6570\u7EC4</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;\u5546\u54C1\u6570\u636E - 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// resolve(&#39;\u5546\u54C1\u6570\u636E - 2&#39;);</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u5566&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528allSettled\u65B9\u6CD5</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528all\u65B9\u6CD5</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-\u5B57\u7B26\u4E32\u65B9\u6CD5\u6269\u5C55-\u2014\u2014-string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u5B57\u7B26\u4E32\u65B9\u6CD5\u6269\u5C55-\u2014\u2014-string-prototype-matchall" aria-hidden="true">#</a> \uFF08\u4E09\uFF09\u5B57\u7B26\u4E32\u65B9\u6CD5\u6269\u5C55 \u2014\u2014 String.prototype.matchAll</h2><ul><li>\u65B9\u4FBF\u4E8E\u4ECE\u9875\u9762\u4E2D\u63D0\u53D6\u6570\u636E\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;ul&gt;
    &lt;li&gt;
      &lt;a&gt;\u8096\u751F\u514B\u7684\u6551\u8D4E&lt;/a&gt;
      &lt;p&gt;\u4E0A\u6620\u65E5\u671F: 1994-09-10&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a&gt;\u963F\u7518\u6B63\u4F20&lt;/a&gt;
      &lt;p&gt;\u4E0A\u6620\u65E5\u671F: 1994-07-06&lt;/p&gt;
    &lt;/li&gt;
  &lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// \u58F0\u660E\u6B63\u5219</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li&gt;.*?&lt;a&gt;(.*?)&lt;\\/a&gt;.*?&lt;p&gt;(.*?)&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528\u65B9\u6CD5</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// RegExpStringIterator {}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u56DB-\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u56DB-\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \uFF08\u56DB\uFF09\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26 <code>?.</code></h2><ul><li>\u83B7\u53D6\u5C42\u7EA7\u6BD4\u8F83\u6DF1\u7684\u5BF9\u8C61\u53C2\u6570\u65F6\u65E0\u9700\u505A\u5C42\u7EA7\u5224\u65AD\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const dbHost = config &amp;&amp; config.db &amp;&amp; config.db.host;</span>
  <span class="token keyword">const</span> dbHost <span class="token operator">=</span> config<span class="token operator">?.</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token operator">?.</span>host<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dbHost<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">db</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;192.168.1.100&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;192.168.1.200&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 192.168.1.100</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94-\u52A8\u6001-import" tabindex="-1"><a class="header-anchor" href="#\u4E94-\u52A8\u6001-import" aria-hidden="true">#</a> \uFF08\u4E94\uFF09\u52A8\u6001 import</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB++<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./js/app2.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* app2.js */</span>

<span class="token comment">// \u9759\u6001\u5BFC\u5165</span>
<span class="token comment">// import * as m1 from &#39;./hello.js&#39;;</span>

<span class="token comment">// \u83B7\u53D6\u5143\u7D20</span>
<span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u52A8\u6001\u5BFC\u5165</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./hello.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(module);</span>
    module<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* hello.js */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D-\u5927\u6574\u5F62-bigint-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u516D-\u5927\u6574\u5F62-bigint-\u7C7B\u578B" aria-hidden="true">#</a> \uFF08\u516D\uFF09\u5927\u6574\u5F62 BigInt \u7C7B\u578B</h2><h3 id="_1-\u5927\u6574\u5F62" tabindex="-1"><a class="header-anchor" href="#_1-\u5927\u6574\u5F62" aria-hidden="true">#</a> 1.\u5927\u6574\u5F62</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">521n</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token keyword">typeof</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 521n &#39;bigint&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u51FD\u6570" aria-hidden="true">#</a> 2.\u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 123n</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// The number 1.2 cannot be converted to a BigInt because it is not an integer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u7528\u4E8E\u5927\u6570\u503C\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#_3-\u7528\u4E8E\u5927\u6570\u503C\u8FD0\u7B97" aria-hidden="true">#</a> 3.\u7528\u4E8E\u5927\u6570\u503C\u8FD0\u7B97</h3><ul><li>\u5927\u6574\u5F62\u4E0D\u80FD\u76F4\u63A5\u4E0E\u6574\u5F62\u8FDB\u884C\u8FD0\u7B97\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> max <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740991</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740992</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740992</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740991n</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot mix BigInt and other types, use explicit conversions</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740992n</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 9007199254740993n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03-\u7EDD\u5BF9\u5168\u5C40\u5BF9\u8C61-\u2014\u2014-globalthis" tabindex="-1"><a class="header-anchor" href="#\u4E03-\u7EDD\u5BF9\u5168\u5C40\u5BF9\u8C61-\u2014\u2014-globalthis" aria-hidden="true">#</a> \uFF08\u4E03\uFF09\u7EDD\u5BF9\u5168\u5C40\u5BF9\u8C61 \u2014\u2014 globalThis</h2><ul><li><p>\u65E0\u8BBA\u6267\u884C\u73AF\u5883\u662F\u4EC0\u4E48\uFF0C\u59CB\u7EC8\u6307\u5411\u5168\u5C40\u5BF9\u8C61\u3002</p><ul><li><p>\u6D4F\u89C8\u5668 =&gt; <code>Window</code></p></li><li><p><code>NodeJS</code> =&gt; <code>global</code></p></li><li><p>...</p></li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Window {window: Window, self: Window, document: document, name: &#39;&#39;, location: Location, \u2026}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7EC8\u7AEF\u8FD0\u884C <code>globalThis.js</code> \uFF0C\u67E5\u770B <code>NodeJS</code> \u73AF\u5883\u4E0B\u7684\u5168\u5C40\u5BF9\u8C61\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* globalThis.js */</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * &lt;ref *1&gt; Object [global] <span class="token punctuation">{</span>
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] <span class="token punctuation">{</span>
        [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
    <span class="token punctuation">}</span>,
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] <span class="token punctuation">{</span>
        [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","24.html.vue"]]);export{d as default};
