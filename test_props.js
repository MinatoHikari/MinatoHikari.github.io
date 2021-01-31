import projectConfig from '/pagic.config.js';
import TSXtest from './test_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test.html",
    'title': "",
    'content': React.createElement(TSXtest, { config: {
            branch: 'main',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            include: undefined,
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar'
            ],
            port: 8000,
            root: '/',
            serve: false,
            sidebar: {
                '/': [
                    'README.md',
                    'debug.md',
                    {
                        link: 'test.tsx',
                        text: 'test'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "test.html", pagePath: "test.tsx", script: null, title: "" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
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