import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import EditorjsRenderer from '../src/EditorjsRenderer.vue';

import editorjsBlocks from './mocks/editorjsBlocks';
import { markRaw } from 'vue';
import Header from '../src/blocks/Header.vue';
import Paragraph from '../src/blocks/Paragraph.vue';
import Image from '../src/blocks/Image.vue';
import List from '../src/blocks/List.vue';
import Embed from '../src/blocks/Embed.vue';
import Quote from '../src/blocks/Quote.vue';

describe('EditorjsRenderer', () => {
    const defaultBlocks = {
        header: markRaw(Header),
        paragraph: markRaw(Paragraph),
        image: markRaw(Image),
        list: markRaw(List),
        embed: markRaw(Embed),
        quote: markRaw(Quote),
    };

    it('renders paragraph block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<p class="paragraph">This is a paragraph block.</p>');
    });

    it('renders header block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<h2 id="this-is-a-header-block" class="header">This is a header block</h2>');
    });

    it('renders image block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<img src="https://placehold.co/600x400" alt="This is an image caption." class="image">');
    });

    it('renders list block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<ul class="list">');
        expect(component.html()).toContain('<li>Item 1</li>');
        expect(component.html()).toContain('</ul>');
    });

    it('shows unsupported block type warning', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('Unsupported block type: unsupported');
    });

    it('hides unsupported block type warning when showUnsupportedBlocks is false', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks, showUnsupported: false },
        });

        expect(component.html()).not.toContain('Unsupported block type: unsupported');
    });

    it('renders embed block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<div class="youtube-embed">');
        expect(component.html()).toContain('<iframe loading="lazy" src="https://www.youtube.com/embed/dQw4w9WgXcQ"');
    });

    it('renders embed fallback for unsupported services', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<div class="fallback-embed">');
        expect(component.html()).toContain('Unfortunately, the twitter service is not supported');
    });

    it('renders quote block correctly', async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        expect(component.html()).toContain('<blockquote>This is a quote block.</blockquote>');
        expect(component.html()).toContain('<div class="quote__caption">Author Name</div>');
    });

    it("does not render quote caption if it's not provided", async () => {
        const component = mount(EditorjsRenderer, {
            props: { editorjsBlocks: editorjsBlocks, customBlocks: defaultBlocks },
        });

        const quoteCaptions = component.html().match(/<div class="quote__caption">/g);
        expect(quoteCaptions).toHaveLength(1);
    });
});
