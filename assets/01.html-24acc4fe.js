import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as a,c as n,a as e,b as d,d as t,e as r}from"./app-9d848c41.js";const i={},p={href:"https://www.jianshu.com/p/d251d5d3a97a",target:"_blank",rel:"noopener noreferrer"},l=r(`<p>专门用来对浏览器的样式进行重置，有以下三种方式：</p><h2 id="_1-全局" tabindex="-1"><a class="header-anchor" href="#_1-全局" aria-hidden="true">#</a> 1.全局</h2><p>适用于学习场景，容易造成后续代码重叠，样式重复设置等问题。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-reset-css" tabindex="-1"><a class="header-anchor" href="#_2-reset-css" aria-hidden="true">#</a> 2.reset.css</h2><p>直接去除了浏览器的默认样式，少用。</p><blockquote><p><code>CSS reset</code>(css 重置)基本上是不需要的，至少可以说 80%的的<code>CSS reset</code>都是没有必要的，反而增加了页面。</p><p><code>CSS</code>的重写，尤其像<code>*{margin:0;}</code>的做法更是要不得（反而破坏了很多<code>UI</code>的兼容性，比如说单复选框等）。我不是一概鄙弃<code>CSS reset</code>，有些常用标签我也是会简单重置一下的，而且会避免<code>overwrite</code>（样式重写），以保证样式最精简，渲染最高效。</p></blockquote><h2 id="_3-normalize-css" tabindex="-1"><a class="header-anchor" href="#_3-normalize-css" aria-hidden="true">#</a> 3.normalize.css</h2><ul><li><p>对默认样式进行了统一，常用。</p></li><li><p>保留了标签的基本样式，如 li 的列表序号、p 间距等样式。</p><blockquote><p><code>Normalize.css</code> 只是一个很小的<code>CSS</code>文件，但它在默认的<code>HTML</code>元素样式上提供了跨浏览器的高度一致性。相比于传统的<code>CSS reset</code>，<code>Normalize.css</code>是一种现代的、为<code>HTML5</code>准备的优质替代方案。</p><p><code>Normalize.css</code>现在已经被用于<code>Twitter</code>、<code>Bootstrap</code>、<code>HTML5 Boilerplate</code>、<code>GOV.UK</code>、<code>Rdio</code>、<code>CSS Tricks</code> 以及许许多多其他框架、工具和网站上。</p></blockquote></li></ul>`,9);function u(h,m){const s=c("ExternalLinkIcon");return a(),n("div",null,[e("p",null,[e("a",p,[d("https://www.jianshu.com/p/d251d5d3a97a"),t(s)])]),l])}const v=o(i,[["render",u],["__file","01.html.vue"]]);export{v as default};