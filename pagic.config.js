export default {
    theme: 'docs',
    plugins: ['sidebar', 'tsx'],
    sidebar: {
        '/': [
            'README.md',
            'debug.md',
            {
                text: "test",
                link: "test.tsx"
            },
        ]
    }
};
