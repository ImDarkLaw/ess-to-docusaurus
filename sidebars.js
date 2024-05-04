/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
          'modules/core',
          'modules/chat',
          'modules/spawn',
          'modules/discord',
          'modules/discordlink',
          'modules/antibuild',
          'modules/geoip',
          'modules/protect',
          'modules/xmpp'

      ]

    },
  ],
};

export default sidebars;
