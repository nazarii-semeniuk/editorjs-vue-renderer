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
    },
    {
        id: 'g',
        type: 'embed',
        data: {
            service: 'youtube',
            embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        },
    },
    {
        id: 'h',
        type: 'embed',
        data: {
            service: 'twitter',
            embed: 'https://x.com',
        },
    },
    {
        id: 'i',
        type: 'quote',
        data: {
            text: 'This is a quote block.',
            caption: 'Author Name',
        },
    },
    {
        id: 'j',
        type: 'table',
        data: {
            content: [['First', 'No Headings']]
        }
    },
    {
        id: 'k',
        type: 'table',
        data: {
            withHeadings: true,
            content: [
                ['Heading 1', 'Heading 2'],
                ['Second', 'With Headings'],
            ],
        },
    },
];
