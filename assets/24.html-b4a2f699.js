const s=JSON.parse('{"key":"v-a2438c32","path":"/notes/React18/24.html","title":"二十四、案例：权限管理","lang":"zh-CN","frontmatter":{"title":"二十四、案例：权限管理","copyright":false,"date":"2022-12-18T00:00:00.000Z","category":["笔记","React18"],"tag":["React.js","李立超"]},"headers":[{"level":2,"title":"（一）创建案例框架","slug":"一-创建案例框架","link":"#一-创建案例框架","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js","link":"#_1-src-index-js","children":[]},{"level":3,"title":"2. src/App.js","slug":"_2-src-app-js","link":"#_2-src-app-js","children":[]},{"level":3,"title":"3. src/components/Home.jsx","slug":"_3-src-components-home-jsx","link":"#_3-src-components-home-jsx","children":[]},{"level":3,"title":"4. src/components/Layout.jsx","slug":"_4-src-components-layout-jsx","link":"#_4-src-components-layout-jsx","children":[]},{"level":3,"title":"5. src/components/MainMenu.jsx","slug":"_5-src-components-mainmenu-jsx","link":"#_5-src-components-mainmenu-jsx","children":[]},{"level":3,"title":"6. src/components/Profile.jsx","slug":"_6-src-components-profile-jsx","link":"#_6-src-components-profile-jsx","children":[]},{"level":3,"title":"7. src/pages/HomePage.jsx","slug":"_7-src-pages-homepage-jsx","link":"#_7-src-pages-homepage-jsx","children":[]},{"level":3,"title":"8. src/pages/ProfilePage.jsx","slug":"_8-src-pages-profilepage-jsx","link":"#_8-src-pages-profilepage-jsx","children":[]}]},{"level":2,"title":"（二）创建表单","slug":"二-创建表单","link":"#二-创建表单","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js","link":"#_1-src-app-js","children":[]},{"level":3,"title":"2. src/pages/AuthFormPage.jsx","slug":"_2-src-pages-authformpage-jsx","link":"#_2-src-pages-authformpage-jsx","children":[]},{"level":3,"title":"3. src/components/AuthForm.jsx","slug":"_3-src-components-authform-jsx","link":"#_3-src-components-authform-jsx","children":[]}]},{"level":2,"title":"（三）完成注册功能","slug":"三-完成注册功能","link":"#三-完成注册功能","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js-1","link":"#_1-src-index-js-1","children":[]},{"level":3,"title":"2. src/components/AuthForm.jsx","slug":"_2-src-components-authform-jsx","link":"#_2-src-components-authform-jsx","children":[]},{"level":3,"title":"3. src/store/index.js","slug":"_3-src-store-index-js","link":"#_3-src-store-index-js","children":[]},{"level":3,"title":"4. src/store/api/authApi.js","slug":"_4-src-store-api-authapi-js","link":"#_4-src-store-api-authapi-js","children":[]}]},{"level":2,"title":"（四）完成登录注册","slug":"四-完成登录注册","link":"#四-完成登录注册","children":[{"level":3,"title":"1. src/components/AuthForm.jsx","slug":"_1-src-components-authform-jsx","link":"#_1-src-components-authform-jsx","children":[]},{"level":3,"title":"2. src/store/api/authApi.js","slug":"_2-src-store-api-authapi-js","link":"#_2-src-store-api-authapi-js","children":[]}]},{"level":2,"title":"（五）使用 redux 存储登录状态","slug":"五-使用-redux-存储登录状态","link":"#五-使用-redux-存储登录状态","children":[{"level":3,"title":"1. src/components/AuthForm.jsx","slug":"_1-src-components-authform-jsx-1","link":"#_1-src-components-authform-jsx-1","children":[]},{"level":3,"title":"2. src/components/MainMenu.jsx","slug":"_2-src-components-mainmenu-jsx","link":"#_2-src-components-mainmenu-jsx","children":[]},{"level":3,"title":"3. src/store/index.js","slug":"_3-src-store-index-js-1","link":"#_3-src-store-index-js-1","children":[]},{"level":3,"title":"4. src/store/reducer/authSlice.js","slug":"_4-src-store-reducer-authslice-js","link":"#_4-src-store-reducer-authslice-js","children":[]}]},{"level":2,"title":"（六）解决登录前后页面跳转问题","slug":"六-解决登录前后页面跳转问题","link":"#六-解决登录前后页面跳转问题","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js-2","link":"#_1-src-index-js-2","children":[]},{"level":3,"title":"2. src/App.js","slug":"_2-src-app-js-1","link":"#_2-src-app-js-1","children":[]},{"level":3,"title":"3. src/components/AuthForm.jsx","slug":"_3-src-components-authform-jsx-1","link":"#_3-src-components-authform-jsx-1","children":[]},{"level":3,"title":"4. src/components/NeedAuth.jsx","slug":"_4-src-components-needauth-jsx","link":"#_4-src-components-needauth-jsx","children":[]},{"level":3,"title":"5. src/reducer/authSlice.js","slug":"_5-src-reducer-authslice-js","link":"#_5-src-reducer-authslice-js","children":[]}]},{"level":2,"title":"（七）使用本地存储实现登录持久化","slug":"七-使用本地存储实现登录持久化","link":"#七-使用本地存储实现登录持久化","children":[{"level":3,"title":"1. src/reducer/authSlice.js","slug":"_1-src-reducer-authslice-js","link":"#_1-src-reducer-authslice-js","children":[]}]},{"level":2,"title":"（八）token 失效自动登出","slug":"八-token-失效自动登出","link":"#八-token-失效自动登出","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-1","link":"#_1-src-app-js-1","children":[]},{"level":3,"title":"2. src/reducer/authSlice.js","slug":"_2-src-reducer-authslice-js","link":"#_2-src-reducer-authslice-js","children":[]},{"level":3,"title":"3. src/hooks/useAutoLogout.js","slug":"_3-src-hooks-useautologout-js","link":"#_3-src-hooks-useautologout-js","children":[]}]},{"level":2,"title":"（九）引入学生列表","slug":"九-引入学生列表","link":"#九-引入学生列表","children":[{"level":3,"title":"1. src/App.js","slug":"_1-src-app-js-2","link":"#_1-src-app-js-2","children":[]},{"level":3,"title":"2. src/store/index.js","slug":"_2-src-store-index-js","link":"#_2-src-store-index-js","children":[]},{"level":3,"title":"3. src/store/api/studentApi.js","slug":"_3-src-store-api-studentapi-js","link":"#_3-src-store-api-studentapi-js","children":[]},{"level":3,"title":"4. src/pages/StudentPage.js","slug":"_4-src-pages-studentpage-js","link":"#_4-src-pages-studentpage-js","children":[]},{"level":3,"title":"5. src/components/MainMenu.js","slug":"_5-src-components-mainmenu-js","link":"#_5-src-components-mainmenu-js","children":[]},{"level":3,"title":"6. src/components/Student/Student.jsx","slug":"_6-src-components-student-student-jsx","link":"#_6-src-components-student-student-jsx","children":[]},{"level":3,"title":"7. src/components/Student/StudentForm.jsx","slug":"_7-src-components-student-studentform-jsx","link":"#_7-src-components-student-studentform-jsx","children":[]},{"level":3,"title":"8. src/components/Student/StudentForm.css","slug":"_8-src-components-student-studentform-css","link":"#_8-src-components-student-studentform-css","children":[]},{"level":3,"title":"9. src/components/Student/StudentList.jsx","slug":"_9-src-components-student-studentlist-jsx","link":"#_9-src-components-student-studentlist-jsx","children":[]},{"level":3,"title":"10. src/components/Student/StudentList.css","slug":"_10-src-components-student-studentlist-css","link":"#_10-src-components-student-studentlist-css","children":[]}]},{"level":2,"title":"（十）添加服务器验证 token","slug":"十-添加服务器验证-token","link":"#十-添加服务器验证-token","children":[{"level":3,"title":"1. src/store/api/studentApi.js","slug":"_1-src-store-api-studentapi-js","link":"#_1-src-store-api-studentapi-js","children":[]}]}],"git":{"createdTime":1671354676000,"updatedTime":1671354676000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":12.95,"words":3884},"filePathRelative":"notes/React18/24.md","localizedDate":"2022年12月18日","excerpt":"<h2> （一）创建案例框架</h2>\\n<h3> 1. <code>src/index.js</code></h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> BrowserRouter <span class=\\"token keyword\\">as</span> Router <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-router-dom\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> App <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token operator\\">&lt;</span>Router<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span>App <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n  <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>Router<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};