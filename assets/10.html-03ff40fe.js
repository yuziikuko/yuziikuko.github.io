const n=JSON.parse('{"key":"v-73249c2a","path":"/notes/React18/10.html","title":"十、React.memo","lang":"zh-CN","frontmatter":{"title":"十、React.memo","copyright":false,"date":"2022-12-17T00:00:00.000Z","category":["笔记","React18"],"tag":["李立超"]},"headers":[{"level":2,"title":"（一） src/index.js","slug":"一-src-index-js","link":"#一-src-index-js","children":[]},{"level":2,"title":"（二） src/App.jsx","slug":"二-src-app-jsx","link":"#二-src-app-jsx","children":[]},{"level":2,"title":"（三） src/A.jsx","slug":"三-src-a-jsx","link":"#三-src-a-jsx","children":[]},{"level":2,"title":"（四） src/B.jsx","slug":"四-src-b-jsx","link":"#四-src-b-jsx","children":[]}],"git":{"createdTime":1671288564000,"updatedTime":1671288564000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":256},"filePathRelative":"notes/React18/10.md","localizedDate":"2022年12月17日","excerpt":"<ul>\\n<li><code>React.memo()</code> 是一个高阶组件\\n<ul>\\n<li>接收另一个组件作为参数，并且返回一个包装后的新组件</li>\\n<li>新的组件具有缓存功能，只有组件 <code>props</code> 发生变化时才会重新渲染，否则总是返回缓存中的结果</li>\\n</ul>\\n</li>\\n<li>适用于数据较多加载较缓慢的组件</li>\\n</ul>\\n<h2> （一） <code>src/index.js</code></h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> App <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&lt;</span>App <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};