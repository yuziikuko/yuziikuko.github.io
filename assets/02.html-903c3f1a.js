const e=JSON.parse('{"key":"v-8b64bfca","path":"/notes/Nginx/02.html","title":"二、安装（Linux）","lang":"zh-CN","frontmatter":{"title":"二、安装（Linux）","copyright":false,"date":"2023-01-02T00:00:00.000Z","category":["笔记","Nginx"],"tag":["尚硅谷"]},"headers":[{"level":3,"title":"1.使用远程连接工具连接 Linux 操作系统","slug":"_1-使用远程连接工具连接-linux-操作系统","link":"#_1-使用远程连接工具连接-linux-操作系统","children":[]},{"level":3,"title":"2.安装 Nginx 相关依赖包","slug":"_2-安装-nginx-相关依赖包","link":"#_2-安装-nginx-相关依赖包","children":[]},{"level":3,"title":"3.安装 Nginx","slug":"_3-安装-nginx","link":"#_3-安装-nginx","children":[]},{"level":3,"title":"4.查看开放的端口号","slug":"_4-查看开放的端口号","link":"#_4-查看开放的端口号","children":[]},{"level":3,"title":"5.设置开放的端口号","slug":"_5-设置开放的端口号","link":"#_5-设置开放的端口号","children":[]},{"level":3,"title":"6.重启防火墙","slug":"_6-重启防火墙","link":"#_6-重启防火墙","children":[]}],"git":{"createdTime":1672670733000,"updatedTime":1672670733000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":0.56,"words":168},"filePathRelative":"notes/Nginx/02.md","localizedDate":"2023年1月2日","excerpt":"<h3> 1.使用远程连接工具连接 <code>Linux</code> 操作系统</h3>\\n<h3> 2.安装 <code>Nginx</code> 相关依赖包</h3>\\n<ul>\\n<li>\\n<p>pcre 8.37</p>\\n</li>\\n<li>\\n<p>openssl 1.0.1</p>\\n</li>\\n<li>\\n<p>zlib 1.2.8</p>\\n</li>\\n<li>\\n<p>Nginx 1.11.1</p>\\n</li>\\n<li>\\n<p>一键安装上面四个依赖</p>\\n</li>\\n</ul>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> gcc zlib zlib-devel pcre-devel openssl openssl-devel\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};