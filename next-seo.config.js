/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Kakarot | Ethereum Virtual Machine written in Cairo",
  titleTemplate: "%s",
  defaultTitle: "Kakarot | Ethereum Virtual Machine written in Cairo",
  description: "Ethereum Virtual Machine written in Cairo.",
  // canonical: "https://kakarot.org/",
  openGraph: {
    url: "https://kakarot.org/",
    title: "Kakarot",
    description: "Ethereum Virtual Machine written in Cairo.",
    images: [
      {
        url: "https://kakarot.org/kakarot_github_banner.png",
        alt: "Kakarot logo",
      },
    ],
    site_name: "Kakarot",
  },
  twitter: {
    handle: "@KakarotZkEvm",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
