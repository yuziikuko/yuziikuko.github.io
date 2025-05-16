import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-2b833c71.js";const e={},p=t(`<h2 id="一-src-app-jsx" tabindex="-1"><a class="header-anchor" href="#一-src-app-jsx" aria-hidden="true">#</a> （一） <code>src/App.jsx</code></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StudentList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./components/StudentList&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./App.css&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// const STU_DATA = [</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;1&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;张三&quot;,</span>
<span class="token comment">//       age: 18,</span>
<span class="token comment">//       gender: &quot;男&quot;,</span>
<span class="token comment">//       address: &quot;aaa&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;2&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;李四&quot;,</span>
<span class="token comment">//       age: 28,</span>
<span class="token comment">//       gender: &quot;女&quot;,</span>
<span class="token comment">//       address: &quot;bbb&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">//   {</span>
<span class="token comment">//     id: &quot;3&quot;,</span>
<span class="token comment">//     attributes: {</span>
<span class="token comment">//       name: &quot;王五&quot;,</span>
<span class="token comment">//       age: 38,</span>
<span class="token comment">//       gender: &quot;男&quot;,</span>
<span class="token comment">//       address: &quot;ccc&quot;,</span>
<span class="token comment">//     },</span>
<span class="token comment">//   },</span>
<span class="token comment">// ];</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 学生数据</span>
  <span class="token comment">// const [stuData, setStuData] = useState(STU_DATA);</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>stuData<span class="token punctuation">,</span> setStuData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 记录数据是否正在加载</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 记录错误信息</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 加载数据</span>
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

    <span class="token comment">// 模拟请求出错</span>
    <span class="token comment">// fetch(&quot;http://localhost:1337/api/student&quot;)</span>
    <span class="token comment">//   .then((response) =&gt; {</span>
    <span class="token comment">//     // 判断是否正常返回响应信息</span>
    <span class="token comment">//     if (response.ok) return response.json();</span>
    <span class="token comment">//     // 没有成功加载到数据</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//     // 抛出错误</span>
    <span class="token comment">//     throw new Error(&quot;数据加载失败&quot;);</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   .then((data) =&gt; {</span>
    <span class="token comment">//     setStuData(data.data);</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   .catch((err) =&gt; {</span>
    <span class="token comment">//     // catch一执行，说明上述代码出错了</span>
    <span class="token comment">//     // 统一处理错误</span>
    <span class="token comment">//     setLoading(false);</span>
    <span class="token comment">//     setError(err);</span>
    <span class="token comment">//   });</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token operator">!</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>StudentList students<span class="token operator">=</span><span class="token punctuation">{</span>stuData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>数据正在加载中<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>数据加载异常！<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","13.html.vue"]]);export{d as default};
