const e=JSON.parse('{"key":"v-48487c7a","path":"/notes/Vue2/03.html","title":"三、Vue模板语法","lang":"zh-CN","frontmatter":{"title":"三、Vue模板语法","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["Vue.js","尚硅谷"]},"headers":[{"level":2,"title":"1.插值语法","slug":"_1-插值语法","link":"#_1-插值语法","children":[]},{"level":2,"title":"2.指令语法","slug":"_2-指令语法","link":"#_2-指令语法","children":[]}],"git":{"createdTime":1662456995000,"updatedTime":1662456995000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.51,"words":154},"filePathRelative":"notes/Vue2/03.md","localizedDate":"2022年9月6日","excerpt":"<p>有两大类：插值语法、指令语法。</p>\\n<h2> 1.插值语法</h2>\\n<ul>\\n<li>\\n<p>功能：用于解析标签体内容。</p>\\n</li>\\n<li>\\n<p>写法：<code>{{xxx}}</code>，xxx 是 JS 表达式，且可以直接读取到 data 中的所有属性。</p>\\n</li>\\n</ul>\\n<h2> 2.指令语法</h2>\\n<ul>\\n<li>\\n<p>功能：用于解析标签（包括：标签属性、标签体内容、绑定事件......）。</p>\\n</li>\\n<li>\\n<p>举例：<code>v-bind:href=\\"xxx\\"</code>或简写为<code>:href=\\"xxx\\"</code>，xxx 同样要写 JS 表达式，且可以直接读取到 data 中的所有属性。</p>\\n</li>\\n<li>\\n<p>备注：Vue 中有很多指令，且形式都是<code>v-???</code>。</p>\\n</li>\\n</ul>"}');export{e as data};