import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-c79a73e9.js";const e={},p=t(`<h2 id="一-translatez" tabindex="-1"><a class="header-anchor" href="#一-translatez" aria-hidden="true">#</a> （一）translateZ</h2><ul><li>调整元素在 z 轴的位置 <ul><li>正常情况就是调整元素和人眼之间的距离</li><li>距离越大，表示元素离人越近</li></ul></li><li>z 轴平移属于立体效果【近大远小】 <ul><li>默认情况下网页是不支持透视的，所以单独设置 translateZ 看不出效果</li></ul></li></ul><h2 id="二-perspective" tabindex="-1"><a class="header-anchor" href="#二-perspective" aria-hidden="true">#</a> （二）perspective</h2><ul><li>如果需要透视效果，必须设置网页的视距</li><li>一般设置 html 的 <code>perspective</code> 属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 设置当前网页的视距为800px，即：人眼距离网页的距离 */</span>
  <span class="token property">perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>240<span class="token punctuation">,</span> 240<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body:hover .box1</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","03.html.vue"]]);export{d as default};
