const e=JSON.parse('{"key":"v-23679941","path":"/articles/10.html","title":"十、New Bing尝鲜：VuePress项目使用LaTeX语法渲染数学公式","lang":"zh-CN","frontmatter":{"title":"十、New Bing尝鲜：VuePress项目使用LaTeX语法渲染数学公式","copyright":false,"date":"2023-03-30T00:00:00.000Z","isOriginal":true,"category":["项目搭建"],"tag":["ChatGPT","VuePress","LaTex"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"（一）安装 markdown-it-katex","slug":"一-安装-markdown-it-katex","link":"#一-安装-markdown-it-katex","children":[]},{"level":2,"title":"（二）引入样式","slug":"二-引入样式","link":"#二-引入样式","children":[]},{"level":2,"title":"（三）修改配置文件 .vuepress/config.js","slug":"三-修改配置文件-vuepress-config-js","link":"#三-修改配置文件-vuepress-config-js","children":[]},{"level":2,"title":"（四）Markdown 文件中使用","slug":"四-markdown-文件中使用","link":"#四-markdown-文件中使用","children":[]}],"git":{"createdTime":1680228838000,"updatedTime":1680228838000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":442},"filePathRelative":"articles/10.md","localizedDate":"2023年3月30日","excerpt":"<h2> 前言</h2>\\n<p>最近在使用 <code>VuePress</code> 搭建 <a href=\\"https://yuziikuko.gitee.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">个人主页</a>，遇到数学公式无法渲染的问题。</p>\\n<p><code>VuePress</code> 是一个以 <code>Markdown</code> 为中心的静态网站生成器，但是无法渲染 <code>LaTeX</code> 语法的数学公式。</p>\\n<p>经过和 <code>New Bing</code> 的一番交流后成功渲染，解决方案是使用 <code>VuePress</code> 支持的 <code>Markdown</code> 插件扩展搭配 <code>markdown-it-katex</code> 插件，在此记录一下。</p>"}');export{e as data};