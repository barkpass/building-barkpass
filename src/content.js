import * as contentful from 'contentful';
import markdownIt from 'markdown-it';

const getClient = () =>
  contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

export async function getEntry({slug}) {
  const entries = await getClient().getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });
  const entry = entries.items[0];

  return {
    ...entry,
    html: markdownIt().render(entry.fields.content),
  };
}

export async function getEntries() {
  const entries = await getClient().getEntries({
    content_type: 'post',
    order: '-sys.createdAt',
  });

  return entries.items;
}
