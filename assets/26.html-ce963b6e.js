const n=JSON.parse('{"key":"v-9199064e","path":"/notes/Vue2/26.html","title":"二十六、插件","lang":"zh-CN","frontmatter":{"title":"二十六、插件","copyright":false,"date":"2022-09-07T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹"]},"headers":[{"level":2,"title":"（一）功能","slug":"一-功能","link":"#一-功能","children":[]},{"level":2,"title":"（二）本质","slug":"二-本质","link":"#二-本质","children":[]},{"level":2,"title":"（三）定义插件","slug":"三-定义插件","link":"#三-定义插件","children":[]},{"level":2,"title":"（四）使用插件","slug":"四-使用插件","link":"#四-使用插件","children":[]}],"git":{"createdTime":1662541545000,"updatedTime":1662541545000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"notes/Vue2/26.md","localizedDate":"2022年9月7日","excerpt":"<h2> （一）功能</h2>\\n<ul>\\n<li>用于增强 Vue 的功能</li>\\n</ul>\\n<h2> （二）本质</h2>\\n<ul>\\n<li>包含 install 方法的一个对象</li>\\n<li>install 的第一个参数是 Vue</li>\\n<li>第二个以后的参数是插件使用者传递的数据</li>\\n</ul>\\n<h2> （三）定义插件</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>对象<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">install</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">Vue<span class=\\"token punctuation\\">,</span> options</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// 1.添加全局过滤器</span>\\n  Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">filter</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 2.添加全局指令</span>\\n  Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">directive</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 3.配置全局混入（合）</span>\\n  Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">mixin</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 4.添加实例方法</span>\\n  <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">$myMethod</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span>$myProperty <span class=\\"token operator\\">=</span> xxx<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};