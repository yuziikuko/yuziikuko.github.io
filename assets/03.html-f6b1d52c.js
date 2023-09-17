import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,d as t,e as c}from"./app-76ddb839.js";const l="/assets/cover03-ae7ddcee.png",u={},r=n("p",null,[n("img",{src:l,alt:""})],-1),d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),k=n("p",null,"学习 Vite 和 Vue3 并搭建项目 Demo，主要目的是搭项目，对于新手直接跟着操作就可以把项目搭起来，借这个机会自己尝试写写博客，希望对大家有帮助。",-1),v={href:"https://gitee.com/yuziikuko/vite2-vue3-element-plus.git",target:"_blank",rel:"noopener noreferrer"},m={href:"https://yuziikuko.gitee.io/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),s(" 参考链接")],-1),g={href:"https://axios-http.com/zh/docs/intro",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},q={href:"https://segmentfault.com/a/1190000041086034",target:"_blank",rel:"noopener noreferrer"},y=c(`<h2 id="一-安装-axios" tabindex="-1"><a class="header-anchor" href="#一-安装-axios" aria-hidden="true">#</a> （一）安装 Axios</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i axios <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite-vue&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite preview&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;axios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.3.2&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;element-plus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.16&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.37&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.13&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unplugin-auto-import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.11.5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;unplugin-vue-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.22.12&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-使用方式一-二次封装-axios" tabindex="-1"><a class="header-anchor" href="#二-使用方式一-二次封装-axios" aria-hidden="true">#</a> （二）使用方式一：二次封装 Axios</h2><h3 id="_1-基础配置" tabindex="-1"><a class="header-anchor" href="#_1-基础配置" aria-hidden="true">#</a> 1.基础配置</h3><p>在 <code>src</code> 目录下创建 <code>axios</code> 文件夹，新建请求配置文件 <code>request.js</code> 。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/axios/request.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * axios基础配置
 */</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> <span class="token comment">// api的base_url</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">600000</span><span class="token punctuation">,</span> <span class="token comment">// 请求超时时间</span>
  <span class="token comment">// headers: {</span>
  <span class="token comment">// &quot;Access-Control-Allow-Credentials&quot;: true</span>
  <span class="token comment">// }, // 请求头信息</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 跨域请求时是否需要使用凭证，默认 false</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 服务器响应的数据类型，可以是 &#39;arraybuffer&#39;, &#39;blob&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;,默认 json</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-请求拦截器配置" tabindex="-1"><a class="header-anchor" href="#_2-请求拦截器配置" aria-hidden="true">#</a> 2.请求拦截器配置</h3><ul><li>可以在发送请求前验证请求头信息。</li><li>例如是否携带 <code>token</code> ，有 <code>token</code> 说明用户已登录，可以发送请求。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/axios/request.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;../router&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 请求拦截器
 * 函数参数1：在发送请求之前做些什么
 * 函数参数2：对请求错误做些什么
 */</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//判断token是否存在，存在即已登录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求头携带token</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>localStorage<span class="token punctuation">.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// token不存在，即未登录，跳转登录页</span>
      router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">ElMessage</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-响应拦截器配置" tabindex="-1"><a class="header-anchor" href="#_3-响应拦截器配置" aria-hidden="true">#</a> 3.响应拦截器配置</h3><ul><li>可以在收到响应数据时判断状态码。</li><li>例如收到 <code>token</code> 过期的状态码时，可以清空本地存储的信息并跳转回登录页。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 响应拦截器
 * 函数参数1：对响应数据做点什么
 * 函数参数2：对响应错误做点什么
 */</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">code: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token string">&quot;token过期&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-封装常用的请求-api" tabindex="-1"><a class="header-anchor" href="#_4-封装常用的请求-api" aria-hidden="true">#</a> 4.封装常用的请求 API</h3><p>把项目中常用的请求封装起来会更加优雅。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/axios/api.js</span>
<span class="token keyword">import</span> service <span class="token keyword">from</span> <span class="token string">&quot;./request&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 登录</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Get请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Delete请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Delete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Post请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Post</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 上传文件请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">PostFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> onUploadProgress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;multipart/form-data&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onUploadProgress<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Put请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Put</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Patch请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Patch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-在组件中调用-axios-接口" tabindex="-1"><a class="header-anchor" href="#_5-在组件中调用-axios-接口" aria-hidden="true">#</a> 5.在组件中调用 axios 接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/components/Login.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../axios/api&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 表单方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formEl</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  formEl<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// // axios接口</span>
      <span class="token comment">// Login(loginForm).then((response) =&gt; {</span>
      <span class="token comment">//   const { code, msg, data: res } = response.data;</span>
      <span class="token comment">//   if (code === 0) {</span>
      <span class="token comment">//     localStorage.setItem(&quot;token&quot;, res.token);</span>
      <span class="token comment">//     ElMessage.success(msg ?? &quot;Submitted!&quot;);</span>
      <span class="token comment">//     router.push({</span>
      <span class="token comment">//       path: &quot;/&quot;, // HelloWorld.vue在路由配置文件中定义的路径</span>
      <span class="token comment">//       params: {</span>
      <span class="token comment">//         isLogged: true,</span>
      <span class="token comment">//       },</span>
      <span class="token comment">//     });</span>
      <span class="token comment">//   } else {</span>
      <span class="token comment">//     ElMessage.error(msg);</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// });</span>

      <span class="token comment">// Demo 直接登录</span>
      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;Submitted!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// path: &quot;/&quot;, // HelloWorld.vue在路由配置文件中定义的路径</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span> <span class="token comment">// name 搭配 params 传参、path 搭配 query 传参</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">isLogged</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Oops, error submit!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-使用方式二-全局挂载-axios" tabindex="-1"><a class="header-anchor" href="#三-使用方式二-全局挂载-axios" aria-hidden="true">#</a> （三）使用方式二：全局挂载 Axios</h2><h3 id="_1-入口文件引入-axios-并作基础配置" tabindex="-1"><a class="header-anchor" href="#_1-入口文件引入-axios-并作基础配置" aria-hidden="true">#</a> 1.入口文件引入 axios 并作基础配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./style.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入Vue-Router</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&quot;./router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 引入Axios</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 后端接口域名</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&quot;https://XXX.com&quot;</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-全局挂载-axios" tabindex="-1"><a class="header-anchor" href="#_2-全局挂载-axios" aria-hidden="true">#</a> 2.全局挂载 axios</h3><p>将 <code>axios</code> 挂载到全局自定义属性 <code>globalProperties</code> 上。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/main.js</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$http <span class="token operator">=</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-组件中访问自定义属性-http" tabindex="-1"><a class="header-anchor" href="#_3-组件中访问自定义属性-http" aria-hidden="true">#</a> 3.组件中访问自定义属性 <code>$http</code></h3><h4 id="_1-opposition-api" tabindex="-1"><a class="header-anchor" href="#_1-opposition-api" aria-hidden="true">#</a> 1）Opposition API</h4><p>每个组件可以通过 <code>this</code> 直接访问到全局挂载的自定义属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/components/Login.vue</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-composition-api" tabindex="-1"><a class="header-anchor" href="#_2-composition-api" aria-hidden="true">#</a> 2）Composition API</h4><p>由于 <code>setup</code> 中没有 <code>this</code> ，需要使用 <code>getCurrentInstance</code> 来获取上下文。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/components/Login.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function f(x,w){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,d,k,n("ul",null,[n("li",null,[n("a",v,[s("项目码云（Gitee）仓库地址"),t(a)])]),n("li",null,[n("a",m,[s("个人主页"),t(a)])])]),b,n("ul",null,[n("li",null,[s("官网："),n("a",g,[s("起步 | Axios Docs"),t(a)])]),n("li",null,[s("GitHub："),n("a",h,[s("axios"),t(a)])]),n("li",null,[n("a",q,[s("手把手教你在 vue3 中使用 axios"),t(a)])])]),y])}const P=e(u,[["render",f],["__file","03.html.vue"]]);export{P as default};
