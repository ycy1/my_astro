import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: 'Astro xxj | Blog',
    description: 'xxj 的博客rss源',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      author: post.data.author,
      customData: `<language>zh-CN</language>`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
