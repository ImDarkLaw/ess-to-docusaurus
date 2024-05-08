import {themes as prismThemes} from 'prism-react-renderer';

const config = {
    title: 'EssentialsX',
    tagline: 'The essential plugin suite for Minecraft servers, with over 130 commands for servers of all size and scale.',
    favicon: 'img/branding/favicon.ico',
    url: 'https://essentialsx.net/',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    presets: [
        [
            '@docusaurus/preset-classic',
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.js',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false
            },
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'EssentialsX',
                logo: {
                    alt: 'EssentialsX',
                    src: 'img/branding/logo.png',
                },
                items: [
                    {
                        href: 'https://discord.gg/h8CnPSw',
                        label: 'Discord Support',
                        position: 'left'
                    },
                    {
                        href: 'https://essentialsx.net/downloads.html',
                        label: 'Downloads',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/EssentialsX/',
                        label: 'GitHub',
                        position: 'right'
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
