import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTableOfContents from 'markdown-it-table-of-contents';

const spaceId =
  typeof CONTENTFUL_SPACE_ID !== 'undefined'
    ? CONTENTFUL_SPACE_ID
    : import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken =
  typeof CONTENTFUL_ACCESS_TOKEN !== 'undefined'
    ? CONTENTFUL_ACCESS_TOKEN
    : import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

const graphqlQuery = async ({query, variables}) => {
  const url = new URL(baseUrl);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((r) => r.json());

  if (response.errors) {
    throw new Error(JSON.stringify(response.errors));
  }

  return response;
};

const POST_FRAGMENT = `items {
  sys {
    id
    createdAt: publishedAt
  }
  title
  slug
  content
  metaDescription
  authorsCollection(limit: 5) {
    items {
      sys {
        id
      }
      name
      photo {
        title
        url
      }
      twitterHandle
    }
  }
  featuredImage {
    url
    title
  }
}`;

export async function getEntry({slug}) {
  const response = await graphqlQuery({
    query: `
    query EntryQuery($where: PostFilter) {
      postCollection(where: $where, limit: 1) {
        ${POST_FRAGMENT}
      }
    }`,
    variables: {
      where: {slug},
    },
  });
  const entry = response.data.postCollection.items[0];

  return {
    ...entry,
    html: markdownIt()
      .use(markdownItAnchor)
      .use(markdownItTableOfContents, {includeLevel: [1, 2, 3]})
      .render(entry.content),
  };
}

export async function getEntries() {
  const response = await graphqlQuery({
    query: `
    query EntriesQuery($order: [PostOrder]) {
      postCollection(order: $order, limit: 100) {
        ${POST_FRAGMENT}
      }
    }`,
    variables: {
      order: 'sys_publishedAt_DESC',
    },
  });

  return response.data.postCollection.items;
}
