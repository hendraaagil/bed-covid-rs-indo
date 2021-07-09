const title = 'Bed Covid RS Indonesia';
const description =
  'Sebuah website yang menyediakan informasi ketersediaan tempat tidur rumah sakit di seluruh Indonesia.';
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
        url: `${url}/og-image`,
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
