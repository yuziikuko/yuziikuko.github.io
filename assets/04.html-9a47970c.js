import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-2eee3888.js";const p={},e=t(`<h2 id="一-面向对象简介" tabindex="-1"><a class="header-anchor" href="#一-面向对象简介" aria-hidden="true">#</a> （一）面向对象简介</h2><ul><li>程序中所有的操作都需要通过对象来完成。一切操作都要通过对象，即面向对象 <ul><li>操作浏览器 —— window 对象</li><li>操作网页 —— document 对象</li><li>操作控制台 —— console 对象</li></ul></li><li>计算机程序的本质是对现实事物的抽象，抽象的反义词是具体 <ul><li>如：照片是对一个具体的人的抽象，汽车模型是对一辆具体的车的抽象</li></ul></li><li>在程序中所有的对象都被分成了两个部分：<strong>数据</strong> 和 <strong>功能</strong><ul><li>如：人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉等属于人的功能</li><li>数据在对象中被称为属性，功能被称为方法，在程序中一切皆是对象</li></ul></li></ul><h2 id="二-类-class" tabindex="-1"><a class="header-anchor" href="#二-类-class" aria-hidden="true">#</a> （二）类（class）</h2><ul><li>要想面向对象、操作对象，首先要拥有对象，要创建对象，必须要先定义类</li><li>类可以理解为对象的模型，在程序中可以根据类创建指定类的对象</li></ul><h3 id="_1-定义类" tabindex="-1"><a class="header-anchor" href="#_1-定义类" aria-hidden="true">#</a> 1.定义类</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">类名</span> <span class="token punctuation">{</span>
  属性名<span class="token operator">:</span> 类型<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>参数<span class="token operator">:</span> 类型<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>属性名 <span class="token operator">=</span> 参数<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">方法名</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* =============== 示例 =============== */</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, TS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-实例属性" tabindex="-1"><a class="header-anchor" href="#_2-实例属性" aria-hidden="true">#</a> 2.实例属性</h3><ul><li>直接定义的属性叫实例属性</li><li>需要通过对象的实例去访问</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义实例属性</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义对象的实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 访问实例属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-静态属性-类属性" tabindex="-1"><a class="header-anchor" href="#_3-静态属性-类属性" aria-hidden="true">#</a> 3.静态属性（类属性）</h3><ul><li>使用 <code>static</code> 定义的属性叫静态属性</li><li>可以直接通过类名去访问</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义静态属性</span>
  <span class="token keyword">static</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义对象的实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 访问静态属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-只读属性" tabindex="-1"><a class="header-anchor" href="#_4-只读属性" aria-hidden="true">#</a> 4.只读属性</h3><ul><li>使用 <code>readonly</code> 定义的不可修改的属性叫只读属性</li><li>需要通过对象的实例去访问</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义只读属性</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// static应先声明</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义对象的实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 修改只读属性</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token comment">// 访问只读属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">,</span> person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-方法" tabindex="-1"><a class="header-anchor" href="#_5-方法" aria-hidden="true">#</a> 5.方法</h3><ul><li>直接声明的方法叫实例方法</li><li>使用 <code>static</code> 声明的方法叫静态方法（类方法）</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

  <span class="token comment">// 定义方法</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, TS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">sayHello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, TS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义对象的实例</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 调用方法</span>
person<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Person<span class="token punctuation">.</span><span class="token function">sayHello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-构造函数和-this" tabindex="-1"><a class="header-anchor" href="#三-构造函数和-this" aria-hidden="true">#</a> （三）构造函数和 this</h2><ul><li><code>constructor</code> 被称为构造函数，会在对象创建时自动调用</li><li>在构造方法中，当前对象就是当前 <code>new</code> 新建的对象，可以通过 <code>this</code> 向新建对象添加属性</li><li>在实例方法中，<code>this</code> 表示当前的实例，可以通过 <code>this</code> 来表示当前调用方法的对象</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪汪~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dog2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;富贵&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog1<span class="token punctuation">,</span> dog2<span class="token punctuation">)</span><span class="token punctuation">;</span>
dog1<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog2<span class="token punctuation">.</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-继承" tabindex="-1"><a class="header-anchor" href="#四-继承" aria-hidden="true">#</a> （四）继承</h2><ul><li>使用继承后，子类将拥有父类中的所有方法</li><li>语法：<code>class 子类 extends 父类</code></li><li>可以将多个类中的共有代码写在一个父类中</li><li>子类中定义和父类相同的方法，则子类方法会覆盖父类方法 —— 重写</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;动物在叫~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">在跑</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;喵喵喵~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">&quot;富贵&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cat<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-super-关键字" tabindex="-1"><a class="header-anchor" href="#五-super-关键字" aria-hidden="true">#</a> （五）super 关键字</h2><ul><li>在子类的方法中，<code>super</code> 就表示当前类的父类</li><li>如果子类声明了构造函数，则必须在所有 <code>this</code> 操作前调用父类的构造函数</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;动物在叫~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-抽象类" tabindex="-1"><a class="header-anchor" href="#六-抽象类" aria-hidden="true">#</a> （六）抽象类</h2><ul><li>以 <code>abstract</code> 定义的类叫抽象类</li><li>抽象类和其他类区别不大，只是不能用来创建对象，是专门用来被继承的类</li><li>抽象类中可以添加抽象方法</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*
    定义一个抽象方法，只能定义在抽象类中
    以abstract开头，且没有方法体
    子类必须实现该方法
  */</span>
  <span class="token keyword">abstract</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;汪汪汪~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 报错</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;旺财&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&quot;狗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-接口" tabindex="-1"><a class="header-anchor" href="#七-接口" aria-hidden="true">#</a> （七）接口</h2><ul><li>接口用来定义一个类（对象）结构，定义一个类中应该包含哪些属性</li><li>接口也可以当做类型声明使用 <ul><li><code>type</code> 不能重复声明，<code>interface</code> 可以</li><li>定义多个同名 <code>interface</code> 会把各属性作合并</li></ul></li><li>接口可以在定义类时限制类的结构 <ul><li>接口中的所有属性都不能有实际的值</li><li>接口只定义对象的结构，而不考虑实际值</li></ul></li><li>定义类时可以使类去实现一个接口 <ul><li>实现接口就是使类满足接口的要求</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 描述一个对象的类型</span>
<span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> myType <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">myInterface</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span> myInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 限制类结构</span>
<span class="token keyword">interface</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 实现接口</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-属性的封装" tabindex="-1"><a class="header-anchor" href="#八-属性的封装" aria-hidden="true">#</a> （八）属性的封装</h2><ul><li><code>public</code> 修饰的属性可以在任意位置访问（修改），默认值</li><li><code>private</code> 私有属性，只能在当前类内部进行访问（修改） <ul><li>通过在类中添加方法使得私有属性可以被外部访问</li><li><code>getter</code> 方法用来读取属性，<code>setter</code> 方法用来设置属性，统称为属性的存取器</li></ul></li><li><code>protected</code> 受保护属性，只能在当前类和其子类中进行访问（修改）</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 属性可以任意被修改，不安全</span>
  <span class="token comment">// name: string;</span>
  <span class="token comment">// age: number;</span>
  <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// // 定义一个方法获取age属性</span>
  <span class="token comment">// getAge() {</span>
  <span class="token comment">//   return this.age;</span>
  <span class="token comment">// }</span>
  <span class="token comment">// // 定义一个方法修改age属性</span>
  <span class="token comment">// setAge(val: string) {</span>
  <span class="token comment">//   if (val &gt;= 0) this.age = val;</span>
  <span class="token comment">// }</span>

  <span class="token comment">// TS中设置存取器</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// p.name = &quot;Tom&quot;;</span>
<span class="token comment">// p.age = 30;</span>
<span class="token comment">// console.log(p);</span>

<span class="token comment">// getter &amp; setter</span>
<span class="token comment">// console.log(p.getAge());</span>
<span class="token comment">// p.setAge(-33);</span>

<span class="token comment">// TS get &amp; set</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以直接将属性定义在构造函数中【语法糖】</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","04.html.vue"]]);export{k as default};
