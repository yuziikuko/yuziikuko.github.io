import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-884da25c.js";const o={},e=t(`<h2 id="一-react-router-简介" tabindex="-1"><a class="header-anchor" href="#一-react-router-简介" aria-hidden="true">#</a> （一）React Router 简介</h2><ul><li>将 <code>url</code> 地址和组件进行映射，当用户访问某个地址时与其对应的组件会自动挂载</li><li>使用步骤 <ul><li>引入 <code>react-router-dom</code> 包</li><li>在 <code>index.js</code> 中引入 <code>BrowserRouter</code> 组件</li><li>将 <code>BrowserRouter</code> 设置为根组件</li></ul></li></ul><h3 id="_1-src-index-js" tabindex="-1"><a class="header-anchor" href="#_1-src-index-js" aria-hidden="true">#</a> 1. <code>src/index.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-app-js" tabindex="-1"><a class="header-anchor" href="#_2-src-app-js" aria-hidden="true">#</a> 2. <code>src/App.js</code></h3><ul><li>使用 <code>Router</code> 来映射路由地址和组件</li></ul><h4 id="_1-属性" tabindex="-1"><a class="header-anchor" href="#_1-属性" aria-hidden="true">#</a> 1）属性</h4><ul><li><code>path</code> 映射的 <code>url</code> 地址</li><li><code>component</code> 要挂载的组件</li><li><code>exact</code> 路径是否开启完整匹配，默认 <code>false</code></li></ul><h4 id="_2-当-route-的路径被访问时-对应组件就会自动挂载" tabindex="-1"><a class="header-anchor" href="#_2-当-route-的路径被访问时-对应组件就会自动挂载" aria-hidden="true">#</a> 2）当 <code>Route</code> 的路径被访问时，对应组件就会自动挂载</h4><ul><li>默认情况下 <code>Route</code> 不是严格匹配，只要 <code>url</code> 地址的头部和 <code>path</code> 一致，组件就会挂载，不会检查子路径</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-src-components-home-jsx" tabindex="-1"><a class="header-anchor" href="#_3-src-components-home-jsx" aria-hidden="true">#</a> 3. <code>src/components/Home.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>主页有非常好的内容<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-src-components-about-jsx" tabindex="-1"><a class="header-anchor" href="#_4-src-components-about-jsx" aria-hidden="true">#</a> 4. <code>src/components/About.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>关于我们，其实是师徒四人<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>唐三藏<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>孙悟空<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>猪八戒<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>沙和尚<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-link-和-navlink" tabindex="-1"><a class="header-anchor" href="#二-link-和-navlink" aria-hidden="true">#</a> （二）Link 和 NavLink</h2><h3 id="_1-src-app-js" tabindex="-1"><a class="header-anchor" href="#_1-src-app-js" aria-hidden="true">#</a> 1. <code>src/App.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-components-menu-jsx" tabindex="-1"><a class="header-anchor" href="#_2-src-components-menu-jsx" aria-hidden="true">#</a> 2. <code>src/components/Menu.jsx</code></h3><ul><li>使用 <code>react router</code> 时一定不要使用 <code>a</code> 标签创建超链接 <ul><li>会自动向服务器发送请求并重新加载页面</li></ul></li><li>使用 <code>Link</code> 创建超链接</li><li><code>NavLink</code> 和 <code>Link</code> 相似，只是可以指定激活样式</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> NavLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> classes <span class="token keyword">from</span> <span class="token string">&quot;./Menu.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Menu</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/* &lt;a href=&quot;/&quot;&gt;主页&lt;/a&gt; */</span><span class="token punctuation">}</span>

          <span class="token punctuation">{</span><span class="token comment">/* &lt;Link to=&quot;/&quot;&gt;主页&lt;/Link&gt; */</span><span class="token punctuation">}</span>

          <span class="token operator">&lt;</span>NavLink
            exact
            to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span>
            <span class="token comment">// activeClassName={classes.active}</span>
            activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> <span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            主页
          <span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/* &lt;a href=&quot;/about&quot;&gt;关于&lt;/a&gt; */</span><span class="token punctuation">}</span>

          <span class="token punctuation">{</span><span class="token comment">/* &lt;Link to=&quot;/about&quot;&gt;关于&lt;/Link&gt; */</span><span class="token punctuation">}</span>

          <span class="token operator">&lt;</span>NavLink
            exact
            to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span>
            <span class="token comment">// activeClassName={classes.active}</span>
            activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> <span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            关于
          <span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Menu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-src-components-menu-module-css" tabindex="-1"><a class="header-anchor" href="#_3-src-components-menu-module-css" aria-hidden="true">#</a> 3. <code>src/components/Menu.module.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:link,
a:visited</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a:hover,
a.active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-两种-router" tabindex="-1"><a class="header-anchor" href="#三-两种-router" aria-hidden="true">#</a> （三）两种 Router</h2><h3 id="_1-link-链接跳转" tabindex="-1"><a class="header-anchor" href="#_1-link-链接跳转" aria-hidden="true">#</a> 1.<code>Link</code> 链接跳转</h3><ul><li>没有经过服务器，可以正常跳转</li></ul><h3 id="_2-刷新页面或普通链接跳转" tabindex="-1"><a class="header-anchor" href="#_2-刷新页面或普通链接跳转" aria-hidden="true">#</a> 2.刷新页面或普通链接跳转</h3><ul><li>向服务器发送请求加载数据，此时的请求没有经过 <code>react router</code> ，返回 <code>404</code></li></ul><h3 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案" aria-hidden="true">#</a> 3.解决方案</h3><h4 id="_1-使用-hashrouter" tabindex="-1"><a class="header-anchor" href="#_1-使用-hashrouter" aria-hidden="true">#</a> 1）使用 <code>HashRouter</code></h4><ul><li>服务器不会判断 <code>hash</code> 值，请求将由 <code>react router</code> 处理</li><li>地址栏带 <code>#</code> ，对 <code>SEO</code> 不友好</li></ul><h4 id="_2-修改服务器配置-将所有请求都转发到-index-html" tabindex="-1"><a class="header-anchor" href="#_2-修改服务器配置-将所有请求都转发到-index-html" aria-hidden="true">#</a> 2）修改服务器配置，将所有请求都转发到 <code>index.html</code></h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span>
  <span class="token comment">#index index.html index.htm;</span>
  <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> /index.html</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>HashRouter</code><ul><li>通过 <code>url</code> 地址中的 <code>hash</code> 值来对地址进行匹配</li></ul></li><li><code>BrowserRouter</code><ul><li>通过 <code>url</code> 地址进行组件的跳转，使用过程和普通 <code>url</code> 地址没有区别</li></ul></li></ul><h3 id="_4-src-index-js" tabindex="-1"><a class="header-anchor" href="#_4-src-index-js" aria-hidden="true">#</a> 4. <code>src/index.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// import { HashRouter as Router } from &quot;react-router-dom&quot;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-路由组件" tabindex="-1"><a class="header-anchor" href="#四-路由组件" aria-hidden="true">#</a> （四）路由组件</h2><h3 id="_1-component" tabindex="-1"><a class="header-anchor" href="#_1-component" aria-hidden="true">#</a> 1.<code>component</code></h3><ul><li>用于指定路由匹配后被挂载的组件</li><li>需要直接传递组件的类</li><li>通过 <code>component</code> 构建的组件，会自动创建组件并自动传递参数 <ul><li><code>match</code> ：匹配的信息 <ul><li><code>isExact</code> ：检查路径是否完全匹配</li><li><code>params</code> ：请求的参数</li></ul></li><li><code>location</code> ：地址信息</li><li><code>history</code> ：历史记录信息，控制页面跳转 <ul><li><code>push()</code> ：跳转页面</li><li><code>replace()</code> ：替换页面</li></ul></li></ul></li></ul><h3 id="_2-student-id-会匹配到-student-xxx" tabindex="-1"><a class="header-anchor" href="#_2-student-id-会匹配到-student-xxx" aria-hidden="true">#</a> 2.<code>/student/:id</code> 会匹配到 <code>/student/xxx</code></h3><h3 id="_3-render" tabindex="-1"><a class="header-anchor" href="#_3-render" aria-hidden="true">#</a> 3.<code>render</code></h3><ul><li>也可以用于指定要挂载的组件</li><li>需要一个回调函数作为参数，回调函数的返回值最终会被挂载</li><li>不会自动传递 <code>match</code> 、 <code>location</code> 、 <code>history</code></li></ul><h3 id="_4-children" tabindex="-1"><a class="header-anchor" href="#_4-children" aria-hidden="true">#</a> 4.<code>children</code></h3><ul><li>也可以用于指定要挂载的组件，两种用法</li><li>和 <code>render</code> 类似，传递回调函数【少用】 <ul><li>该组件无论路径是否匹配都会挂载</li></ul></li><li>可以传递组件</li></ul><h3 id="_5-src-app-js" tabindex="-1"><a class="header-anchor" href="#_5-src-app-js" aria-hidden="true">#</a> 5. <code>src/App.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Student <span class="token keyword">from</span> <span class="token string">&quot;./components/Student&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Route path=&quot;/student/:id&quot; component={Student} /&gt; */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Route
        path=&quot;/student/:id&quot;
        render={(routeProps) =&gt; {
          console.log(routeProps);
          return &lt;Student {...routeProps} /&gt;;
        }}
      /&gt; */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Route
        path=&quot;/student/:id&quot;
        children={(routeProps) =&gt; {
          console.log(routeProps);
          return &lt;Student {...routeProps} /&gt;;
        }}
      /&gt; */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Route path=&quot;/student/:id&quot; children={&lt;Student /&gt;} /&gt; */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/student/:id&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Student <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-src-components-about-jsx" tabindex="-1"><a class="header-anchor" href="#_6-src-components-about-jsx" aria-hidden="true">#</a> 6. <code>src/components/About.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// props.history.push({</span>
    <span class="token comment">//   pathname: &quot;/student/2&quot;,</span>
    <span class="token comment">// });</span>

    props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/student/2&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>点我一下<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>关于我们，其实是师徒四人<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>唐三藏<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>孙悟空<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>猪八戒<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>沙和尚<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-src-components-menu-jsx" tabindex="-1"><a class="header-anchor" href="#_7-src-components-menu-jsx" aria-hidden="true">#</a> 7. <code>src/components/Menu.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./Menu.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Menu</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>主页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>关于<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/student/1&quot;</span><span class="token operator">&gt;</span>学生<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Menu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-src-components-student-jsx" tabindex="-1"><a class="header-anchor" href="#_8-src-components-student-jsx" aria-hidden="true">#</a> 8. <code>src/components/Student.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  useHistory<span class="token punctuation">,</span>
  useLocation<span class="token punctuation">,</span>
  useParams<span class="token punctuation">,</span>
  useRouteMatch<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">STU_DATA</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ccc&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Student</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(props.match);</span>
  <span class="token comment">// const stu = STU_DATA.find((item) =&gt; item.id === +props.match.params.id);</span>
  <span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token constant">STU_DATA</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/*
    除了可以通过props获取三个对象外，还可以通过钩子函数获取
  */</span>
  <span class="token keyword">const</span> match <span class="token operator">=</span> <span class="token function">useRouteMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">,</span> location<span class="token punctuation">,</span> history<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>stu<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-路由嵌套" tabindex="-1"><a class="header-anchor" href="#五-路由嵌套" aria-hidden="true">#</a> （五）路由嵌套</h2><h3 id="_1-src-app-js-1" tabindex="-1"><a class="header-anchor" href="#_1-src-app-js-1" aria-hidden="true">#</a> 1. <code>src/App.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&quot;./components/Hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* 路由嵌套，也可以定义于About组件中 */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Route path=&quot;/about&quot;&gt;
        &lt;About /&gt;
        &lt;Route path=&quot;/about/hello&quot;&gt;
          &lt;Hello /&gt;
        &lt;/Route&gt;
      &lt;/Route&gt; */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-components-about-jsx" tabindex="-1"><a class="header-anchor" href="#_2-src-components-about-jsx" aria-hidden="true">#</a> 2. <code>src/components/About.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> useRouteMatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&quot;./Hello&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouteMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// props.history.push({</span>
    <span class="token comment">//   pathname: &quot;/student/2&quot;,</span>
    <span class="token comment">// });</span>

    props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/student/2&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>点我一下<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>关于我们，其实是师徒四人<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>唐三藏<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>孙悟空<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>猪八戒<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>沙和尚<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/hello</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Hello <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-src-components-hello-jsx" tabindex="-1"><a class="header-anchor" href="#_3-src-components-hello-jsx" aria-hidden="true">#</a> 3. <code>src/components/Hello.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Hello<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-switch-组件" tabindex="-1"><a class="header-anchor" href="#六-switch-组件" aria-hidden="true">#</a> （六）Switch 组件</h2><h3 id="_1-src-app-js-2" tabindex="-1"><a class="header-anchor" href="#_1-src-app-js-2" aria-hidden="true">#</a> 1. <code>src/App.js</code></h3><ul><li>可以将 <code>Route</code> 统一放到一个 <code>Switch</code> 中</li><li>一个 <code>Switch</code> 中只会有一个路由显示</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>路径错误<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-prompt-组件" tabindex="-1"><a class="header-anchor" href="#七-prompt-组件" aria-hidden="true">#</a> （七）Prompt 组件</h2><h3 id="_1-src-app-js-3" tabindex="-1"><a class="header-anchor" href="#_1-src-app-js-3" aria-hidden="true">#</a> 1. <code>src/App.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyForm <span class="token keyword">from</span> <span class="token string">&quot;./components/MyForm&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/form&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>MyForm <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>路径错误<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-components-myform-jsx" tabindex="-1"><a class="header-anchor" href="#_2-src-components-myform-jsx" aria-hidden="true">#</a> 2. <code>src/components/MyForm.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Prompt <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPrompt<span class="token punctuation">,</span> setIsPrompt<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Prompt when<span class="token operator">=</span><span class="token punctuation">{</span>isPrompt<span class="token punctuation">}</span> message<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;将要离开页面！确认吗？&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>表单<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setIsPrompt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyForm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-redirect-组件" tabindex="-1"><a class="header-anchor" href="#八-redirect-组件" aria-hidden="true">#</a> （八）Redirect 组件</h2><h3 id="_1-src-app-js-4" tabindex="-1"><a class="header-anchor" href="#_1-src-app-js-4" aria-hidden="true">#</a> 1. <code>src/App.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Redirect<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Menu <span class="token keyword">from</span> <span class="token string">&quot;./components/Menu&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyForm <span class="token keyword">from</span> <span class="token string">&quot;./components/MyForm&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&quot;./components/Login&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLogin<span class="token punctuation">,</span> setIsLogin<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      App组件
      <span class="token operator">&lt;</span>Menu <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/form&quot;</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/* &lt;MyForm /&gt; */</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span><span class="token comment">/* {isLogin ? &lt;MyForm /&gt; : &lt;div&gt;请登录后再操作！&lt;/div&gt;} */</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>isLogin <span class="token operator">?</span> <span class="token operator">&lt;</span>MyForm <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>Redirect to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>Redirect from<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/abc&quot;</span><span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;/form&quot;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>路径错误<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-src-components-about-jsx-1" tabindex="-1"><a class="header-anchor" href="#_2-src-components-about-jsx-1" aria-hidden="true">#</a> 2. <code>src/components/About.jsx</code></h3><ul><li>用于跳转页面，替换当前 <code>About</code> 组件</li><li><code>push</code> 属性改为跳转不替换</li><li>也可以定义在 <code>Switch</code> 组件中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Redirect<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> useRouteMatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&quot;./Hello&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">About</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouteMatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// props.history.push({</span>
    <span class="token comment">//   pathname: &quot;/student/2&quot;,</span>
    <span class="token comment">// });</span>

    props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/student/2&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;Redirect push to={&quot;/form&quot;} /&gt; */</span><span class="token punctuation">}</span>

      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">&gt;</span>点我一下<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>关于我们，其实是师徒四人<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>唐三藏<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>孙悟空<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>猪八戒<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>沙和尚<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/hello</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Hello <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-src-components-login-jsx" tabindex="-1"><a class="header-anchor" href="#_3-src-components-login-jsx" aria-hidden="true">#</a> 3. <code>src/components/Login.jsx</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>登录页面<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),p=[e];function c(l,i){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","22.html.vue"]]);export{d as default};
