import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "首页",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>首页</h1>\n<h3 id="debug%E6%8A%80%E5%B7%A7"><a href="./debug.html">debug技巧</a><a class="anchor" href="#debug%E6%8A%80%E5%B7%A7">§</a></h3>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u9996\u9875"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h3 id="debug%E6%8A%80%E5%B7%A7"><a href="./debug.html">debug技巧</a><a class="anchor" href="#debug%E6%8A%80%E5%B7%A7">§</a></h3>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#debug%E6%8A%80%E5%B7%A7">debug技巧</a></li></ol></nav>'
        } }),
    'author': undefined,
    'contributors': [],
    'date': "2021-01-30T01:20:04.011Z",
    'updated': null,
    'excerpt': "debug技巧",
    'cover': undefined,
    'sidebar': [
        {
            "text": "首页",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "一些快速定位页面问题的技巧",
            "link": "debug.html",
            "pagePath": "debug.md"
        },
        {
            "text": "test",
            "link": "test.html",
            "pagePath": "test.tsx"
        }
    ]
};
