import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.1e3ece80.js";const t={},p=e(`<h2 id="\u4E00-\u5BF9\u8C61\u5C55\u5F00" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u5BF9\u8C61\u5C55\u5F00" aria-hidden="true">#</a> \uFF08\u4E00\uFF09\u5BF9\u8C61\u5C55\u5F00</h2><ul><li><p><code>Rest</code> \u53C2\u6570\u4E0E <code>spread</code> \u6269\u5C55\u8FD0\u7B97\u7B26\u5728 <code>ES6</code> \u4E2D\u5DF2\u7ECF\u5F15\u5165\uFF0C\u4F46\u662F\u53EA\u9488\u5BF9\u6570\u7EC4\u3002</p></li><li><p><code>ES9</code> \u4E2D\u4E3A\u5BF9\u8C61\u63D0\u4F9B\u4E86\u50CF\u6570\u7EC4\u4E00\u6837\u7684 <code>rest</code> \u53C2\u6570\u548C\u6269\u5C55\u8FD0\u7B97\u7B26\u3002</p></li></ul><h3 id="_1-rest-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-rest-\u53C2\u6570" aria-hidden="true">#</a> 1.rest \u53C2\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// function connect({ host, port, username, password }) {</span>
<span class="token comment">//   console.log(host);</span>
<span class="token comment">//   console.log(port);</span>
<span class="token comment">//   console.log(username);</span>
<span class="token comment">//   console.log(password);</span>
<span class="token comment">// }</span>
<span class="token comment">// 127.0.0.1</span>
<span class="token comment">// 3306</span>
<span class="token comment">// root</span>
<span class="token comment">// root</span>

<span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> <span class="token operator">...</span>user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 127.0.0.1</span>
<span class="token comment">// 3306</span>
<span class="token comment">// {username: &#39;root&#39;, password: &#39;root&#39;}</span>
<span class="token comment">// {username: &#39;root&#39;, password: &#39;root&#39;, type: &#39;master&#39;}</span>

<span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 2.\u6269\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> skillOne <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">q</span><span class="token operator">:</span> <span class="token string">&quot;\u5929\u97F3\u6CE2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// ...skillOne =&gt; q: &#39;\u5929\u97F3\u6CE2&#39;, w: &#39;\u91D1\u949F\u7F69&#39;</span>

<span class="token keyword">const</span> skillTwo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token string">&quot;\u91D1\u949F\u7F69&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> skillThree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token string">&quot;\u5929\u96F7\u7834&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> skillFour <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token string">&quot;\u731B\u9F99\u6446\u5C3E&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mangseng <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>skillOne<span class="token punctuation">,</span> <span class="token operator">...</span>skillTwo<span class="token punctuation">,</span> <span class="token operator">...</span>skillThree<span class="token punctuation">,</span> <span class="token operator">...</span>skillFour <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mangseng<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {q: &#39;\u5929\u97F3\u6CE2&#39;, w: &#39;\u91D1\u949F\u7F69&#39;, e: &#39;\u5929\u96F7\u7834&#39;, r: &#39;\u731B\u9F99\u6446\u5C3E&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u6B63\u5219\u8868\u8FBE\u5F0F\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u6B63\u5219\u8868\u8FBE\u5F0F\u6269\u5C55" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09\u6B63\u5219\u8868\u8FBE\u5F0F\u6269\u5C55</h2><h3 id="_1-\u547D\u540D\u6355\u83B7\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1-\u547D\u540D\u6355\u83B7\u5206\u7EC4" aria-hidden="true">#</a> 1.\u547D\u540D\u6355\u83B7\u5206\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;\u767E\u5EA6&lt;/a&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u9700\u6C42\uFF1A\u63D0\u53D6 url\u3001\u6807\u7B7E\u6587\u672C\u3002</p></li><li><p>\u4E24\u79CD\u65B9\u5F0F\u533A\u522B\u5728\u4E8E <code>groups</code> \u5B57\u6BB5\u3002</p></li></ul><h4 id="_1-\u65B9\u5F0F\u4E00-\u901A\u8FC7\u4E0B\u6807\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#_1-\u65B9\u5F0F\u4E00-\u901A\u8FC7\u4E0B\u6807\u83B7\u53D6" aria-hidden="true">#</a> 1\uFF09\u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7\u4E0B\u6807\u83B7\u53D6</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=&quot;(.*)&quot;&gt;(.*)&lt;\\/a&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> reg1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;\u767E\u5EA6&lt;/a&gt;&#39;, &#39;https://www.baidu.com&#39;, &#39;\u767E\u5EA6&#39;, index: 0, input: &#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;\u767E\u5EA6&lt;/a&gt;&#39;, groups: undefined]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> res1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// https://www.baidu.com \u767E\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u65B9\u5F0F\u4E8C-\u901A\u8FC7\u6B63\u5219\u5206\u7EC4\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#_2-\u65B9\u5F0F\u4E8C-\u901A\u8FC7\u6B63\u5219\u5206\u7EC4\u83B7\u53D6" aria-hidden="true">#</a> 2\uFF09\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7\u6B63\u5219\u5206\u7EC4\u83B7\u53D6</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=&quot;(?&lt;url&gt;.*)&quot;&gt;(?&lt;text&gt;.*)&lt;\\/a&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;\u767E\u5EA6&lt;/a&gt;&#39;, &#39;https://www.baidu.com&#39;, &#39;\u767E\u5EA6&#39;, index: 0, input: &#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;\u767E\u5EA6&lt;/a&gt;&#39;, groups: {\u2026}]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// https://www.baidu.com</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u767E\u5EA6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u53CD\u5411\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_2-\u53CD\u5411\u65AD\u8A00" aria-hidden="true">#</a> 2.\u53CD\u5411\u65AD\u8A00</h3><ul><li><p>\u65AD\u8A00\uFF1A\u5224\u65AD\u672C\u6B21\u5339\u914D\u7ED3\u679C\u6B63\u786E\u4E0E\u5426\u3002</p></li><li><p>\u6B63\u5411\u65AD\u8A00\uFF1A\u6839\u636E\u6240\u9700\u5B57\u7B26\u4E32\u540E\u9762\u8DDF\u7740\u7684\u5185\u5BB9\u8FDB\u884C\u5224\u65AD\u3002</p></li><li><p>\u53CD\u5411\u65AD\u8A00\uFF1A\u6839\u636E\u6240\u9700\u5B57\u7B26\u4E32\u524D\u9762\u8DDF\u7740\u7684\u5185\u5BB9\u8FDB\u884C\u5224\u65AD\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;JS5211314\u4F60\u77E5\u9053\u4E48555\u5566\u5566\u5566&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9700\u6C42\uFF1A\u63D0\u53D6\u7B2C\u4E8C\u6BB5\u6570\u5B57\u3002</li></ul><h4 id="_1-\u65B9\u5F0F\u4E00-\u6B63\u5411\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u65B9\u5F0F\u4E00-\u6B63\u5411\u65AD\u8A00" aria-hidden="true">#</a> 1\uFF09\u65B9\u5F0F\u4E00\uFF1A\u6B63\u5411\u65AD\u8A00(?=)</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+(?=\u5566)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> reg1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;555&#39;, index: 13, input: &#39;JS5211314\u4F60\u77E5\u9053\u4E48555\u5566\u5566\u5566&#39;, groups: undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u65B9\u5F0F\u4E8C-\u53CD\u5411\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#_2-\u65B9\u5F0F\u4E8C-\u53CD\u5411\u65AD\u8A00" aria-hidden="true">#</a> 2\uFF09\u65B9\u5F0F\u4E8C\uFF1A\u53CD\u5411\u65AD\u8A00(?&lt;=)</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\u4E48)\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;555&#39;, index: 13, input: &#39;JS5211314\u4F60\u77E5\u9053\u4E48555\u5566\u5566\u5566&#39;, groups: undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-dotall-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-dotall-\u6A21\u5F0F" aria-hidden="true">#</a> 3.dotAll \u6A21\u5F0F</h3><ul><li><p>dot: <code>.</code> \u3002</p><ul><li>\u5728\u6B63\u5219\u4E2D\u8868\u793A\u5143\u5B57\u7B26\uFF0C\u4EE3\u8868\u9664\u6362\u884C\u7B26\u5916\u7684\u4EFB\u610F\u5355\u5B57\u7B26\u3002</li></ul></li><li><p>dotAll: <code>.</code> \u4EE3\u8868\u4EFB\u610F\u5B57\u7B26\u3002</p><ul><li>\u5728 <code>html</code> \u4EE3\u7801\u5B57\u7B26\u4E32\u4E2D\u67E5\u627E\u6709\u91CD\u8981\u610F\u4E49\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9700\u6C42\uFF1A\u63D0\u53D6\u7535\u5F71\u540D\u79F0\u548C\u4E0A\u6620\u65F6\u95F4\uFF0C\u5B58\u5230\u5BF9\u8C61\u4E2D\u3002</li></ul><h4 id="_1-\u65B9\u5F0F\u4E00-\u9700\u8981\u6DFB\u52A0\u591A\u4E2A-s" tabindex="-1"><a class="header-anchor" href="#_1-\u65B9\u5F0F\u4E00-\u9700\u8981\u6DFB\u52A0\u591A\u4E2A-s" aria-hidden="true">#</a> 1\uFF09\u65B9\u5F0F\u4E00\uFF1A\u9700\u8981\u6DFB\u52A0\u591A\u4E2A<code>\\s</code></h4><ul><li><p>\u8D2A\u5A6A\uFF1A\u8868\u793A\u6700\u5927\u5339\u914D\u3002</p></li><li><p><code>(.*?)</code> : <code>?</code> \u8868\u793A\u7981\u6B62\u8D2A\u5A6A\u3002</p></li><li><p><code>\\s</code> : \u5355\u4E2A\u7684\u7A7A\u767D\u5B57\u7B26\uFF0C\u5305\u62EC\u6362\u884C\u7B26\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li&gt;\\s+&lt;a&gt;(.*?)&lt;\\/a&gt;\\s+&lt;p&gt;(.*?)&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u65B9\u5F0F\u4E8C-dotall-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u65B9\u5F0F\u4E8C-dotall-\u6A21\u5F0F" aria-hidden="true">#</a> 2\uFF09\u65B9\u5F0F\u4E8C\uFF1AdotAll \u6A21\u5F0F</h4><ul><li><p><code>s</code> : \u6A21\u5F0F\u4FEE\u6B63\u7B26\uFF0C\u4F7F <code>.</code> \u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u3002</p></li><li><p><code>g</code> : \u6A21\u5F0F\u4FEE\u6B63\u7B26\uFF0C\u5168\u5C40\u5339\u914D\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li&gt;.*?&lt;a&gt;(.*?)&lt;\\/a&gt;.*?&lt;p&gt;(.*?)&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res<span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(res);</span>
  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 0: {title: &#39;\u8096\u751F\u514B\u7684\u6551\u8D4E&#39;, time: &#39;\u4E0A\u6620\u65E5\u671F: 1994-09-10&#39;}</span>
<span class="token comment">// 1: {title: &#39;\u963F\u7518\u6B63\u4F20&#39;, time: &#39;\u4E0A\u6620\u65E5\u671F: 1994-07-06&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function l(c,i){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","22.html.vue"]]);export{d as default};