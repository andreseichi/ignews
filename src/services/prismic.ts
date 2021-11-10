import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const apiEndpoint = 'https://ignews-tashiro.prismic.io/api/v2';

  const prismic = Prismic.client(apiEndpoint, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
