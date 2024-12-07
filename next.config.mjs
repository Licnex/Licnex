const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
  });
  
const withNextIntl = createNextIntlPlugin();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    target: 'serverless',
    exportPathMap: async function (
      defaultPathMap,
      { dev, defaultLoad }
    ) {
      return {
        '/': { page: '/' },
      };
    },
  };
  
  export default withNextIntl(withMDX(nextConfig));