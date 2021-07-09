const title = 'Bed Covid RS Indonesia';
const description =
  'Wesbite yang memberikan informasi terkait ketersediaan rumah sakit dan tempat tidur rumah sakit untuk pasien covid-19 ataupun non-covid di Indonesia.';
const url = 'https://bed-covid-rs-indo.vercel.app';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: `${url}/og-image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@hendraaagil',
    site: '@hendraaagil',
  },
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
};

export default SEO;
