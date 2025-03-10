interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'caicai的跑步旅程',
  siteUrl: 'https://adongtt.github.io/caicai',
  logo: 'https://uk.weika.live/caiyun.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/caicai',
    },
    {
      name: 'About',
      url: 'https://adongtt.github.io/caicai',
    },
  ],
};

export default data;
