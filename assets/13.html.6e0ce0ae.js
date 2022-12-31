import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.def37e7d.js";const e={},p=t(`<h2 id="\u4E00-src-app-jsx" tabindex="-1"><a class="header-anchor" href="#\u4E00-src-app-jsx" aria-hidden="true">#</a> \uFF08\u4E00\uFF09 <code>src/App.jsx</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StudentList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components/StudentList&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./App.css&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// const STU_DATA = [</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;1&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;\u5F20\u4E09&quot;,</span>
<span class="token comment">//       age: 18,</span>
<span class="token comment">//       gender: &quot;\u7537&quot;,</span>
<span class="token comment">//       address: &quot;aaa&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;2&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;\u674E\u56DB&quot;,</span>
<span class="token comment">//       age: 28,</span>
<span class="token comment">//       gender: &quot;\u5973&quot;,</span>
<span class="token comment">//       address: &quot;bbb&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;3&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;\u738B\u4E94&quot;,</span>
<span class="token comment">//       age: 38,</span>
<span class="token comment">//       gender: &quot;\u7537&quot;,</span>
<span class="token comment">//       address: &quot;ccc&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">// ];</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B66\u751F\u6570\u636E</span>
  <span class="token comment">// const [stuData, setStuData] = useState(STU_DATA);</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>stuData<span class="token punctuation">,</span> setStuData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BB0\u5F55\u6570\u636E\u662F\u5426\u6B63\u5728\u52A0\u8F7D</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BB0\u5F55\u9519\u8BEF\u4FE1\u606F</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u52A0\u8F7D\u6570\u636E</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:1337/api/students&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setStuData</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6A21\u62DF\u8BF7\u6C42\u51FA\u9519</span>
    <span class="token comment">// fetch(&quot;http://localhost:1337/api/student&quot;)</span>
    <span class="token comment">//   .then((response) =&gt; {</span>
    <span class="token comment">//     // \u5224\u65AD\u662F\u5426\u6B63\u5E38\u8FD4\u56DE\u54CD\u5E94\u4FE1\u606F</span>
    <span class="token comment">//     if (response.ok) return response.json();</span>
    <span class="token comment">//     // \u6CA1\u6709\u6210\u529F\u52A0\u8F7D\u5230\u6570\u636E</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//     // \u629B\u51FA\u9519\u8BEF</span>
    <span class="token comment">//     throw new Error(&quot;\u6570\u636E\u52A0\u8F7D\u5931\u8D25&quot;);</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   .then((data) =&gt; {</span>
    <span class="token comment">//     setStuData(data.data);</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   .catch((err) =&gt; {</span>
    <span class="token comment">//     // catch\u4E00\u6267\u884C\uFF0C\u8BF4\u660E\u4E0A\u8FF0\u4EE3\u7801\u51FA\u9519\u4E86</span>
    <span class="token comment">//     // \u7EDF\u4E00\u5904\u7406\u9519\u8BEF</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//     setError(err);</span>
    <span class="token comment">//   });</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token operator">!</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>StudentList students<span class="token operator">=</span><span class="token punctuation">{</span>stuData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u6570\u636E\u52A0\u8F7D\u5F02\u5E38\uFF01<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","13.html.vue"]]);export{d as default};
