module.exports = {
  siteMetadata: {
    title: `CHOI BOO 블로그`,
    description: `"인생 어려운데 코드라도 쉽게 보자!" 프론트엔드 개발자 CHOI BOO 블로그입니다.`,
    author: `qnrjs42`,
    siteUrl: 'https://qnrjs42.github.io', // 배포 후 변경 예정
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@hooks': 'src/hooks',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
          '@assets': 'src/assets',
          '@templates': 'src/templates',
          '@interfaces': 'src/interfaces',
          '@components': 'src/components',
          '@src': 'src/',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: `${__dirname}/src/templates/test_template.tsx`,
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CHOI BOO 블로그',
        short_name: 'CHOI BOO 블로그',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#B980F0',
        display: 'standalone',
        icon: `${__dirname}/static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://qnrjs42.github.io',
              stripQueryString: true,
            },
          },
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-highlight-code`,
                  options: {
                    terminal: 'carbon',
                    theme: 'dracula',
                    lineNumbers: true,
                    editable: false,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
