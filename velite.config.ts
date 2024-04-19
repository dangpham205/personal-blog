import { defineCollection, defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const computedFields = <T extends {slug: string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/")
})

const posts = defineCollection({
    name: 'Post', // collection type name
    pattern: 'blog/**/*.mdx', // content files glob pattern
    schema: s
    .object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx(), // transform markdown to html
        cover: s.image().optional(), // input image relative path, output image object with blurImage.
        video: s.file().optional(), // input file relative path, output file public path.
    })
    .transform(computedFields)
    // more additional fields (computed fields)
})

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [],
        remarkPlugins: []
    }
})
