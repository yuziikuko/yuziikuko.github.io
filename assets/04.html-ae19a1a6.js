import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as l,a,b as n,d as c,e as s}from"./app-546dd93b.js";const r="/assets/contenteditable-1f68ee6d.png",o={},p=s(`<h2 id="一-补充重要知识" tabindex="-1"><a class="header-anchor" href="#一-补充重要知识" aria-hidden="true">#</a> （一）补充重要知识</h2><h3 id="_1-控制尺寸" tabindex="-1"><a class="header-anchor" href="#_1-控制尺寸" aria-hidden="true">#</a> 1.控制尺寸</h3><p>使用 border-box 控制尺寸更加直观，因此，很多网站都会加入下面的代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-颜色的-alpha-通道" tabindex="-1"><a class="header-anchor" href="#_2-颜色的-alpha-通道" aria-hidden="true">#</a> 2.颜色的 alpha 通道</h3><ul><li>颜色的 alpha 通道标识了色彩的透明度</li><li>是一个 0~1 之间的取值，0 表示完全透明，1 表示完全不透明</li><li>在 css 中使用 rgba 可以为颜色添加 alpha 通道</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.alpha</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 一个完全透明的颜色，等同于 transparent */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 一个完全不透明的颜色，等同于rgb */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 一个半透明的颜色 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rgba 还可以有多种书写方式</p><ul><li><code>rgba(0, 0, 0, 0.5)</code></li><li><code>rgb(0 0 0 / 50%)</code></li><li><code>#00000080</code></li></ul><h3 id="_3-尺寸的百分比" tabindex="-1"><a class="header-anchor" href="#_3-尺寸的百分比" aria-hidden="true">#</a> 3.尺寸的百分比</h3><ul><li>绝大部分可以书写尺寸的地方，都可以书写百分比</li><li>百分比是一个相对单位，其相对于<strong>元素的参考系</strong>，比如： <ul><li>普通元素的参考系为<strong>父元素的内容区域</strong></li><li>绝对（固定）定位元素的参考系为父元素中<strong>第一个定位元素的 padding 区域</strong></li></ul></li><li>下面罗列常见的百分比情况</li></ul><table><thead><tr><th>css 属性</th><th>百分比相对于</th><th>备注</th></tr></thead><tbody><tr><td>width</td><td>参考系的宽度</td><td></td></tr><tr><td>height</td><td>参考系的高度</td><td>参考系高度受本身宽度影响(参考系高度取决本身)时，设置无效</td></tr><tr><td>padding</td><td>参考系的宽度</td><td>一般不设置为百分比</td></tr><tr><td>border</td><td>参考系的宽度</td><td>一般不设置为百分比</td></tr><tr><td>margin</td><td>参考系的宽度</td><td>一般不设置为百分比</td></tr></tbody></table><h3 id="_4-最大最小宽高" tabindex="-1"><a class="header-anchor" href="#_4-最大最小宽高" aria-hidden="true">#</a> 4.最大最小宽高</h3><ul><li>最大宽度：max-width，最大高度：max-height</li><li>最小宽度：min-width，最小高度：min-height</li><li>当一个元素的尺寸会自动变化时，设置最大最小宽高，可以让它不至于变得过小或过大</li></ul><p>在实际开发中，我们通常为 PC 端的页面设置一个最小宽度，通常此宽度为<strong>设计稿的宽度</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 1226px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又或者，我们会为页面中的所有图片设置一个最大宽度，让其不至于超过容器</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-表单进阶" tabindex="-1"><a class="header-anchor" href="#二-表单进阶" aria-hidden="true">#</a> （二）表单进阶</h2><ul><li>当某个表单项 HTML 结构可嵌套也可不嵌套时，首选嵌套结构，方便 CSS 编写</li><li>通常表单项包裹在 <code>&lt;form&gt;</code> 元素中</li></ul><h2 id="三-绝对定位收官" tabindex="-1"><a class="header-anchor" href="#三-绝对定位收官" aria-hidden="true">#</a> （三）绝对定位收官</h2><h3 id="_1-什么时候使用绝对定位" tabindex="-1"><a class="header-anchor" href="#_1-什么时候使用绝对定位" aria-hidden="true">#</a> 1.什么时候使用绝对定位</h3><p>下面三个条件满足任何一个时使用：</p><ul><li>元素出现在一个天马行空的位置（如：回到顶部按钮）</li><li>元素是否存在，不影响其他元素的排列（如：顶部导航栏的下拉菜单）</li><li>单个元素在某个区域内水平垂直居中（如：遮罩层 modal）</li></ul><h3 id="_2-fixed-和-absolute-的区别" tabindex="-1"><a class="header-anchor" href="#_2-fixed-和-absolute-的区别" aria-hidden="true">#</a> 2. <code>fixed</code> 和 <code>absolute</code> 的区别</h3><ul><li>fixed 是绝对定位的一种特殊情况，它们的参考系不一样</li><li>absolute 参考有定位（一般为 relative）的父元素【子绝父相】</li><li>fixed 参考视口（viewport）</li></ul><h2 id="四-属性值的计算过程" tabindex="-1"><a class="header-anchor" href="#四-属性值的计算过程" aria-hidden="true">#</a> （四）属性值的计算过程</h2><p>所有的 HTML 元素的每一个 CSS 属性都必须有值，浏览器才能渲染该元素</p><div class="hint-container info"><p class="hint-container-title">计算过程</p><p>无属性值 -&gt; 确定声明值 -&gt; 层叠冲突 -&gt; 使用继承 -&gt; 使用默认值 -&gt; 每个属性都有值</p></div><h3 id="_1-确定声明值" tabindex="-1"><a class="header-anchor" href="#_1-确定声明值" aria-hidden="true">#</a> 1.确定声明值</h3><ul><li>参考样式表中没有冲突的声明，作为 CSS 属性值</li><li>包括：作者样式表、浏览器默认样式表</li></ul><h3 id="_2-层叠冲突" tabindex="-1"><a class="header-anchor" href="#_2-层叠冲突" aria-hidden="true">#</a> 2.层叠冲突</h3><p>对样式表有冲突的声明使用层叠规则，确定 CSS 属性值</p><ul><li>比较重要性：作者样式表覆盖浏览器默认样式表</li><li>比较特殊性：权重</li><li>比较源次序：代码书写顺序靠后者胜</li></ul><h3 id="_3-使用继承" tabindex="-1"><a class="header-anchor" href="#_3-使用继承" aria-hidden="true">#</a> 3.使用继承</h3><p>对<strong>仍然没有值</strong>的属性，若<strong>可以继承</strong>，则继承父元素的值</p><h3 id="_4-使用默认值" tabindex="-1"><a class="header-anchor" href="#_4-使用默认值" aria-hidden="true">#</a> 4.使用默认值</h3><p>对<strong>仍然没有值</strong>的属性，使用默认值</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>%、em、rem、auto 等相对单位，计算后都会转成 px 绝对单位</p></div><h2 id="五-拓展知识" tabindex="-1"><a class="header-anchor" href="#五-拓展知识" aria-hidden="true">#</a> （五）拓展知识</h2><h3 id="_1-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_1-伪类选择器" aria-hidden="true">#</a> 1.伪类选择器</h3>`,41),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},h=s('<table><thead><tr><th>伪类</th><th>含义</th></tr></thead><tbody><tr><td>:link</td><td>选中未访问过的超链接</td></tr><tr><td>:visited</td><td>选中已访问过的超链接</td></tr><tr><td>:hover</td><td>选中鼠标移入的元素</td></tr><tr><td>:active</td><td>选中鼠标按下的元素</td></tr><tr><td>:focus</td><td>选中聚焦的表单元素</td></tr><tr><td>:disabled</td><td>选中被禁用的表单元素</td></tr><tr><td>:checked</td><td>选中被选中的表单元素</td></tr><tr><td>:first-child</td><td>选中第一个子元素</td></tr><tr><td>:last-child</td><td>选中最后一个子元素</td></tr><tr><td>:nth-child(an+b)</td><td>选中第「an+b」个子元素<br>a 和 b 是常量，n 的值会从 0 开始依次递增</td></tr><tr><td>:first-of-type</td><td>选中第一个指定类型的子元素</td></tr><tr><td>:last-of-type</td><td>选中最后一个指定类型的子元素</td></tr><tr><td>:nth-of-type(an+b)</td><td>选中第「an+b」个指定类型的子元素<br>a 和 b 是常量，n 的值会从 0 开始依次递增</td></tr></tbody></table><h3 id="_2-contenteditable-属性" tabindex="-1"><a class="header-anchor" href="#_2-contenteditable-属性" aria-hidden="true">#</a> 2.contenteditable 属性</h3><ul><li>该属性是一个布尔属性，可以设置到任何元素上，它可以让该元素变为可编辑的状态</li><li>在实际开发中，通常用于制作富文本框</li></ul><p><img src="'+r+`" alt=""></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">contenteditable</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-table-元素" tabindex="-1"><a class="header-anchor" href="#_3-table-元素" aria-hidden="true">#</a> 3.table 元素</h3><ul><li>table 元素用于表达一个表格，受 CSS3 的影响，现在已经很少使用了</li><li>浏览器渲染效率低</li></ul>`,7);function b(k,v){const t=i("ExternalLinkIcon");return d(),l("div",null,[p,a("p",null,[n("css 伪类选择器大全："),a("a",u,[n("https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes"),c(t)])]),h])}const _=e(o,[["render",b],["__file","04.html.vue"]]);export{_ as default};