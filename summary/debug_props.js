import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "summary/debug.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "summary/debug.html",
    'title': "一些快速定位页面问题的技巧",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>一些快速定位页面问题的技巧</h1>\n<h2 id="1-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83">1. 测试环境<a class="anchor" href="#1-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83">§</a></h2>\n<h3 id="%E4%BD%BF%E7%94%A8%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E6%B5%8B%E8%AF%95%E8%80%8C%E9%9D%9E%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%8E%AF%E5%A2%83%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95">使用测试环境测试而非本地搭建前端环境进行测试<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E6%B5%8B%E8%AF%95%E8%80%8C%E9%9D%9E%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%8E%AF%E5%A2%83%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95">§</a></h3>\n<p>前端配置已更新,使用测试环境测试无需每次前端更新代码后 ctrl f5 强制刷新页面</p>\n<h2 id="2-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7">2. 浏览器开发者工具<a class="anchor" href="#2-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7">§</a></h2>\n<h3 id="%E6%83%B3%E8%A6%81%E5%88%9D%E6%AD%A5%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E5%8F%AF%E4%BB%A5%E5%85%88f12%E6%89%93%E5%BC%80-chrome-%E7%9A%84-devtool%E5%88%AB%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%9F%E4%B8%80%E6%A0%B7">想要初步定位错误，可以先F12打开 chrome 的 devtool，别的浏览器也一样<a class="anchor" href="#%E6%83%B3%E8%A6%81%E5%88%9D%E6%AD%A5%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E5%8F%AF%E4%BB%A5%E5%85%88f12%E6%89%93%E5%BC%80-chrome-%E7%9A%84-devtool%E5%88%AB%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%9F%E4%B8%80%E6%A0%B7">§</a></h3>\n<h3 id="%E6%B5%8F%E8%A7%88%E5%99%A8-devtool">浏览器 devtool<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8-devtool">§</a></h3>\n<ul>\n<li>就是这个:</li>\n</ul>\n<p><img src="../assets/devtool.jpg" alt="devtool图片"></p>\n<p>前端成员外定位 bug 所需要关注的基本是两块地方的内容</p>\n<ol>\n<li>\n<p>Console</p>\n</li>\n<li>\n<p>Network</p>\n</li>\n</ol>\n<p>这两个标签页点 <img src="../assets/clear.jpg" alt="清除图片"> 可以清空信息</p>\n<p>network 下面的信息需要刷新页面前打开 devtool 有请求才会显示数据，一般是这样</p>\n<p><img src="../assets/network.jpg" alt="network图片"></p>\n<p>如果没有信息，就请 F5 刷新页面</p>\n<p>可以看到上面图片浏览器请求的资源非常多，看起来不方便，可以点击上方的 XHR, 只查看我们需要的内容</p>\n<p><img src="../assets/xhr.jpg" alt="xhr图片"></p>\n<h2 id="3-%E9%94%99%E8%AF%AF%E5%AE%9A%E4%BD%8D">3. 错误定位<a class="anchor" href="#3-%E9%94%99%E8%AF%AF%E5%AE%9A%E4%BD%8D">§</a></h2>\n<h3 id="message-%E4%BF%A1%E6%81%AF">Message 信息<a class="anchor" href="#message-%E4%BF%A1%E6%81%AF">§</a></h3>\n<ul>\n<li>\n<p>项目的 Message 信息，也就是请求成功或者失败时的弹窗，是可以用来定位错误的，之前在群里说的后端需要返回准确的 Message 信息目的也是能尽快定位错误，而不是一个错误要定位半天</p>\n</li>\n<li>\n<p>项目中的红框提示基本可以分成三种:</p>\n<ol>\n<li>\n<p>服务端错误:</p>\n<ul>\n<li>此时一般可以判断为后端问题，至少有此类错误没有对应的报错这个问题</li>\n<li>除此之外，有可能是前端传错参数，一般需要后端查看日志判明什么参数没传</li>\n</ul>\n</li>\n<li>\n<p>http lose</p>\n<ul>\n<li>\n<p>此時需要 f12 按上述图片中方式打开 devtool, 查看 xhr 中红色的请求，查看其 status</p>\n<ul>\n<li>\n<p>status 为 500, 一般为后端无响应，容器崩溃或重启，与代码无关, 可在下述的 preview 中查看是否有错误提示信息</p>\n</li>\n<li>\n<p>status 为 504, 超时，不一定和代码有关，需把情况反馈给后端</p>\n</li>\n<li>\n<p>status 为 404, 前端请求路径错误</p>\n</li>\n<li>\n<p>status 为 401/403 此为鉴权错误，一般是密码输错，也不排除后端代码修改导致</p>\n</li>\n<li>\n<p>status 为 40X（最后一位是4以外的数）, 点击这个飘红的请求，右侧会弹出页面（下图为正常的请求，仅作示例）</p>\n</li>\n</ul>\n<p><img src="../assets/example-request.jpg" alt="图片"></p>\n<ul>\n<li>点击 preview, 查看其中的 message\n<ol>\n<li>如有 xxxx input \'xxxx(字段名)\' 类似格式的错误，一般可判明为参数错误，此时点击图中 headers, 滚动条拉到最下方 可以看到前端上传的参数</li>\n<li>413 Request Entity Too Large, 超出上传限制，一般为后端或 nginx 限制，nginx 可联系前端修改</li>\n<li>待完善</li>\n</ol>\n</li>\n</ul>\n<p><img src="../assets/params.jpg" alt="参数"></p>\n</li>\n</ul>\n</li>\n<li>\n<p>有明确的错误提示时，根据错误提示即可八九不离十判断到底是哪边出错</p>\n<ul>\n<li>提示 GENERAL，后端服务崩溃</li>\n</ul>\n</li>\n</ol>\n</li>\n</ul>\n<h3 id="%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%97%A0%E5%8F%8D%E5%BA%94%E9%A1%B5%E9%9D%A2%E7%82%B9%E4%BB%BB%E4%BD%95%E5%9C%B0%E6%96%B9%E9%83%BD%E6%97%A0%E5%93%8D%E5%BA%94">点击按钮无反应，页面点任何地方都无响应<a class="anchor" href="#%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%97%A0%E5%8F%8D%E5%BA%94%E9%A1%B5%E9%9D%A2%E7%82%B9%E4%BB%BB%E4%BD%95%E5%9C%B0%E6%96%B9%E9%83%BD%E6%97%A0%E5%93%8D%E5%BA%94">§</a></h3>\n<ul>\n<li>打开 devtool, 查看 console 中是否有红色错误，截图发给前端（没有红色报错为校验出错，一般有黄色的警告）</li>\n</ul>\n<h3 id="%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E9%94%99%E8%AF%AF">下载文件错误<a class="anchor" href="#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E9%94%99%E8%AF%AF">§</a></h3>\n<ul>\n<li>响应头错误 Content-Type: application/force-download</li>\n</ul>\n<p>应该为 Content-Disposition: attachment;filename=XXXXXX</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4E00\u4E9B\u5FEB\u901F\u5B9A\u4F4D\u9875\u9762\u95EE\u9898\u7684\u6280\u5DE7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="1-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83">1. 测试环境<a class="anchor" href="#1-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83">§</a></h2>\n<h3 id="%E4%BD%BF%E7%94%A8%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E6%B5%8B%E8%AF%95%E8%80%8C%E9%9D%9E%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%8E%AF%E5%A2%83%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95">使用测试环境测试而非本地搭建前端环境进行测试<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E6%B5%8B%E8%AF%95%E8%80%8C%E9%9D%9E%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%8E%AF%E5%A2%83%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95">§</a></h3>\n<p>前端配置已更新,使用测试环境测试无需每次前端更新代码后 ctrl f5 强制刷新页面</p>\n<h2 id="2-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7">2. 浏览器开发者工具<a class="anchor" href="#2-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7">§</a></h2>\n<h3 id="%E6%83%B3%E8%A6%81%E5%88%9D%E6%AD%A5%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E5%8F%AF%E4%BB%A5%E5%85%88f12%E6%89%93%E5%BC%80-chrome-%E7%9A%84-devtool%E5%88%AB%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%9F%E4%B8%80%E6%A0%B7">想要初步定位错误，可以先F12打开 chrome 的 devtool，别的浏览器也一样<a class="anchor" href="#%E6%83%B3%E8%A6%81%E5%88%9D%E6%AD%A5%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E5%8F%AF%E4%BB%A5%E5%85%88f12%E6%89%93%E5%BC%80-chrome-%E7%9A%84-devtool%E5%88%AB%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%9F%E4%B8%80%E6%A0%B7">§</a></h3>\n<h3 id="%E6%B5%8F%E8%A7%88%E5%99%A8-devtool">浏览器 devtool<a class="anchor" href="#%E6%B5%8F%E8%A7%88%E5%99%A8-devtool">§</a></h3>\n<ul>\n<li>就是这个:</li>\n</ul>\n<p><img src="../assets/devtool.jpg" alt="devtool图片"></p>\n<p>前端成员外定位 bug 所需要关注的基本是两块地方的内容</p>\n<ol>\n<li>\n<p>Console</p>\n</li>\n<li>\n<p>Network</p>\n</li>\n</ol>\n<p>这两个标签页点 <img src="../assets/clear.jpg" alt="清除图片"> 可以清空信息</p>\n<p>network 下面的信息需要刷新页面前打开 devtool 有请求才会显示数据，一般是这样</p>\n<p><img src="../assets/network.jpg" alt="network图片"></p>\n<p>如果没有信息，就请 F5 刷新页面</p>\n<p>可以看到上面图片浏览器请求的资源非常多，看起来不方便，可以点击上方的 XHR, 只查看我们需要的内容</p>\n<p><img src="../assets/xhr.jpg" alt="xhr图片"></p>\n<h2 id="3-%E9%94%99%E8%AF%AF%E5%AE%9A%E4%BD%8D">3. 错误定位<a class="anchor" href="#3-%E9%94%99%E8%AF%AF%E5%AE%9A%E4%BD%8D">§</a></h2>\n<h3 id="message-%E4%BF%A1%E6%81%AF">Message 信息<a class="anchor" href="#message-%E4%BF%A1%E6%81%AF">§</a></h3>\n<ul>\n<li>\n<p>项目的 Message 信息，也就是请求成功或者失败时的弹窗，是可以用来定位错误的，之前在群里说的后端需要返回准确的 Message 信息目的也是能尽快定位错误，而不是一个错误要定位半天</p>\n</li>\n<li>\n<p>项目中的红框提示基本可以分成三种:</p>\n<ol>\n<li>\n<p>服务端错误:</p>\n<ul>\n<li>此时一般可以判断为后端问题，至少有此类错误没有对应的报错这个问题</li>\n<li>除此之外，有可能是前端传错参数，一般需要后端查看日志判明什么参数没传</li>\n</ul>\n</li>\n<li>\n<p>http lose</p>\n<ul>\n<li>\n<p>此時需要 f12 按上述图片中方式打开 devtool, 查看 xhr 中红色的请求，查看其 status</p>\n<ul>\n<li>\n<p>status 为 500, 一般为后端无响应，容器崩溃或重启，与代码无关, 可在下述的 preview 中查看是否有错误提示信息</p>\n</li>\n<li>\n<p>status 为 504, 超时，不一定和代码有关，需把情况反馈给后端</p>\n</li>\n<li>\n<p>status 为 404, 前端请求路径错误</p>\n</li>\n<li>\n<p>status 为 401/403 此为鉴权错误，一般是密码输错，也不排除后端代码修改导致</p>\n</li>\n<li>\n<p>status 为 40X（最后一位是4以外的数）, 点击这个飘红的请求，右侧会弹出页面（下图为正常的请求，仅作示例）</p>\n</li>\n</ul>\n<p><img src="../assets/example-request.jpg" alt="图片"></p>\n<ul>\n<li>点击 preview, 查看其中的 message\n<ol>\n<li>如有 xxxx input \'xxxx(字段名)\' 类似格式的错误，一般可判明为参数错误，此时点击图中 headers, 滚动条拉到最下方 可以看到前端上传的参数</li>\n<li>413 Request Entity Too Large, 超出上传限制，一般为后端或 nginx 限制，nginx 可联系前端修改</li>\n<li>待完善</li>\n</ol>\n</li>\n</ul>\n<p><img src="../assets/params.jpg" alt="参数"></p>\n</li>\n</ul>\n</li>\n<li>\n<p>有明确的错误提示时，根据错误提示即可八九不离十判断到底是哪边出错</p>\n<ul>\n<li>提示 GENERAL，后端服务崩溃</li>\n</ul>\n</li>\n</ol>\n</li>\n</ul>\n<h3 id="%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%97%A0%E5%8F%8D%E5%BA%94%E9%A1%B5%E9%9D%A2%E7%82%B9%E4%BB%BB%E4%BD%95%E5%9C%B0%E6%96%B9%E9%83%BD%E6%97%A0%E5%93%8D%E5%BA%94">点击按钮无反应，页面点任何地方都无响应<a class="anchor" href="#%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%97%A0%E5%8F%8D%E5%BA%94%E9%A1%B5%E9%9D%A2%E7%82%B9%E4%BB%BB%E4%BD%95%E5%9C%B0%E6%96%B9%E9%83%BD%E6%97%A0%E5%93%8D%E5%BA%94">§</a></h3>\n<ul>\n<li>打开 devtool, 查看 console 中是否有红色错误，截图发给前端（没有红色报错为校验出错，一般有黄色的警告）</li>\n</ul>\n<h3 id="%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E9%94%99%E8%AF%AF">下载文件错误<a class="anchor" href="#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E9%94%99%E8%AF%AF">§</a></h3>\n<ul>\n<li>响应头错误 Content-Type: application/force-download</li>\n</ul>\n<p>应该为 Content-Disposition: attachment;filename=XXXXXX</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1-%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83" }, "1. \u6D4B\u8BD5\u73AF\u5883"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BD%BF%E7%94%A8%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83%E6%B5%8B%E8%AF%95%E8%80%8C%E9%9D%9E%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%8E%AF%E5%A2%83%E8%BF%9B%E8%A1%8C%E6%B5%8B%E8%AF%95" }, "\u4F7F\u7528\u6D4B\u8BD5\u73AF\u5883\u6D4B\u8BD5\u800C\u975E\u672C\u5730\u642D\u5EFA\u524D\u7AEF\u73AF\u5883\u8FDB\u884C\u6D4B\u8BD5")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#2-%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7" }, "2. \u6D4F\u89C8\u5668\u5F00\u53D1\u8005\u5DE5\u5177"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%83%B3%E8%A6%81%E5%88%9D%E6%AD%A5%E5%AE%9A%E4%BD%8D%E9%94%99%E8%AF%AF%E5%8F%AF%E4%BB%A5%E5%85%88f12%E6%89%93%E5%BC%80-chrome-%E7%9A%84-devtool%E5%88%AB%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%9F%E4%B8%80%E6%A0%B7" }, "\u60F3\u8981\u521D\u6B65\u5B9A\u4F4D\u9519\u8BEF\uFF0C\u53EF\u4EE5\u5148F12\u6253\u5F00 chrome \u7684 devtool\uFF0C\u522B\u7684\u6D4F\u89C8\u5668\u4E5F\u4E00\u6837")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%B5%8F%E8%A7%88%E5%99%A8-devtool" }, "\u6D4F\u89C8\u5668 devtool")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#3-%E9%94%99%E8%AF%AF%E5%AE%9A%E4%BD%8D" }, "3. \u9519\u8BEF\u5B9A\u4F4D"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#message-%E4%BF%A1%E6%81%AF" }, "Message \u4FE1\u606F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E7%82%B9%E5%87%BB%E6%8C%89%E9%92%AE%E6%97%A0%E5%8F%8D%E5%BA%94%E9%A1%B5%E9%9D%A2%E7%82%B9%E4%BB%BB%E4%BD%95%E5%9C%B0%E6%96%B9%E9%83%BD%E6%97%A0%E5%93%8D%E5%BA%94" }, "\u70B9\u51FB\u6309\u94AE\u65E0\u53CD\u5E94\uFF0C\u9875\u9762\u70B9\u4EFB\u4F55\u5730\u65B9\u90FD\u65E0\u54CD\u5E94")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E9%94%99%E8%AF%AF" }, "\u4E0B\u8F7D\u6587\u4EF6\u9519\u8BEF")))))),
    'author': "MinatoHikari",
    'contributors': [
        "MinatoHikari"
    ],
    'date': "2021-04-29T07:39:27.000Z",
    'updated': null,
    'excerpt': "1. 测试环境 使用测试环境测试而非本地搭建前端环境进行测试 前端配置已更新,使用测试环境测试无需每次前端更新代码后 ctrl f5 强制刷新页面 2. 浏览器开发者工具 想要初步定位错误，可以先F12打开 chrome 的 devtool，别的浏览...",
    'cover': "../assets/devtool.jpg",
    'sidebar': [
        {
            "text": "首页",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "随笔",
            "children": [
                {
                    "text": "递归 按摩师 —— 交流群群面试题的思考",
                    "link": "notes/massager.html",
                    "pagePath": "notes/massager.md"
                }
            ]
        },
        {
            "text": "总结",
            "children": [
                {
                    "text": "一些快速定位页面问题的技巧",
                    "link": "summary/debug.html",
                    "pagePath": "summary/debug.md"
                },
                {
                    "text": "前后端交互数据格式",
                    "link": "summary/http-requests.html",
                    "pagePath": "summary/http-requests.md"
                }
            ]
        },
        {
            "text": "test",
            "link": "test.html",
            "pagePath": "test.tsx"
        }
    ]
};
