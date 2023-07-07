import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as c,d as i,e as s}from"./app-7bd4b1bd.js";const l={},u=s(`<h2 id="一-简介" tabindex="-1"><a class="header-anchor" href="#一-简介" aria-hidden="true">#</a> （一）简介</h2><ul><li><p><code>ES6</code> 引入 <code>Class</code> 类的概念，作为对象的模板，通过 <code>class</code> 关键字可以定义类。</p></li><li><p>可以看做一个语法糖，绝大部分功能 <code>ES5</code> 都可以实现，新的 <code>class</code> 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法。</p></li></ul><h3 id="_1-es5" tabindex="-1"><a class="header-anchor" href="#_1-es5" aria-hidden="true">#</a> 1.ES5</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 手机类</span>
<span class="token keyword">function</span> <span class="token function">Shouji</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加方法</span>
<span class="token class-name">Shouji</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">let</span> Huawei <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shouji</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span> <span class="token number">5999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Huawei<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Huawei</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Shouji {brand: &#39;华为&#39;, price: 5999}</span>
<span class="token comment">// 我可以打电话</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-es6" tabindex="-1"><a class="header-anchor" href="#_2-es6" aria-hidden="true">#</a> 2.ES6</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法：特殊的方法，名字固定，new类对象时自动执行</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 方法必须使用该语法，不能使用ES5的对象完整形式【call: function() {}】</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以打电话!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> XiaoMi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span> <span class="token number">1999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XiaoMi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">XiaoMi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Phone {brand: &#39;小米&#39;, price: 1999}</span>
<span class="token comment">// 我可以打电话!!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-class-静态成员" tabindex="-1"><a class="header-anchor" href="#二-class-静态成员" aria-hidden="true">#</a> （二）Class 静态成员</h2>`,7),k=s("<li><p>实例对象的属性和方法和函数对象是不相通的。</p></li><li><p>实例对象的属性和方法和构造函数的原型对象相通。</p></li><li><p><code>name</code> 、 <code>change</code> 属于函数对象，不属于实例对象，这样的属性称作静态成员【即：在面向对象编程中，<code>name</code> 、 <code>change</code> 属于类而不属于实例对象】。</p></li>",3),r={href:"https://www.cnblogs.com/rickdiculous/p/13670315.html",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 以下是函数对象</span>
<span class="token keyword">function</span> <span class="token function">Shouji</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Shouji<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">;</span>
Shouji<span class="token punctuation">.</span><span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以改变世界&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Shouji</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token string">&quot;5.5inch&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 以下是实例对象</span>
<span class="token keyword">let</span> nokia <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shouji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nokia<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 5.5inch</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nokia<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined</span>
nokia<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// nokia.change is not a function</span>

<span class="token comment">// 以上类似于面向对象中</span>
<span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 静态属性</span>
  <span class="token keyword">static</span> name <span class="token operator">=</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以改变世界&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> xiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaomi<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Phone<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-es5-构造函数继承" tabindex="-1"><a class="header-anchor" href="#三-es5-构造函数继承" aria-hidden="true">#</a> （三）ES5 构造函数继承</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 手机</span>
<span class="token keyword">function</span> <span class="token function">Phone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Phone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以打电话&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 智能手机</span>
<span class="token keyword">function</span> <span class="token function">SmartPhone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price<span class="token punctuation">,</span> color<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Phone</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> brand<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 设置子级构造函数的原型</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 做一个校正，可不加</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> SmartPhone<span class="token punctuation">;</span>

<span class="token comment">// 声明子类的方法</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">photo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以拍照&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">playGame</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以玩游戏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 实例化</span>
<span class="token keyword">const</span> chuizi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token string">&quot;锤子&quot;</span><span class="token punctuation">,</span> <span class="token number">2499</span><span class="token punctuation">,</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5.5inch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chuizi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// SmartPhone {brand: &#39;锤子&#39;, price: 2499, color: &#39;黑色&#39;, size: &#39;5.5inch&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-class-类继承" tabindex="-1"><a class="header-anchor" href="#四-class-类继承" aria-hidden="true">#</a> （四）Class 类继承</h2><h3 id="_1-使用-super-调用父类构造方法" tabindex="-1"><a class="header-anchor" href="#_1-使用-super-调用父类构造方法" aria-hidden="true">#</a> 1.使用 <code>super</code> 调用父类构造方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 父类的成员属性</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以打电话!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">extends</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price<span class="token punctuation">,</span> color<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ES5：Phone.call(this, brand, price);</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;拍照&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;玩游戏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span> <span class="token number">799</span><span class="token punctuation">,</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4.7inch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaomi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// SmartPhone {brand: &#39;小米&#39;, price: 799, color: &#39;黑色&#39;, size: &#39;4.7inch&#39;}</span>
<span class="token function">xiaomi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xiaomi<span class="token punctuation">.</span><span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xiaomi<span class="token punctuation">.</span><span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 我可以打电话!!!</span>
<span class="token comment">// 拍照</span>
<span class="token comment">// 玩游戏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-重写父类方法" tabindex="-1"><a class="header-anchor" href="#_2-重写父类方法" aria-hidden="true">#</a> 2.重写父类方法</h3><ul><li>因为子类不能直接调用父类同名方法，所以只能完全重写。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 父类的成员属性</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以打电话!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">extends</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span> price<span class="token punctuation">,</span> color<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ES5：Phone.call(this, brand, price);</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;拍照&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">playGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;玩游戏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重写父类方法</span>
  <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我可以视频通话!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span> <span class="token number">799</span><span class="token punctuation">,</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4.7inch&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">xiaomi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 我可以视频通话!!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-class-中的-getters-和-setters" tabindex="-1"><a class="header-anchor" href="#五-class-中的-getters-和-setters" aria-hidden="true">#</a> （五）Class 中的 getters 和 setters</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造函数可以缺省</span>

  <span class="token keyword">get</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;价格属性被读取了。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;价格属性被修改了。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 价格属性被读取了。</span>
<span class="token comment">// 123</span>

s<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token string">&quot;free&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 价格属性被修改了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(m,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("ul",null,[k,n("li",null,[n("p",null,[n("a",r,[c("https://www.cnblogs.com/rickdiculous/p/13670315.html"),i(a)])])])]),d])}const g=t(l,[["render",v],["__file","16.html.vue"]]);export{g as default};
