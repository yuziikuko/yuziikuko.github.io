const e=JSON.parse('{"key":"v-50d0b795","path":"/notes/Vue2/08.html","title":"八、事件处理","lang":"zh-CN","frontmatter":{"title":"八、事件处理","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["Vue.js","尚硅谷"]},"headers":[{"level":2,"title":"1.事件的基本使用","slug":"_1-事件的基本使用","link":"#_1-事件的基本使用","children":[]},{"level":2,"title":"2.事件的修饰符","slug":"_2-事件的修饰符","link":"#_2-事件的修饰符","children":[]},{"level":2,"title":"3.键盘事件","slug":"_3-键盘事件","link":"#_3-键盘事件","children":[{"level":3,"title":"1）常用的按键别名","slug":"_1-常用的按键别名","link":"#_1-常用的按键别名","children":[]},{"level":3,"title":"2）未提供别名","slug":"_2-未提供别名","link":"#_2-未提供别名","children":[]},{"level":3,"title":"3）系统修饰键（用法特殊）","slug":"_3-系统修饰键-用法特殊","link":"#_3-系统修饰键-用法特殊","children":[]},{"level":3,"title":"4）keyCode","slug":"_4-keycode","link":"#_4-keycode","children":[]},{"level":3,"title":"5）自定义按键别名","slug":"_5-自定义按键别名","link":"#_5-自定义按键别名","children":[]}]}],"git":{"createdTime":1662456995000,"updatedTime":1662456995000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"notes/Vue2/08.md","localizedDate":"2022年9月6日","excerpt":"<h2> 1.事件的基本使用</h2>\\n<ul>\\n<li>\\n<p>使用<code>v-on:xxx</code>或<code>@xxx</code>绑定事件，其中 xxx 是事件名。</p>\\n</li>\\n<li>\\n<p>事件的回调需要配置在 methods 对象中，最终会在 vm 上。</p>\\n</li>\\n<li>\\n<p>methods 中配置的函数，<strong>不要用箭头函数</strong>，否则 this 就不再是 vm。</p>\\n</li>\\n<li>\\n<p>methods 中配置的函数，都是被 Vue 所管理的函数，this 的指向是 <strong>vm</strong> 或 <strong>组件实例对象</strong>。</p>\\n</li>\\n<li>\\n<p><code>@click=\\"demo\\"</code>和<code>@click=\\"demo($event)\\"</code>效果一致，但后者可以传参。</p>\\n</li>\\n</ul>"}');export{e as data};