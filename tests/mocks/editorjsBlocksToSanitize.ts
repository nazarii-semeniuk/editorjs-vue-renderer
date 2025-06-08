export default [
    {
        id: 'a1',
        type: 'paragraph',
        data: {
            text: 'This is a paragraph block with content. <script>alert("XSS")</script> It should be sanitized.',
        },
    },
    {
        id: 'a2',
        type: 'paragraph',
        data: {
            text: 'This is another paragraph block. Here is bold text: <strong>bold</strong> and italic text: <em>italic</em>. And here is a link: <a href="https://example.com">Example</a>. Another links with attributes: <a href="https://example.com" target="_blank" rel="noopener noreferrer">Example with attributes</a>.',
        },
    },
    {
        id: 'b1',
        type: 'header',
        data: {
            text: 'This is a header block with content. <script>alert("XSS")</script> It should be sanitized.',
            level: 2,
        },
    },
    {
        id: 'd1',
        type: 'list',
        data: {
            style: 'unordered',
            items: ['Item 1. <script>alert("XSS")</script> It should be sanitized.', 'Item 2', 'Item 3'],
        },
    },
    {
        id: 'l1',
        type: 'table',
        data: {
            withHeadings: true,
            content: [
                ['Heading 1', 'Heading 2'],
                ['Second. <script>alert("XSS")</script> It should be sanitized.', 'With Headings'],
            ],
        },
    },
];
