const e=JSON.parse('{"key":"v-4693a3db","path":"/notes/Vue2/02.html","title":"二、初识Vue","lang":"zh-CN","frontmatter":{"title":"二、初识Vue","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹"]},"headers":[],"git":{"createdTime":1662456995000,"updatedTime":1662456995000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.9,"words":269},"filePathRelative":"notes/Vue2/02.md","localizedDate":"2022年9月6日","excerpt":"<ol>\\n<li>想让 Vue 工作，就必须创建一个 Vue 实例，且要传入一个 <strong>配置对象</strong></li>\\n<li>root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue 语法：<strong>插值语法</strong><code>{{ XXX }}</code>、<strong>指令语法</strong></li>\\n<li>root 容器里的代码被称为【Vue 模板】</li>\\n<li>Vue 实例和容器是 <strong>一一对应</strong> 的</li>\\n<li>真实开发中只有一个 Vue 实例，并且会配合组件一起使用</li>\\n<li><code>{{xxx}}</code>中的 xxx 要写 <strong>JS 表达式</strong> ，且 xxx 可以自动读取到 data 中的所有属性</li>\\n<li>一旦 data 中的数据发生改变，那么模板（页面）中用到该数据的地方也会自动更新</li>\\n</ol>"}');export{e as data};