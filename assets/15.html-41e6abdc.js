const e=JSON.parse('{"key":"v-fecf2e0e","path":"/notes/Vue2/15.html","title":"十五、收集表单数据","lang":"zh-CN","frontmatter":{"title":"十五、收集表单数据","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["Vue.js","尚硅谷"]},"headers":[],"git":{"createdTime":1662456995000,"updatedTime":1662456995000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"notes/Vue2/15.md","localizedDate":"2022年9月6日","excerpt":"<ul>\\n<li>\\n<p>若<code>&lt;input type=\\"text\\" /&gt;</code>，则 v-model 收集的是 value 值，用户输入的就是 value 值。</p>\\n</li>\\n<li>\\n<p>若<code>&lt;input type=\\"radio\\" /&gt;</code>，则 v-model 收集的是 value 值，且要给标签配置 value 值。</p>\\n</li>\\n<li>\\n<p>若<code>&lt;input type=\\"checkbox\\" /&gt;</code>：</p>\\n<ul>\\n<li>\\n<p>没有配置 input 的 value 属性，那么收集的是 checked（勾选 or 未勾选，是布尔值）。</p>\\n</li>\\n<li>\\n<p>配置 input 的 value 属性：</p>\\n<ul>\\n<li>\\n<p>v-model 的初始值是非数组，那么收集的是 checked（勾选 or 未勾选，是布尔值）。</p>\\n</li>\\n<li>\\n<p>v-model 的初始值是数组，那么收集的是 value 组成的数组。</p>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>v-model 的三个修饰符：</p>\\n<ul>\\n<li>\\n<p>lazy：失去焦点时再收集数据。</p>\\n</li>\\n<li>\\n<p>number：输入字符串转为有效数字。</p>\\n</li>\\n<li>\\n<p>trim：输入首尾空格过滤。</p>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};