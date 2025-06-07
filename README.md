# Editorjs Renderer Vue 🧩

A lightweight and flexible Vue 3 component that renders [Editor.js](https://editorjs.io/) blocks using Vue components. Fully customizable and SSR-compatible.

---

## 🚀 Features

- 🧱 Support for `paragraph`, `header`, `image`, `list`, `embed` and `quote` blocks (more blocks in progress)
- 🔌 Easy integration of custom block components
- 🧪 Tested with Vitest
- ✅ TypeScript support

---

## 📦 Installation

```bash
npm install editorjs-renderer-vue
```

## 🧠 Usage

```vue
<template>
    <EditorjsRenderer :editorjsBlocks="blocks" />
</template>

<script setup lang="ts">
import EditorjsRenderer from 'editorjs-renderer-vue';

const blocks = [
    { id: '...', type: 'header', data: { text: 'Hello', level: 2 } },
    { id: '...', type: 'paragraph', data: { text: 'Welcome to my blog!' } },
    ...
];
</script>

```

---

## ⚠️ Security Warning

🟧 Warning <br />
This component uses v-html internally to render content like paragraphs and headers.<br />
✅ Only pass trusted content (e.g., Editor.js output that you sanitize or own).<br />
❌ Avoid passing user-submitted or untrusted HTML without proper sanitization.<br /><br />

**You are responsible for ensuring the data is safe to render.**

---

## ⚙️ Props

|        Prop       |              Type            |   Required  |                                                        Description                                                      |
|:-----------------:|:----------------------------:|:-----------:|:-----------------------------------------------------------------------------------------------------------------------:|
|   editorjsBlocks  |   EditorjsBlock[]            |   ✅         |   Array of blocks as exported from Editor.js output                                                                     |
|   customBlocks    |   Record<string, Component>  |   ❌         |   Custom Vue components to override or extend default block rendering, where key - is a "type" prop from editorjs block |
| showUnsupported   | Boolean                      | ❌           | Toggle message for unsupported blocks. **Default: true**                                                                    |

## 🧩 Supported Block Types (by default)

|      Type    | Status        |                  Example usage                 |
|:------------:|---------------|:----------------------------------------------:|
|   [paragraph](https://www.npmjs.com/package/@editorjs/paragraph)  | Supported ✅   |   { text: "Hello world" }                      |
|   [header](https://www.npmjs.com/package/@editorjs/header)     | Supported ✅   |   { text: "Title", level: 2 }                  |
|   [image](https://www.npmjs.com/package/@editorjs/image)      | Supported ✅   |   { url: "/path/to.jpg", caption: "Image" }    |
|   [list](https://www.npmjs.com/package/@editorjs/list)       | Supported ✅   |   { items: ["one", "two"], style: "ordered" }  |
| [quote](https://www.npmjs.com/package/@editorjs/quote)        | Supported ✅ |  { text: string, caption?: string }                                           |
| [embed](https://www.npmjs.com/package/@editorjs/embed)        | Partial support ☑️ <br /> (youtube only) |  { service: 'youtube', embed: string }                                              |

## ➕ Custom Block Support

Library don't support your custom editorjs block or any other editorjs block? No problem, you can pass custom components for blocks using **customBlocks** prop.

**customBlocks** should be an object, where key - is block "type", and value - Vue component for rendering of this block.

```vue
<template>
    <EditorjsRenderer
    :editorjsBlocks="blocks"
    :customBlocks="{ quote: CustomQuote }"
    />
</template>

<script setup>
import CustomQuote from './blocks/CustomQuote.vue';

const customBlocks = {
    quote: CustomQuote,
    preview: defineAsyncComponent(() => import('./Preview.vue'))
};

</script>
```