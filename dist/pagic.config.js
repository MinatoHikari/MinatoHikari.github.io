export default {
    theme: 'docs',
    plugins: ['sidebar'],
    sidebar: {
        '/': [
            'README.md',
            {
                text: '随笔',
                children: [
                    'notes/massager.md'
                ]
            },
            {
                text: '总结',
                children: ['summary/debug.md', 'summary/http-requests.md']
            },
            {
                text: "test",
                link: "test.tsx"
            },
        ]
    }
};
