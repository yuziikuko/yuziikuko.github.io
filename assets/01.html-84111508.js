import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as l,a as e,b as a,d as o,e as n}from"./app-ea9baf88.js";const t="/assets/正向代理-4ba68142.png",r="/assets/反向代理-764c19dd.png",p="/assets/负载均衡-c544baec.png",h="/assets/动静分离-eb95a92f.png",u={},v=e("h2",{id:"一-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一-简介","aria-hidden":"true"},"#"),a(" （一）简介")],-1),_=e("h3",{id:"_1-概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-概述","aria-hidden":"true"},"#"),a(" 1.概述")],-1),g=n("<li><code>Nginx</code> (engine x)是一个高性能的 <code>HTTP</code> 和反向代理 <code>web</code> 服务器</li><li>同时也提供了 <code>IMAP/POP3/SMTP</code> 服务</li><li><code>Nginx</code> 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 <code>Rambler.ru</code> 站点（俄文： <code>Рамблер</code> ）开发的</li><li>其特点是占有内存少，并发能力强，事实上 <code>Nginx</code> 的并发能力在同类型的网页服务器中表现较好</li><li>中国大陆使用 <code>Nginx</code> 网站用户有：百度、京东、新浪、网易、腾讯、淘宝等</li>",5),k={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},x=n('<h3 id="_2-作为-web-服务器" tabindex="-1"><a class="header-anchor" href="#_2-作为-web-服务器" aria-hidden="true">#</a> 2.作为 Web 服务器</h3><ul><li><code>Nginx</code> 可以作为静态页面的 <code>Web</code> 服务器，同时还支持 <code>CGI</code> 协议的动态语言</li><li>比如 <code>Perl</code> 、 <code>PHP</code> 等，但是不支持 <code>Java</code></li><li><code>Java</code> 程序只能通过与 <code>Tomcat</code> 配合完成</li><li><code>Nginx</code> 专为性能优化而开发，性能是其最重要的考量，实现上非常注重效率，能经受高负载的考验 <ul><li>有报告表明能 <strong>支持高达 50000 个并发连接数</strong> （C10K：Connection 10000，万级连接数）</li></ul></li></ul><h2 id="二-反向代理" tabindex="-1"><a class="header-anchor" href="#二-反向代理" aria-hidden="true">#</a> （二）反向代理</h2><h3 id="_1-正向代理" tabindex="-1"><a class="header-anchor" href="#_1-正向代理" aria-hidden="true">#</a> 1.正向代理</h3><ul><li>如果把局域网外的 <code>Internet</code> 想象成一个巨大的资源库，则局域网中的客户端要访问 <code>Internet</code> 时，需要通过代理服务器来访问，这种代理服务就称为正向代理【梯子】</li></ul><div class="hint-container danger"><p class="hint-container-title">重要</p><p>正向代理，是在浏览器（客户端）配置代理服务器，代理的是客户端</p></div><p><img src="'+t+'" alt=""></p><h3 id="_2-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-反向代理" aria-hidden="true">#</a> 2.反向代理</h3><ul><li>客户端对代理无感知，只需将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后再返回给客户端</li><li>此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是反向代理服务器的地址，隐藏了真实服务器的 <code>IP</code> 地址</li></ul><div class="hint-container danger"><p class="hint-container-title">重要</p><p>反向代理，是在服务器端配置代理服务器，代理的是服务器</p></div><p><img src="'+r+'" alt=""></p><h2 id="三-负载均衡" tabindex="-1"><a class="header-anchor" href="#三-负载均衡" aria-hidden="true">#</a> （三）负载均衡</h2><h3 id="_1-早期架构模式" tabindex="-1"><a class="header-anchor" href="#_1-早期架构模式" aria-hidden="true">#</a> 1.早期架构模式</h3><ul><li>客户端发送多个请求到服务器，服务器处理请求，有一些可能要与数据库进行交互，服务器处理完毕后，再将结果返回给客户端</li><li>这种架构模式对于早期的系统相对单一，并发请求相对较少的情况下是比较适合的，成本也低</li><li>但是随着信息数量的不断增长，访问量和数据量的飞速增长，以及系统业务的复杂度增加，这种架构会造成服务器响应客户端的请求日益缓慢，并发量特别大的时候，还容易造成服务器直接崩溃，很明显这是由于服务器性能的瓶颈造成的问题</li></ul><h3 id="_2-集群-——-负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-集群-——-负载均衡" aria-hidden="true">#</a> 2.集群 —— 负载均衡</h3><ul><li>单个服务器解决不了上述问题，于是产生了 <strong>集群</strong> 的概念</li><li><strong>增加服务器的数量</strong> ，然后将请求分发到各个服务器上，将原先请求集中到单个服务器的情况改为将请求分发到多个服务器上，将负载分发到不同的服务器，即负载均衡</li></ul><p><img src="'+p+`" alt=""></p><h3 id="_3-nginx-负载均衡的分配方式-策略" tabindex="-1"><a class="header-anchor" href="#_3-nginx-负载均衡的分配方式-策略" aria-hidden="true">#</a> 3.Nginx 负载均衡的分配方式（策略）</h3><h4 id="_1-轮询-默认" tabindex="-1"><a class="header-anchor" href="#_1-轮询-默认" aria-hidden="true">#</a> 1）轮询（默认）</h4><ul><li>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 <code>down</code> 掉，能自动剔除</li></ul><h4 id="_2-weight" tabindex="-1"><a class="header-anchor" href="#_2-weight" aria-hidden="true">#</a> 2）weight</h4><ul><li><code>weight</code> 代表权重，默认为 1 <ul><li><strong>权重越高被分配的客户端越多</strong></li></ul></li><li>指定轮询几率， <code>weight</code> 和访问比率成正比，用于后端服务器性能不均的情况</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> server_pool</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">server</span>  192.168.5.21	weight=5</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span>	192.168.5.22	weight=10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-ip-hash" tabindex="-1"><a class="header-anchor" href="#_3-ip-hash" aria-hidden="true">#</a> 3）ip_hash</h4><ul><li>每个请求按访问 <code>ip</code> 的 <code>hash</code> 结果分配，这样每个访客固定访问一个后端服务器，可以解决 <code>session</code> 的问题</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> server_pool</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span>	192.168.5.21:80</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server</span>	192.168.5.22:80</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-fair-第三方" tabindex="-1"><a class="header-anchor" href="#_4-fair-第三方" aria-hidden="true">#</a> 4）fair（第三方）</h4><ul><li>按后端服务器的响应时间来分配请求，响应时间短的优先分配</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> server_pool</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span>	192.168.5.21:80</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span>	192.168.5.22:80</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">fair</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-动静分离" tabindex="-1"><a class="header-anchor" href="#四-动静分离" aria-hidden="true">#</a> （四）动静分离</h2><ul><li>为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度，降低原来单个服务器的压力</li></ul><p><img src="`+h+'" alt=""></p><h3 id="_1-实现方式一" tabindex="-1"><a class="header-anchor" href="#_1-实现方式一" aria-hidden="true">#</a> 1.实现方式一</h3><ul><li>纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案 <ul><li>通过 <code>location</code> 指定不同的后缀名实现不同的请求转发</li><li>通过 <code>expires</code> 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量</li><li><code>expires</code> ：给一个资源设定一个过期时间，即无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量</li><li>此种方法非常适合 <strong>不经常变动的资源</strong> ，如果经常更新的文件，不建议使用 <code>Expires</code> 来缓存</li></ul></li><li>例：设置 <code>3d</code> ，表示在这 3 天之内访问这个 <code>URL</code> ，发送一个请求 <ul><li>比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返状态码 <code>304</code></li><li>如果有修改，则直接从服务器重新下载，返回状态码 <code>200</code></li></ul></li></ul><h3 id="_2-实现方式二" tabindex="-1"><a class="header-anchor" href="#_2-实现方式二" aria-hidden="true">#</a> 2.实现方式二</h3><ul><li>动态和静态文件混合在一起发布，通过 <code>Nginx</code> 来分开</li></ul>',36);function b(m,f){const s=d("ExternalLinkIcon");return c(),l("div",null,[v,_,e("ul",null,[g,e("li",null,[e("a",k,[a("http://nginx.org/en/download.html"),o(s)])])]),x])}const y=i(u,[["render",b],["__file","01.html.vue"]]);export{y as default};