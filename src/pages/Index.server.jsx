import {useQuery, Link} from '@shopify/hydrogen';
import Author from '../components/Author';
import Layout from '../components/Layout';
import Seo from '../components/Seo.client';
import {getEntries} from '../content';

export default function Index() {
  const {data: entries} = useQuery('entries', getEntries, {
    cache: {maxAge: 60, staleWhileRevalidate: 60 * 60 * 12},
    retry: false,
  });

  return (
    <Layout>
      <Seo>
        <title>Building Barkpass</title>
      </Seo>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Building Barkpass
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Josh and Bri write about building{' '}
              <a href="https://www.barkpass.com">Barkpass</a>, a dog-park
              management and pet licensing software for cities and
              organizations.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {entries.map((post) => (
              <Card post={post} key={post.sys.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Card({post}) {
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <Link to={`/entry/${post.slug}`}>
          <img
            className="h-48 w-full object-cover"
            src={post.featuredImage.url}
            alt={post.featuredImage.title}
          />
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link to={`/entry/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">
              {post.metaDescription}
            </p>
          </Link>
        </div>
        <Author author={post.authorsCollection.items[0]}>
          <time dateTime={post.sys.createdAt}>
            {new Date(post.sys.createdAt).toLocaleDateString()}
          </time>
        </Author>
      </div>
    </div>
  );
}
