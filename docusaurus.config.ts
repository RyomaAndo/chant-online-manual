import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const YOUR_USERNAME = 'RyomaAndo'; 
const YOUR_PROJECT_NAME = 'chant-online-manual';

const config: Config = {
  // 1. サイトのタイトルを新しい名前に変更
  title: 'Chant Online Manual',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  // --- GitHub Pages デプロイ設定 ---

  // 2. 公開URLを設定
  url: `https://${YOUR_USERNAME}.github.io`,
  // 3. ベースURLを設定 (プロジェクト名)
  baseUrl: `/${YOUR_PROJECT_NAME}/`,
  // 4. GitHubのユーザー名（または組織名）を設定
  organizationName: YOUR_USERNAME, 
  // 5. GitHubのリポジトリ名を設定
  projectName: YOUR_PROJECT_NAME, 

  onBrokenLinks: 'throw',

  // 6. サイトの言語を日本語('ja')に変更 (推奨)
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', 
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 8. プレースホルダーのソーシャルカード画像を削除 (推奨)
    // image: 'img/docusaurus-social-card.jpg', 
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      // 9. ナビゲーションバーのタイトルも新しい名前に変更
      title: 'Chant Online Manual',
      logo: {
        alt: 'My Site Logo',
        src: 'img/CHANT.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ワイズマン請求関連',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'ワイズマン請求関連',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SAINT-CARE HOLDING CORPORATION. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;