import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as a,e,d as c,r as i}from"./app.86acdc44.js";const r={},l={href:"https://cn.vuejs.org/guide/components/provide-inject.html",target:"_blank",rel:"noopener noreferrer"},u=e("\u5B98\u65B9\u6587\u6863"),d={href:"https://www.thisdot.co/blog/provide-inject-api-with-vue-3",target:"_blank",rel:"noopener noreferrer"},k=e("Provide/Inject API With Vue 3"),v=c(`<h2 id="_1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u4F5C\u7528" aria-hidden="true">#</a> 1.\u4F5C\u7528</h2><p>\u5B9E\u73B0 <strong>\u7956\u4E0E\u540E\u4EE3\u7EC4\u4EF6\u95F4</strong> \u901A\u4FE1\u3002</p><h2 id="_2-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u7406" aria-hidden="true">#</a> 2.\u539F\u7406</h2><ul><li><p>\u7236\u7EC4\u4EF6\u6709\u4E00\u4E2A<code>provide</code>\u9009\u9879\u6765\u63D0\u4F9B\u6570\u636E\u3002</p></li><li><p>\u5B50\u7EC4\u4EF6\u6709\u4E00\u4E2A<code>inject</code>\u9009\u9879\u6765\u5F00\u59CB\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\u3002</p></li></ul><h2 id="_3-\u5177\u4F53\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u5177\u4F53\u5199\u6CD5" aria-hidden="true">#</a> 3.\u5177\u4F53\u5199\u6CD5</h2><h3 id="_1-\u7956\u7EC4\u4EF6\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-\u7956\u7EC4\u4EF6\u4E2D" aria-hidden="true">#</a> 1\uFF09\u7956\u7EC4\u4EF6\u4E2D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5954\u9A70&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">&#39;40W&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> car<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BED\u6CD5\u7CD6\u4E2D\u9700\u8981provide\u8BA1\u7B97\u5C5E\u6027\u624D\u80FD\u7EF4\u6301\u6570\u636E\u7684\u54CD\u5E94\u6027</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">,</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>car<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u540E\u4EE3\u7EC4\u4EF6\u4E2D" tabindex="-1"><a class="header-anchor" href="#_2-\u540E\u4EE3\u7EC4\u4EF6\u4E2D" aria-hidden="true">#</a> 2\uFF09\u540E\u4EE3\u7EC4\u4EF6\u4E2D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;car&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    car<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function h(m,_){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",l,[u,a(s)])]),n("p",null,[n("a",d,[k,a(s)])]),v])}const g=t(r,[["render",h],["__file","10.html.vue"]]);export{g as default};