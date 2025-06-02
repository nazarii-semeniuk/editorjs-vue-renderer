export default [
    {
        id: 'a',
        type: 'paragraph',
        data: {
            text: 'This is a paragraph block.',
        },
    },
    {
        id: 'b',
        type: 'header',
        data: {
            text: 'This is a header block',
            level: 2,
        },
    },
    {
        id: 'c',
        type: 'image',
        data: {
            file: {
                url: 'https://placehold.co/600x400',
            },
            caption: 'This is an image caption.',
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: 'd',
        type: 'list',
        data: {
            style: 'unordered',
            items: ['Item 1', 'Item 2', 'Item 3'],
        },
    },
    {
        id: 'e',
        type: 'sum',
        data: {
            numbers: [4, 4, 3]
        }
    },
    {
        id: 'f',
        type: 'unsupported',
        data: {}
    }
];
