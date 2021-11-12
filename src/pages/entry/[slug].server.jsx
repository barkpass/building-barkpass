import {useParams} from 'react-router-dom';
import {useQuery, Link} from '@shopify/hydrogen';
import Seo from '../../components/Seo.client';
import Layout from '../../components/Layout';
import {getEntry} from '../../content';
import Author from '../../components/Author';

export default function Entry() {
  const {slug} = useParams();

  const {data: entry} = useQuery(
    `entry-${slug}`,
    async () => await getEntry({slug}),
    {
      cache: {maxAge: 60, staleWhileRevalidate: 60 * 60 * 12},
      retry: false,
    },
  );

  return (
    <Layout>
      <Blog entry={entry} />
    </Layout>
  );
}

function Blog({entry, entry: {html}}) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <Seo>
        <title>{entry.title} - Building Barkpass</title>
        <meta name="og:title" content={`${entry.title} - Building Barkpass`} />
        <meta name="description" content={entry.metaDescription} />
        <meta name="og:description" content={entry.metaDescription} />
        {entry.featuredImage && (
          <>
            <meta
              name="image"
              property="og:image"
              content={`https:${entry.featuredImage.url}`}
            />
            <meta
              name="og:image"
              content={`https:${entry.featuredImage.url}`}
            />
            <meta
              name="twitter:image"
              content={`https:${entry.featuredImage.url}`}
            />
          </>
        )}
        <meta
          name="og:url"
          content={`https://building.barkpass.com/entry/${entry.slug}`}
        />
        <meta
          name="author"
          content={entry.authorsCollection.items[0].name}
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@jplhomer"></meta>
      </Seo>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <FancyPattern />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <Link
              to="/"
              className="block text-base text-center text-green-600 font-semibold tracking-wide uppercase"
            >
              Blog
            </Link>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {entry.title}
            </span>
          </h1>
        </div>

        <div className="text-center mt-8 text-gray-600">
          {new Date(entry.sys.createdAt).toLocaleDateString()}
        </div>

        {entry.authorsCollection && (
          <div className="flex items-center space-x-4 justify-center">
            {entry.authorsCollection.items.map((data) => (
              <Author key={data.sys.id} author={data} />
            ))}
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{__html: html}}
          className="mt-8 prose prose-green prose-lg text-gray-500 mx-auto"
        ></div>
      </div>
    </div>
  );
}

function FancyPattern() {
  return (
    <>
      <svg
        className="absolute top-12 left-full transform translate-x-32"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
        />
      </svg>
      <svg
        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
        />
      </svg>
      <svg
        className="absolute bottom-12 left-full transform translate-x-32"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
      >
        <defs>
          <pattern
            id="d3eb07ae-5182-43e6-857d-35c643af9034"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
        />
      </svg>
    </>
  );
}
