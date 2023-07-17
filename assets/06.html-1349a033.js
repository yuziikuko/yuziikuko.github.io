import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-9ed65df8.js";const e={},p=t(`<ul><li><code>ES6</code> 允许使用箭头 <code>=&gt;</code> 定义函数</li></ul><h2 id="一-声明并调用" tabindex="-1"><a class="header-anchor" href="#一-声明并调用" aria-hidden="true">#</a> （一）声明并调用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个函数</span>
<span class="token comment">// let fn = function() {}</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 调用函数</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-特性" tabindex="-1"><a class="header-anchor" href="#二-特性" aria-hidden="true">#</a> （二）特性</h2><h3 id="_1-this-是静态的" tabindex="-1"><a class="header-anchor" href="#_1-this-是静态的" aria-hidden="true">#</a> 1. <code>this</code> 是静态的</h3><ul><li>始终指向函数声明时所在作用域下的 <code>this</code> 值</li><li>即箭头函数内部没有自己的 <code>this</code> ，只能往外层找</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">getName2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 设置window的name属性</span>
window<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">YG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IKUKO&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 直接调用</span>
<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko【this直接指向全局作用域this】</span>
<span class="token function">getName2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko【声明时在全局作用域，this指向window】</span>

<span class="token comment">// call调用（可以改变函数内部this值）</span>
<span class="token function">getName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token constant">YG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// IKUKO【this指向“YG”】</span>
<span class="token function">getName2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token constant">YG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko【this仍然指向window】</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-不能作为构造函数去实例化对象" tabindex="-1"><a class="header-anchor" href="#_2-不能作为构造函数去实例化对象" aria-hidden="true">#</a> 2.不能作为构造函数去实例化对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Chen&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Person is not a constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-不能使用-arguments-变量来保存实参" tabindex="-1"><a class="header-anchor" href="#_3-不能使用-arguments-变量来保存实参" aria-hidden="true">#</a> 3.不能使用 <code>arguments</code> 变量来保存实参</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Arguments [2, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span>

<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// arguments is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-箭头函数的简写" tabindex="-1"><a class="header-anchor" href="#_4-箭头函数的简写" aria-hidden="true">#</a> 4.箭头函数的简写</h3><h4 id="_1-省略小括号" tabindex="-1"><a class="header-anchor" href="#_1-省略小括号" aria-hidden="true">#</a> 1）省略小括号</h4><ul><li>当形参有且只有一个时</li></ul><h4 id="_2-省略花括号" tabindex="-1"><a class="header-anchor" href="#_2-省略花括号" aria-hidden="true">#</a> 2）省略花括号</h4><ul><li>当代码体只有一条语句时</li><li>此时 <code>return</code> 必须省略，且语句的执行结果就是函数的返回值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">+</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 18</span>

<span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-案例实操" tabindex="-1"><a class="header-anchor" href="#三-案例实操" aria-hidden="true">#</a> （三）案例实操</h2><h3 id="_1-点击-div-2s-后颜色变为-lightblue" tabindex="-1"><a class="header-anchor" href="#_1-点击-div-2s-后颜色变为-lightblue" aria-hidden="true">#</a> 1.点击 div，2s 后颜色变为 lightblue</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取元素</span>
<span class="token keyword">let</span> ad <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;ad&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 绑定事件</span>
ad<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// // 解决this指向报错方法一：保存外层的this值</span>
  <span class="token comment">// let _this = this;</span>
  <span class="token comment">// // 定时器</span>
  <span class="token comment">// setTimeout(function() {</span>
  <span class="token comment">//   // 修改背景颜色</span>

  <span class="token comment">//   // 报错，this指向window</span>
  <span class="token comment">//   // console.log(this);</span>
  <span class="token comment">//   // this.style.background = &quot;lightblue&quot;;</span>
  <span class="token comment">//   // // Cannot set properties of undefined (setting &#39;background&#39;)</span>

  <span class="token comment">//   // 解决this指向报错方法一：保存外层的this值</span>
  <span class="token comment">//   _this.style.background = &quot;lightblue&quot;;</span>
  <span class="token comment">// }, 2000);</span>

  <span class="token comment">// 解决this指向报错方法二：使用箭头函数，this指向外层this值【即事件源ad】</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改背景颜色</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&quot;lightblue&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-从数组中返回偶数的元素" tabindex="-1"><a class="header-anchor" href="#_2-从数组中返回偶数的元素" aria-hidden="true">#</a> 2.从数组中返回偶数的元素</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// const arr = [1, 6, 9, 10, 100, 25];</span>
<span class="token comment">// const result = arr.filter(function(item) {</span>
<span class="token comment">//   if (item % 2 == 0)</span>
<span class="token comment">//     return true;</span>
<span class="token comment">//   else</span>
<span class="token comment">//     return false;</span>
<span class="token comment">// });</span>
<span class="token comment">// console.log(result);</span>
<span class="token comment">// // [6, 10, 100]</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [6, 10, 100]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-总结" tabindex="-1"><a class="header-anchor" href="#四-总结" aria-hidden="true">#</a> （四）总结</h2><ul><li>箭头函数适用于 <strong>与 <code>this</code> 无关的回调</strong><ul><li>如：定时器、数组的方法回调</li></ul></li><li>不适用于 <strong>与 <code>this</code> 有关的回调</strong><ul><li>如： <code>DOM</code> 元素的事件回调、对象的方法</li></ul></li><li><strong>不适合 !== 不能</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// this指向“YG”这个对象</span>
<span class="token keyword">const</span> <span class="token constant">YG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// this指向“YG2”外层的this值</span>
<span class="token keyword">const</span> <span class="token constant">YG2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","06.html.vue"]]);export{d as default};
