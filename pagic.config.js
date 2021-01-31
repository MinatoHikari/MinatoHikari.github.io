export default {
    theme: 'docs',
    plugins: ['sidebar'],
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
