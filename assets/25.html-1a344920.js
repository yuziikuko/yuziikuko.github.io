const s=JSON.parse('{"key":"v-9ed9daf4","path":"/notes/React18/25.html","title":"二十五、React Hooks","lang":"zh-CN","frontmatter":{"title":"二十五、React Hooks","copyright":false,"date":"2022-12-18T00:00:00.000Z","category":["笔记","React18"],"tag":["Hooks","李立超"]},"headers":[{"level":2,"title":"（一）useMemo","slug":"一-usememo","link":"#一-usememo","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js","link":"#_1-src-index-js","children":[]},{"level":3,"title":"2. src/App.js","slug":"_2-src-app-js","link":"#_2-src-app-js","children":[]},{"level":3,"title":"3. src/components/Some.js","slug":"_3-src-components-some-js","link":"#_3-src-components-some-js","children":[]}]},{"level":2,"title":"（二）useImperativeHandle","slug":"二-useimperativehandle","link":"#二-useimperativehandle","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js","link":"#_1-src-app-js","children":[]},{"level":3,"title":"2. src/components/Some.js","slug":"_2-src-components-some-js","link":"#_2-src-components-some-js","children":[]}]},{"level":2,"title":"（三）三个 effect","slug":"三-三个-effect","link":"#三-三个-effect","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-1","link":"#_1-src-app-js-1","children":[]},{"level":3,"title":"2. src/components/Some.js","slug":"_2-src-components-some-js-1","link":"#_2-src-components-some-js-1","children":[]}]},{"level":2,"title":"（四）useDebugValue","slug":"四-usedebugvalue","link":"#四-usedebugvalue","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-2","link":"#_1-src-app-js-2","children":[]},{"level":3,"title":"2. src/hooks/useMyHook.js","slug":"_2-src-hooks-usemyhook-js","link":"#_2-src-hooks-usemyhook-js","children":[]}]},{"level":2,"title":"（五）useDeferredValue","slug":"五-usedeferredvalue","link":"#五-usedeferredvalue","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-3","link":"#_1-src-app-js-3","children":[]},{"level":3,"title":"2. src/components/StudentList.js","slug":"_2-src-components-studentlist-js","link":"#_2-src-components-studentlist-js","children":[]}]},{"level":2,"title":"（六）useTransition 和 useId","slug":"六-usetransition-和-useid","link":"#六-usetransition-和-useid","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-4","link":"#_1-src-app-js-4","children":[]},{"level":3,"title":"2. src/components/StudentList.js","slug":"_2-src-components-studentlist-js-1","link":"#_2-src-components-studentlist-js-1","children":[]}]}],"git":{"createdTime":1671354676000,"updatedTime":1671354676000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":5.29,"words":1586},"filePathRelative":"notes/React18/25.md","localizedDate":"2022年12月18日","excerpt":"<h2> （一）useMemo</h2>\\n<ul>\\n<li>引入 <code>useMemo()</code> 解决 <code>sum()</code> 执行过慢导致 <code>count</code> 增加慢的问题</li>\\n<li>作用：缓存函数执行结果\\n<ul>\\n<li><code>useCallback()</code> 缓存函数对象本身</li>\\n</ul>\\n</li>\\n<li>组件也是函数，可以缓存组件渲染结果</li>\\n</ul>\\n<h3> 1. <code>src/index.js</code></h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> App <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&lt;</span>App <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};