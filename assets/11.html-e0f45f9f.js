const e=JSON.parse('{"key":"v-cdc3e636","path":"/notes/ECMAScript6-11/11.html","title":"十一、Iterator迭代器","lang":"zh-CN","frontmatter":{"title":"十一、Iterator迭代器","copyright":false,"date":"2023-01-01T00:00:00.000Z","category":["笔记","ECMAScript"],"tag":["尚硅谷","李强"]},"headers":[{"level":2,"title":"（一）Iterator 简介","slug":"一-iterator-简介","link":"#一-iterator-简介","children":[]},{"level":2,"title":"（二）工作原理","slug":"二-工作原理","link":"#二-工作原理","children":[]},{"level":2,"title":"（三）自定义遍历数据","slug":"三-自定义遍历数据","link":"#三-自定义遍历数据","children":[{"level":3,"title":"1.banji.stus.forEach()","slug":"_1-banji-stus-foreach","link":"#_1-banji-stus-foreach","children":[]},{"level":3,"title":"2.Symbol.iterator","slug":"_2-symbol-iterator","link":"#_2-symbol-iterator","children":[]}]}],"git":{"createdTime":1672650149000,"updatedTime":1672650149000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"notes/ECMAScript6-11/11.md","localizedDate":"2023年1月1日","excerpt":"<h2> （一）Iterator 简介</h2>\\n<ul>\\n<li><code>Iterator</code> 是一种接口【即对象的属性】\\n<ul>\\n<li>为各种不同的数据结构提供统一的访问机制</li>\\n<li>任何数据结构只要部署 <code>iterator</code> 接口就可以完成遍历操作</li>\\n</ul>\\n</li>\\n<li><code>ES6</code>创造了一种新的遍历命令 <code>for...of</code> 循环\\n<ul>\\n<li><code>iterator</code> 主要供 <code>for...of</code> 消费</li>\\n</ul>\\n</li>\\n<li>原生具备 <code>iterator</code> 接口的数据（即可用 <code>for...of</code> 遍历）\\n<ul>\\n<li><code>Array</code></li>\\n<li><code>Arguments</code></li>\\n<li><code>Set</code></li>\\n<li><code>Map</code></li>\\n<li><code>String</code></li>\\n<li><code>TypeArray</code></li>\\n<li><code>NodeList</code></li>\\n</ul>\\n</li>\\n<li>需要自定义遍历数据的时候，要想到迭代器</li>\\n</ul>"}');export{e as data};