import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${site.name} — Blog`,
    description: 'Weekly notes on disaster risk finance, climate credit risk and the financial side of disasters.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/blog/${p.id}.html`,
    })),
  });
}
