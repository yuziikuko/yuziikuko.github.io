const e=JSON.parse('{"key":"v-4f1bdef6","path":"/notes/Vue2/07.html","title":"七、数据代理","lang":"zh-CN","frontmatter":{"title":"七、数据代理","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹"]},"headers":[{"level":2,"title":"（一）概念","slug":"一-概念","link":"#一-概念","children":[]},{"level":2,"title":"（二）好处","slug":"二-好处","link":"#二-好处","children":[]},{"level":2,"title":"（三）基本原理","slug":"三-基本原理","link":"#三-基本原理","children":[]}],"git":{"createdTime":1662456995000,"updatedTime":1662456995000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"notes/Vue2/07.md","localizedDate":"2022年9月6日","excerpt":"<h2> （一）概念</h2>\\n<p>通过 vm 对象来代理 data 对象中属性的操作（读/写）</p>\\n<h2> （二）好处</h2>\\n<p>更加方便的操作 data 中的数据</p>\\n<h2> （三）基本原理</h2>\\n<ul>\\n<li>通过 <code>Object.defineProperty()</code> 把 data 对象中所有属性添加到 vm 上</li>\\n<li>为每一个添加到 vm 上的属性，都指定一个 getter、setter</li>\\n<li>在 getter 和 setter 内部去操作（读/写）data 中对应的属性</li>\\n</ul>\\n"}');export{e as data};