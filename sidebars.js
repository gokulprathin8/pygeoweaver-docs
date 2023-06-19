/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorial'}],
  // documentationSidebar: [{ type: 'autogenerated', dirName: '.' }],

    tutorialSidebar: [
      'getting-started/intro'
    ],

  documentationSidebar: [
      'getting-started',
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/process-workflow',
        'user-guide/detailed-info',
        'user-guide/export-workflow',
        'user-guide/process-info',
        'user-guide/getting-help',
        'user-guide/history',
        'user-guide/import-workflow',
        'user-guide/list',
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
