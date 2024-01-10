import{_ as s,c as i,o as a,a as n}from"./chunks/framework.eLjRmN09.js";const l=JSON.parse('{"title":"渲染选项","description":"","frontmatter":{},"headers":[{"level":2,"title":"template","slug":"template","link":"#template","children":[]},{"level":2,"title":"render","slug":"render","link":"#render","children":[]},{"level":2,"title":"compilerOptions","slug":"compileroptions","link":"#compileroptions","children":[]},{"level":2,"title":"slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"api/options-rendering.md","filePath":"api/options-rendering.md"}'),t={name:"api/options-rendering.md"},p=[n('<h1 id="options-rendering" tabindex="-1">渲染选项 <a class="header-anchor" href="#options-rendering" aria-label="Permalink to &quot;渲染选项 {#options-rendering}&quot;">​</a></h1><h2 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;template {#template}&quot;">​</a></h2><p>用于声明组件的字符串模板。</p><ul><li><p><strong>类型</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>通过 <code>template</code> 选项提供的模板将会在运行时即时编译。这仅在使用了包含模板编译器的 Vue 构建版本的情况下支持。文件名中带有 <code>runtime</code> 的 Vue 构建版本<strong>未包含</strong>模板编译器，例如 <code>vue.runtime.esm-bundler.js</code>。请查阅<a href="https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use" target="_blank" rel="noreferrer">构建文件指南</a>了解不同构建版本之间的详细区别。</p><p>如果该字符串以 <code>#</code> 开头，它将被用作 <code>querySelector</code> 的选择器，并使用所选中元素的 <code>innerHTML</code> 作为模板字符串。这让我们能够使用原生 <code>&lt;template&gt;</code> 元素来书写源模板。</p><p>如果 <code>render</code> 选项也同时存在于该组件中，<code>template</code> 将被忽略。</p><p>如果应用的根组件不含任何 <code>template</code> 或 <code>render</code> 选项，Vue 将会尝试使用所挂载元素的 <code>innerHTML</code> 来作为模板。</p><div class="warning custom-block"><p class="custom-block-title">安全性注意</p><p>务必只使用可以信任的模板来源。不要直接将用户提供的内容用作模板。查看<a href="/guide/best-practices/security.html#rule-no-1-never-use-non-trusted-templates">安全指南</a>了解更多细节。</p></div></li></ul><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render {#render}&quot;">​</a></h2><p>用于编程式地创建组件虚拟 DOM 树的函数。</p><ul><li><p><strong>类型</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  render</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentPublicInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeChild</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeChild</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeChildAtom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeArrayChildren</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeChildAtom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNode</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeArrayChildren</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VNodeArrayChildren</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNodeChildAtom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p><code>render</code> 是字符串模板的一种替代，可以使你利用 JavaScript 的丰富表达力来完全编程式地声明组件最终的渲染输出。</p><p>预编译的模板，例如单文件组件中的模板，会在构建时被编译为 <code>render</code> 选项。如果一个组件中同时存在 <code>render</code> 和 <code>template</code>，则 <code>render</code> 将具有更高的优先级。</p></li><li><p><strong>参考</strong></p><ul><li><a href="/guide/extras/rendering-mechanism.html">渲染机制</a></li><li><a href="/guide/extras/render-function.html">渲染函数</a></li></ul></li></ul><h2 id="compileroptions" tabindex="-1">compilerOptions <a class="header-anchor" href="#compileroptions" aria-label="Permalink to &quot;compilerOptions {#compileroptions}&quot;">​</a></h2><p>用于配置组件模板的运行时编译器选项。</p><ul><li><p><strong>类型</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  compilerOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    isCustomElement</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    whitespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;condense&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;preserve&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 默认：&#39;condense&#39;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    delimiters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认：[&#39;{{&#39;, &#39;}}&#39;]</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    comments</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 默认：false</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>详细信息</strong></p><p>这个配置选项仅在使用完整构建版本 (即可以在浏览器中编译模板的 <code>vue.js</code> 文件) 时才有效。它支持与应用级的 <a href="/api/application.html#app-config-compileroptions">app.config.compilerOptions</a> 相同的选项，并针对当前组件有更高的优先级。</p></li><li><p><strong>参考</strong> <a href="/api/application.html#app-config-compileroptions">app.config.compilerOptions</a></p></li></ul><h2 id="slots" tabindex="-1">slots<sup class="vt-badge ts"></sup> <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;slots&lt;sup class=&quot;vt-badge ts&quot;/&gt; {#slots}&quot;">​</a></h2><p>一个在渲染函数中以编程方式使用插槽时辅助类型推断的选项。仅在 Vue 3.3+ 中支持。</p><ul><li><p><strong>详情</strong></p><p>该选项的运行时值不会被使用。实际类型应通过 <code>SlotsType</code> 类型辅助工具进行类型转换来声明：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SlotsType } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  slots: Object </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SlotsType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }&gt;,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">slots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    expectType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> any)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slots.default)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expectType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)&gt;(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      slots.item</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul>',13)];const e=s(t,[["render",function(s,n,l,t,e,h){return a(),i("div",null,p)}]]);export{l as __pageData,e as default};
