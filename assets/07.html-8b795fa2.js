import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as t,e as p}from"./app-bad45217.js";const i={},r=p('<h2 id="一-authentication-in-next-js" tabindex="-1"><a class="header-anchor" href="#一-authentication-in-next-js" aria-hidden="true">#</a> （一）Authentication in Next.js</h2><ul><li><p>任何项目都会涉及到用户，需要考虑身份和权限。</p><ul><li><p><code>Identity</code> 身份：验证用户是谁 —— <code>Authentication</code> 认证。</p></li><li><p><code>Access</code> 权限：验证用户有什么许可 —— <code>Authorization</code> 授权。</p></li></ul></li></ul><h3 id="_1-分类" tabindex="-1"><a class="header-anchor" href="#_1-分类" aria-hidden="true">#</a> 1.分类</h3><ul><li><p>Client-side authentication</p></li><li><p>Server-side authentication</p></li><li><p>API routes authentication</p></li></ul><h3 id="_2-如何从以上三方面保护用户数据" tabindex="-1"><a class="header-anchor" href="#_2-如何从以上三方面保护用户数据" aria-hidden="true">#</a> 2. 如何从以上三方面保护用户数据？</h3><ul><li><p>不需要持久化：使用 GitHub、Facebook 等认证服务，以确保用户的身份验证。</p></li><li><p>需要持久化：使用数据库。</p></li></ul><h2 id="二-nextauth-setup" tabindex="-1"><a class="header-anchor" href="#二-nextauth-setup" aria-hidden="true">#</a> （二）NextAuth Setup</h2>',7),u={href:"https://next-auth.js.org/",target:"_blank",rel:"noopener noreferrer"},d=p(`<h3 id="_1-components-navbar-js" tabindex="-1"><a class="header-anchor" href="#_1-components-navbar-js" aria-hidden="true">#</a> 1.<code>components/Navbar.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&quot;logo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>NextAuth<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">main-nav</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Dashboard<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/blog&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Blog<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Sign In<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Sign Out<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-components-navbar-css" tabindex="-1"><a class="header-anchor" href="#_2-components-navbar-css" aria-hidden="true">#</a> 2.<code>components/Navbar.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2,
h3,
a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #34495a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.45em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.logo a,
.main-nav a</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #34495a<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.99em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #718daa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pages-app-js" tabindex="-1"><a class="header-anchor" href="#_3-pages-app-js" aria-hidden="true">#</a> 3.<code>pages/_app.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&quot;../components/Navbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../styles/gloabals.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../components/Navbar.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-pages-dashboard-js" tabindex="-1"><a class="header-anchor" href="#_4-pages-dashboard-js" aria-hidden="true">#</a> 4.<code>pages/dashboard.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Dashboard page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Dashboard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-pages-blog-js" tabindex="-1"><a class="header-anchor" href="#_5-pages-blog-js" aria-hidden="true">#</a> 5.<code>pages/blog.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Blog page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-setup" tabindex="-1"><a class="header-anchor" href="#_6-setup" aria-hidden="true">#</a> 6.setup</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> next-auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-pages-api-auth-nextauth-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-api-auth-nextauth-js" aria-hidden="true">#</a> 1）<code>pages/api/auth/[...nextauth].js</code></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">&quot;next-auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Providers <span class="token keyword">from</span> <span class="token string">&quot;next-auth/providers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    Providers<span class="token punctuation">.</span><span class="token function">GitHub</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_SECRET</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-env-local" tabindex="-1"><a class="header-anchor" href="#_2-env-local" aria-hidden="true">#</a> 2）<code>.env.local</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GITHUB_ID=XXX
GITHUB_SECRET=XXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-sign-in-and-sign-out" tabindex="-1"><a class="header-anchor" href="#三-sign-in-and-sign-out" aria-hidden="true">#</a> （三）Sign In and Sign Out</h2><h3 id="_1-components-navbar-js-1" tabindex="-1"><a class="header-anchor" href="#_1-components-navbar-js-1" aria-hidden="true">#</a> 1.<code>components/Navbar.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn<span class="token punctuation">,</span> signOut <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&quot;logo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>NextAuth<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">main-nav</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Dashboard<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/blog&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Blog<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/api/auth/signin&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">{</span>
                  <span class="token comment">/* signIn(); */</span>
                <span class="token punctuation">}</span>
                <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">&quot;github&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              Sign In
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/api/auth/signout&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              Sign Out
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-client-side-authentication" tabindex="-1"><a class="header-anchor" href="#四-client-side-authentication" aria-hidden="true">#</a> （四）Client-side Authentication</h2><h3 id="_1-components-navbar-js-2" tabindex="-1"><a class="header-anchor" href="#_1-components-navbar-js-2" aria-hidden="true">#</a> 1.<code>components/Navbar.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn<span class="token punctuation">,</span> signOut<span class="token punctuation">,</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>session<span class="token punctuation">,</span> loading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&quot;logo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>NextAuth<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">main-nav </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token operator">!</span>session <span class="token operator">&amp;&amp;</span> loading <span class="token operator">?</span> <span class="token string">&quot;loading&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;loaded&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Dashboard<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/blog&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>Blog<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token operator">!</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>session <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/api/auth/signin&quot;</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>a
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">&quot;github&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                Sign In
              <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>session <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/api/auth/signout&quot;</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>a
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                Sign Out
              <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-components-navbar-css-1" tabindex="-1"><a class="header-anchor" href="#_2-components-navbar-css-1" aria-hidden="true">#</a> 2.<code>components/Navbar.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2,
h3,
a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #34495a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.logo</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.45em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.logo a,
.main-nav a</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #34495a<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.99em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main-nav a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #718daa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 14px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loading</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.2s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loaded</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.2s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-securing-pages-client-side" tabindex="-1"><a class="header-anchor" href="#五-securing-pages-client-side" aria-hidden="true">#</a> （五）Securing Pages Client-side</h2><h3 id="_1-pages-dashboard-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-dashboard-js" aria-hidden="true">#</a> 1.<code>pages/dashboard.js</code></h3><ul><li><p><code>useSession</code> 返回的 <code>loading</code> 从 <code>false =&gt; true</code>，但是 <code>session</code> 从 <code>null =&gt; undefined</code> ，无法利用此数据判断用户是否有权限访问当前页面。</p></li><li><p>使用 <code>getSession</code> 判断用户是否登录。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// import { useSession } from &quot;next-auth/client&quot;;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getSession<span class="token punctuation">,</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const [session, loading] = useSession();</span>
  <span class="token comment">// console.log({ session, loading });</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">securePage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">securePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Dashboard page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Dashboard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-nextauth-provider" tabindex="-1"><a class="header-anchor" href="#六-nextauth-provider" aria-hidden="true">#</a> （六）NextAuth Provider</h2><ul><li><p><code>Provider</code> 允许通过 <code>useSession</code> 跨组件使用 <code>session</code> 。</p></li><li><p>推荐，因为页面刷新时 <code>useSession</code> 会自动检查用户是否有 <code>session</code> 。</p></li></ul><h3 id="_1-pages-index-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-index-js" aria-hidden="true">#</a> 1.<code>pages/index.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>session<span class="token punctuation">,</span> loading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> session<span class="token punctuation">,</span> loading <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token punctuation">{</span>session <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span> Welcome to NextJS<span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pages-app-js" tabindex="-1"><a class="header-anchor" href="#_2-pages-app-js" aria-hidden="true">#</a> 2.<code>pages/_app.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&quot;../components/Navbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../styles/gloabals.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../components/Navbar.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-server-side-authentication" tabindex="-1"><a class="header-anchor" href="#七-server-side-authentication" aria-hidden="true">#</a> （七）Server-side Authentication</h2><ul><li>无需从 <code>props</code> 中解构 <code>session</code> ，也无需判断 <code>loading</code> ，因为 SSR 的 session 一定会被加载，且可以全局访问。</li></ul><h3 id="_1-pages-blog-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-blog-js" aria-hidden="true">#</a> 1.<code>pages/blog.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getSession<span class="token punctuation">,</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>session<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> session <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Blog page <span class="token operator">-</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSession</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      session<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> session <span class="token operator">?</span> <span class="token string">&quot;List of 100 personalized blogs&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;List of free blogs&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pages-app-js-1" tabindex="-1"><a class="header-anchor" href="#_2-pages-app-js-1" aria-hidden="true">#</a> 2.<code>pages/_app.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&quot;../components/Navbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../styles/gloabals.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;../components/Navbar.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider session<span class="token operator">=</span><span class="token punctuation">{</span>pageProps<span class="token punctuation">.</span>session<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-securing-pages-server-side" tabindex="-1"><a class="header-anchor" href="#八-securing-pages-server-side" aria-hidden="true">#</a> （八） Securing Pages Server-side</h2><ul><li>用户通过 <code>url</code> 直接访问无权限访问的页面时，跳转回首页。</li></ul><h3 id="_1-pages-blog-js-1" tabindex="-1"><a class="header-anchor" href="#_1-pages-blog-js-1" aria-hidden="true">#</a> 1.<code>pages/blog.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getSession<span class="token punctuation">,</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>session<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> session <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Blog page <span class="token operator">-</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSession</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&quot;/api/auth/signin?calbackUrl=http://localhost:3000/blog&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      session<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> session <span class="token operator">?</span> <span class="token string">&quot;List of 100 personalized blogs&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;List of free blogs&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九-securing-api-routes" tabindex="-1"><a class="header-anchor" href="#九-securing-api-routes" aria-hidden="true">#</a> （九） Securing API Routes</h2><h3 id="_1-pages-api-test-session-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-api-test-session-js" aria-hidden="true">#</a> 1.<code>pages/api/test-session.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next-auth/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span> req <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&quot;Unauthenticated user&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Success&quot;</span><span class="token punctuation">,</span> session <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> handler<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十-connecting-to-a-database" tabindex="-1"><a class="header-anchor" href="#十-connecting-to-a-database" aria-hidden="true">#</a> （十） Connecting to a Database</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-env-local" tabindex="-1"><a class="header-anchor" href="#_1-env-local" aria-hidden="true">#</a> 1.<code>.env.local</code></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GITHUB_ID=XXX
GITHUB_SECRET=XXXXX

DB_USER=XXX
DB_PASSWORD=XXXXX
DB_URL=XXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pages-api-auth-nextauth-js" tabindex="-1"><a class="header-anchor" href="#_2-pages-api-auth-nextauth-js" aria-hidden="true">#</a> 2.<code>pages/api/auth/[...nextauth].js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">&quot;next-auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Providers <span class="token keyword">from</span> <span class="token string">&quot;next-auth/providers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    Providers<span class="token punctuation">.</span><span class="token function">GitHub</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_SECRET</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">jwt</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jwt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一-callbacks" tabindex="-1"><a class="header-anchor" href="#十一-callbacks" aria-hidden="true">#</a> （十一）Callbacks</h2><h3 id="_1-pages-api-auth-nextauth-js-1" tabindex="-1"><a class="header-anchor" href="#_1-pages-api-auth-nextauth-js-1" aria-hidden="true">#</a> 1.<code>pages/api/auth/[...nextauth].js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">&quot;next-auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Providers <span class="token keyword">from</span> <span class="token string">&quot;next-auth/providers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    Providers<span class="token punctuation">.</span><span class="token function">GitHub</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_SECRET</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">jwt</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jwt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// token创建和更新时自动调用，可在此自定义格式</span>
    <span class="token keyword">async</span> <span class="token function">jwt</span><span class="token punctuation">(</span><span class="token parameter">token<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        token<span class="token punctuation">.</span>id <span class="token operator">=</span> user<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token parameter">session<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id <span class="token operator">=</span> token<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
      <span class="token keyword">return</span> session<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二-summary" tabindex="-1"><a class="header-anchor" href="#十二-summary" aria-hidden="true">#</a> （十二）Summary</h2><ul><li><p>使用 <code>useSession</code> 钩子函数进行客户端身份验证。</p></li><li><p>使用 <code>getSession</code> 函数从客户端层面限制访问页面。</p></li><li><p>当在 <code>getServerSideProps</code> 中使用 <code>getSession</code> 函数进行服务端身份验证时， <code>next-auth</code> 的 <code>Provider</code> 可以提高性能，减少网络调用并避免页面闪烁。</p></li><li><p>通过从 <code>getServerSideProps</code> 中重定向来从服务端层面限制访问页面。</p></li><li><p>使用 <code>getSession</code> 函数可用于验证 <code>API</code> 路由权限。</p></li><li><p><code>Callbacks</code> 允许自定义 <code>session</code> 对象。</p></li></ul><h2 id="十三-deploying-next-js-apps-to-vercel" tabindex="-1"><a class="header-anchor" href="#十三-deploying-next-js-apps-to-vercel" aria-hidden="true">#</a> （十三）Deploying Next.js Apps to Vercel</h2>`,59),k=n("p",null,"GitHub:",-1),v={href:"https://github.com/gopinav/Next-JS-Tutorials",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"Video:",-1),b={href:"https://www.youtube.com/watch?v=KmxAH7ng8Qw&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=79",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"Website:",-1),h={href:"http://next-js-misc.vercel.app/",target:"_blank",rel:"noopener noreferrer"};function y(f,x){const s=o("ExternalLinkIcon");return c(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("https://next-auth.js.org/"),t(s)])])]),d,n("ul",null,[n("li",null,[k,n("ul",null,[n("li",null,[n("a",v,[a("https://github.com/gopinav/Next-JS-Tutorials"),t(s)])])])]),n("li",null,[m,n("ul",null,[n("li",null,[n("a",b,[a("https://www.youtube.com/watch?v=KmxAH7ng8Qw&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=79"),t(s)])])])]),n("li",null,[g,n("ul",null,[n("li",null,[n("a",h,[a("http://next-js-misc.vercel.app/"),t(s)])])])])])])}const j=e(i,[["render",y],["__file","07.html.vue"]]);export{j as default};