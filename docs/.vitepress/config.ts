import { defineConfig } from 'vitepress'

const APP = 'https://app.aegisprotocol.org'
const TGE = 'https://tge.aegisprotocol.org'
const HOME = 'https://aegisprotocol.org'
const GARAGE = 'https://garage.aegisprotocol.org'
const WHITEPAPER = 'https://github.com/Aegis-Finance/Aegis/tree/master/docs/whitepaper'

export default defineConfig({
  title: 'Aegis Documentation',
  description: 'Architecture, products, privacy model, and integration guide for Aegis on Sonic.',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://doc.aegisprotocol.org',
  },
  head: [
    ['meta', { name: 'theme-color', content: '#007aff' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://doc.aegisprotocol.org/' }],
  ],
  themeConfig: {
    logo: { text: 'AEGIS' },
    siteTitle: 'Aegis Docs',
    nav: [
      { text: 'Contracts', link: '/contracts' },
      { text: 'Home', link: HOME, target: '_blank' },
      { text: 'Garage', link: GARAGE, target: '_blank' },
      { text: 'Whitepaper', link: WHITEPAPER, target: '_blank' },
      { text: 'App', link: APP, target: '_blank' },
      { text: 'Sale', link: TGE, target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Overview', link: '/overview' },
          { text: 'Sonic network', link: '/network' },
          { text: 'Verified contracts', link: '/contracts' },
          { text: 'Quick start', link: '/quick-start' },
        ],
      },
      {
        text: 'Protocol',
        collapsed: false,
        items: [
          { text: 'Architecture', link: '/protocol/architecture' },
          { text: 'Privacy model', link: '/protocol/privacy-model' },
          { text: 'Zero-knowledge', link: '/protocol/zero-knowledge' },
          { text: 'Governance', link: '/protocol/governance' },
        ],
      },
      {
        text: 'Products',
        collapsed: false,
        items: [
          { text: 'Product map', link: '/products/' },
          { text: 'Wallet', link: '/products/wallet' },
          { text: 'Swap', link: '/products/swap' },
          { text: 'Liquidity', link: '/products/liquidity' },
          { text: 'Sonic Gateway', link: '/products/bridge' },
          { text: 'Lending', link: '/products/lending' },
          { text: 'Staking & yield', link: '/products/staking' },
          { text: 'Insurance', link: '/products/insurance' },
          { text: 'Options', link: '/products/derivatives' },
          { text: 'Crowdfunding', link: '/products/crowdfunding' },
          { text: 'Staged capital', link: '/products/staged-capital' },
          { text: 'Treasury & LP', link: '/products/treasury' },
          { text: 'Shielded+', link: '/products/shielded-plus' },
          { text: 'Merchant paygate', link: '/products/merchant-paygate' },
        ],
      },
      {
        text: 'AGS token',
        collapsed: false,
        items: [
          { text: 'AGS overview', link: '/token/ags' },
          { text: 'Tokenomics', link: '/token/tokenomics' },
          { text: 'Dutch auction (TGE)', link: '/token/dutch-auction' },
        ],
      },
      {
        text: 'Roadmap',
        collapsed: false,
        items: [
          { text: 'Roadmap overview', link: '/roadmap/' },
          { text: '2026–2030 phases', link: '/roadmap/phases' },
          { text: 'Trading & DEX', link: '/roadmap/trading' },
          { text: 'Commerce & partners', link: '/roadmap/ecosystem' },
        ],
      },
      {
        text: 'Build',
        collapsed: false,
        items: [
          { text: 'Integration', link: '/build/integration' },
          { text: 'Partners', link: '/build/partners' },
          { text: 'Security', link: '/build/security' },
        ],
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Community', link: '/resources/community' },
          { text: 'Whitepaper', link: '/resources/whitepaper' },
          { text: 'Releases', link: '/resources/releases' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aegis-Finance/Aegis' },
      { icon: 'x', link: 'https://x.com/aegisecosystem' },
    ],
    footer: {
      message: 'Docs for humans. Wallets talk to Sonic — we do not custody keys.',
      copyright: 'Aegis Protocol',
    },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
  },
})
