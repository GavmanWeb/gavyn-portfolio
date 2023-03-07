import { withUrqlClient, initUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';

import Portfolio from '../components/portfolio';
import Hero from '../components/hero';
import { Page } from '../styles/base';

const url = 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master';

const portfoliosQuery = `query portfolios{
  portfolios(orderBy: sort_ASC) {
    image {
      url
      handle
    }
    description
    name
    link
    sort
  }
}`;

const landingQuery = `query landing {
  landing(where: {id: "ckt24dyps7emn0a68n7akkl2x"}) {
    aboutMe {
      html
    }
    profileImage {
      url
    }
    shortAbout
  }
}`;

function Home() {
  const [landingResult] = useQuery({ query: landingQuery });
  const [portfoliosResult] = useQuery({ query: portfoliosQuery });

  return (
    <Page>
      <Hero result={landingResult} />
      <Portfolio result={portfoliosResult} />
    </Page>
  );
}

export async function getStaticProps(ctx) {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );

  // This query is used to populate the cache for the query
  // used on this page.
  await client.query(portfoliosQuery).toPromise();
  await client.query(landingQuery).toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  };
}

export default withUrqlClient((ssr) => ({
  url,
}))(Home);
