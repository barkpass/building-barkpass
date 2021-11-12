import {Helmet} from '@shopify/hydrogen/client';

export default function Seo({children}) {
  return <Helmet>{children}</Helmet>;
}
