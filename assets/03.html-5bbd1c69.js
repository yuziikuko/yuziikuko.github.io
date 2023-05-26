import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-3664ad8b.js";const t={},e=p(`<p>调整元素在 z 轴的位置，正常情况就是调整元素和人眼之间的距离，距离越大，表示元素离人越近。</p><p>z 轴平移属于立体效果（近大远小）。默认情况下网页是不支持透视的，所以单独设置 translateZ 看不出效果。</p><p>如果需要看见效果，必须设置网页的视距，一般设置 html 的 perspective 属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","03.html.vue"]]);export{d as default};
