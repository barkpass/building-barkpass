import {useQuery} from '@shopify/hydrogen';
import {getEntries} from '../content';

export default function Feed({response}) {
  response.doNotStream();

  response.headers.set('content-type', 'application/json');

  const {data: entries} = useQuery('entries', getEntries, {
    cache: {maxAge: 60, staleWhileRevalidate: 60 * 60 * 12},
    retry: false,
  });

  const payload = entries.map((entry) => ({
    id: entry.id,
    date_published: entry.sys.createdAt,
    title: entry.title,
  }));

  return response.send(JSON.stringify(payload));
  i;
}
