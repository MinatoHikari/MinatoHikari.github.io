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
            'debug.md',
            {
                text: "test",
                link: "test.tsx"
            },
        ]
    }
};
