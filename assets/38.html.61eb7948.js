import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as p,d as s,e as i,r as c}from"./app.6e9a860a.js";const l="/assets/vuex3.804b3f17.png",u={},r=s('<h2 id="\u4E00-\u7406\u89E3-vuex" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u7406\u89E3-vuex" aria-hidden="true">#</a> \uFF08\u4E00\uFF09\u7406\u89E3 Vuex</h2><h3 id="_1-vuex-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-vuex-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1.Vuex \u662F\u4EC0\u4E48</h3><ul><li><p>\u4E13\u95E8\u5728 Vue \u4E2D\u5B9E\u73B0 <strong>\u96C6\u4E2D\u5F0F\u72B6\u6001\uFF08\u6570\u636E\uFF09\u7BA1\u7406</strong> \u7684\u4E00\u4E2A Vue \u63D2\u4EF6\u3002</p><ul><li><p>\u96C6\u4E2D\u5F0F\uFF1A\u7C7B\u4F3C\u4E8E\u4E00\u540D\u8001\u5E08\u7ED9\u4E00\u4E2A\u73ED\u7EA7\u7684\u5B66\u751F\u4E0A\u8BFE\uFF0C\u8001\u5E08\u53EA\u8BB2\u4E00\u904D\uFF0C\u4F46\u662F\u6709\u4E00\u7FA4\u5B66\u751F\u7684\u601D\u7EF4\u5728\u63A5\u6536\u3002</p></li><li><p>\u5206\u5E03\u5F0F\uFF1A\u4E0E\u96C6\u4E2D\u5F0F\u76F8\u5BF9\u3002</p></li></ul></li><li><p>\u5BF9 Vue \u5E94\u7528\u4E2D\u591A\u4E2A\u7EC4\u4EF6\u7684 <strong>\u5171\u4EAB\u72B6\u6001</strong> \u8FDB\u884C\u96C6\u4E2D\u5F0F\u7684\u7BA1\u7406\uFF08\u8BFB/\u5199\uFF09\u3002</p></li><li><p>\u4E5F\u662F\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u4E14\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1\u3002</p></li></ul><h3 id="_2-github-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-github-\u5730\u5740" aria-hidden="true">#</a> 2.GitHub \u5730\u5740</h3>',4),d={href:"https://github.com/vuejs/vuex",target:"_blank",rel:"noopener noreferrer"},v=i("https://github.com/vuejs/vuex"),k=s('<h3 id="_3-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528-vuex" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528-vuex" aria-hidden="true">#</a> 3.\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 Vuex</h3><p>\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u5171\u4EAB\u6570\u636E\u65F6\u4F7F\u7528\u3002</p><ul><li><p>\u591A\u4E2A\u7EC4\u4EF6\u4F9D\u8D56\u4E8E\u540C\u4E00\u72B6\u6001\u3002</p></li><li><p>\u6765\u81EA\u4E0D\u540C\u7EC4\u4EF6\u7684\u884C\u4E3A\u9700\u8981\u53D8\u66F4\u540C\u4E00\u72B6\u6001\u3002</p></li></ul><h2 id="\u4E8C-vuex-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C-vuex-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \uFF08\u4E8C\uFF09Vuex \u5DE5\u4F5C\u539F\u7406</h2><p>API \u7531 Store \u7EDF\u4E00\u7BA1\u7406\u3002</p><p><img src="'+l+`" alt=""></p><h2 id="\u4E09-\u642D\u5EFA-vuex-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u642D\u5EFA-vuex-\u73AF\u5883" aria-hidden="true">#</a> \uFF08\u4E09\uFF09\u642D\u5EFA Vuex \u73AF\u5883</h2><h3 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1.\u5B89\u88C5</h3><ul><li><p>\u5728 2022 \u5E74 02 \u6708 07 \u65E5\uFF0CVue3 \u6210\u4E3A\u4E86\u9ED8\u8BA4\u7248\u672C\uFF0C\u5373<code>npm i vue</code>\u76F4\u63A5\u5B89\u88C5\u7684\u662F Vue3\u3002\u540C\u65F6 Vuex \u4E5F\u66F4\u65B0\u5230\u4E86 v4\uFF0C\u5373<code>npm i vuex</code>\u5B89\u88C5\u7684\u662F Vuex4\u3002</p></li><li><p>Vuex4 \u53EA\u80FD\u5728 Vue3 \u4E2D\u4F7F\u7528\uFF0CVue2 \u9879\u76EE\u9700\u8981\u5B89\u88C5 Vuex3\u3002</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i vuex@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-\u521B\u5EFA\u6587\u4EF6src-store-index-js" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u6587\u4EF6src-store-index-js" aria-hidden="true">#</a> 2.\u521B\u5EFA\u6587\u4EF6<code>src/store/index.js</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165Vue\u6838\u5FC3\u5E93</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528Vuex\u63D2\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u51C6\u5907Actions\u5BF9\u8C61\u2014\u2014\u7528\u4E8E\u54CD\u5E94\u7EC4\u4EF6\u4E2D\u7528\u6237\u7684\u52A8\u4F5C</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u51C6\u5907Mutations\u5BF9\u8C61\u2014\u2014\u7528\u4E8E\u64CD\u4F5Cstate\u4E2D\u7684\u6570\u636E</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u51C6\u5907State\u5BF9\u8C61\u2014\u2014\u7528\u4E8E\u5B58\u50A8\u5177\u4F53\u7684\u6570\u636E</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u5E76\u66B4\u9732Store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u5728main-js\u4E2D\u521B\u5EFA-vm-\u65F6\u4F20\u5165-store-\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#_3-\u5728main-js\u4E2D\u521B\u5EFA-vm-\u65F6\u4F20\u5165-store-\u914D\u7F6E\u9879" aria-hidden="true">#</a> 3.\u5728<code>main.js</code>\u4E2D\u521B\u5EFA vm \u65F6\u4F20\u5165 store \u914D\u7F6E\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token operator">...</span>
<span class="token comment">// \u5F15\u5165Store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">// \u521B\u5EFAVue\u5B9E\u4F8B\u5BF9\u8C61---vm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  store
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(h,b){const a=c("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",d,[v,p(a)])]),k])}const V=e(u,[["render",m],["__file","38.html.vue"]]);export{V as default};