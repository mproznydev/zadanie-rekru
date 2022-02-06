module.exports = {
    siteMetadata: {
        title: `Adream`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-root-import',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `templates`,
                path: `${__dirname}/src/components/templates`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // Specify the URL of the WordPress source
                url: `http://adreamcms.local/graphql`,
                // protocol: `http`,
                // Indicates if a site is hosted on WordPress.com
                hostingWPCOM: false,
                // Specify which URL structures to fetch
            },
        },
    ],
}
