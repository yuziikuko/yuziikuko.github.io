const e=JSON.parse(`{"key":"v-3c46b740","path":"/notes/Vue2/30.html","title":"三十、WebStorage","lang":"zh-CN","frontmatter":{"title":"三十、WebStorage","copyright":false,"date":"2022-09-07T00:00:00.000Z","category":["笔记","Vue2"],"tag":["Vue.js","尚硅谷"]},"headers":[{"level":2,"title":"1.存储大小","slug":"_1-存储大小","link":"#_1-存储大小","children":[]},{"level":2,"title":"2.实现机制","slug":"_2-实现机制","link":"#_2-实现机制","children":[]},{"level":2,"title":"3.相关 API","slug":"_3-相关-api","link":"#_3-相关-api","children":[{"level":3,"title":"1）xxxxStorage.setItem('key', 'value');","slug":"_1-xxxxstorage-setitem-key-value","link":"#_1-xxxxstorage-setitem-key-value","children":[]},{"level":3,"title":"2）xxxxStorage.getItem('person');","slug":"_2-xxxxstorage-getitem-person","link":"#_2-xxxxstorage-getitem-person","children":[]},{"level":3,"title":"3）xxxxStorage.removeItem('key');","slug":"_3-xxxxstorage-removeitem-key","link":"#_3-xxxxstorage-removeitem-key","children":[]},{"level":3,"title":"4）xxxxStorage.clear();","slug":"_4-xxxxstorage-clear","link":"#_4-xxxxstorage-clear","children":[]}]},{"level":2,"title":"4.备注","slug":"_4-备注","link":"#_4-备注","children":[]}],"git":{"createdTime":1662541545000,"updatedTime":1662541545000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.85,"words":255},"filePathRelative":"notes/Vue2/30.md","localizedDate":"2022年9月7日","excerpt":"<h2> 1.存储大小</h2>\\n<p>存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）。</p>\\n<h2> 2.实现机制</h2>\\n<p>浏览器端通过<code>Window.sessionStorage</code>和<code>Window.localStorage</code>属性来实现本地存储机制。</p>\\n<h2> 3.相关 API</h2>\\n<h3> 1）xxxxStorage.setItem('key', 'value');</h3>\\n<p>该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。</p>\\n<h3> 2）xxxxStorage.getItem('person');</h3>"}`);export{e as data};