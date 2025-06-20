import type { ParagraphProps } from './blocks/Paragraph';
import type { HeaderProps } from './blocks/Header';
import type { ImageProps } from './blocks/Image';
import type { ListProps } from './blocks/List';
import type { EmbedProps } from './blocks/Embed';
import type { QuoteProps } from './blocks/Quote';
import type { TableProps } from './blocks/Table';

export type BlockType = 'header' | 'image' | 'list' | 'paragraph' | 'embed' | 'quote' | 'table' | string;

export type BlockData = {
    header: HeaderProps;
    image: ImageProps;
    list: ListProps;
    paragraph: ParagraphProps;
    embed: EmbedProps;
    quote: QuoteProps;
    table: TableProps;
    [key: string]: any; // Allow for additional block types
}

export type EditorjsBlock<T extends BlockType = BlockType> = {
    id: string;
    type: T;
    data: BlockData[T];
};

export type EditorjsBlocks = Array<EditorjsBlock>;