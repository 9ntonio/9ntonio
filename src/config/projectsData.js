/**
 * Project data configuration
 * Centralized project information for easier maintenance
 */

export const LINK_CONFIG = {
  TARGET: "_blank",
  REL: "noreferrer",
};

export const TECH_URLS = [
  "https://nextjs.org/",
  "https://claude.ai/",
  "https://developer.mozilla.org/en-US/docs/Web/API"
];

export const PROJECTS = [
  {
    id: 'gusto',
    title: 'Gusto',
    url: 'https://gusto.com/',
    image: {
      src: '../../static/gusto.webp',
      alt: 'Gusto project video thumbnail',
      loading: 'eager',
      fetchPriority: 'high'
    },
    hasVideo: true,
    videoUrl: 'https://player.vimeo.com/video/374826636',
    description: `I was hired by DEPT® to assist Gusto with their brand refresh. Gusto is a large SaaS startup whose focus is in providing HR and accounting services to small business owners. As lead engineer, I managed a team of 6 software & QA engineers. While working out of the Gusto offices, I collaborated with Brand Studio, Marketing & Product teams. Together we were able to deliver over +100 pages on time with what was noted to be the "smoothest brand launch" anyone had seen 🎉.`,
    links: [
      { url: 'https://www.deptagency.com/', text: 'DEPT®', label: 'Visit DEPT Agency website (opens in new tab)' },
      { url: 'https://gusto.com/', text: 'Gusto', label: 'Visit Gusto website (opens in new tab)' }
    ]
  },
  {
    id: 'google-store',
    title: 'Google Store',
    url: 'https://store.google.com/',
    image: {
      src: '../../static/google.webp',
      alt: 'Google Store project showcase',
      loading: 'lazy'
    },
    description: `Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to keep users' front of mind and seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to meet their technical & testing requirements. The engineers & I created various proof of concepts & prototypes that were tied to a suite of unit tests. This allowed us to test our architecture prior to kickoff and assisted in creating a seamless delivery process.`
  },
  {
    id: 'playstation-vue',
    title: 'PlayStation Vue',
    url: 'https://www.odopod.com/case-studies/ps-vue',
    image: {
      src: '../../static/vue.webp',
      alt: 'PlayStation Vue streaming service application',
      loading: 'lazy'
    },
    description: `The Odopod team and I built the iOS application for Sony's streaming service Vue. The application included live TV, DVR, and VOD features via a 3rd party content delivery service. As the Technical Director, I worked with Sony on the iOS and Chromecast builds while also managing both internal & external engineering teams. I also assisted various design & engineering vendors by on-boarding them into the product's vast ecosystem.`
  },
  {
    id: 'unknown-pleasures',
    title: 'Unknown Pleasures',
    url: '/unknown-pleasures',
    image: {
      src: '../../static/unknown-pleasures.webp',
      alt: 'Unknown Pleasures Joy Division album cover visualization',
      loading: 'lazy'
    },
    description: [
      `In 1979 Factory Records released their 10th album Unknown Pleasures by Joy Division. The artwork is credited to both the band & Peter Saville. The album cover uses an image of radio waves from pulsar CP 1919. The background is black (instead of white) because Peter Saville said "I was convinced that it was just sexier in black". It is considered one of "the best albums of all time".`,
      `I'm obsessed with this album. So much so that for some time I've been trying to make an app that would use the album song's as the data for the waveform. I've tried before and hit walls. Recently I've started working on it again and with some help from Claude, a path was made. Read my post describing the process.`
    ],
    links: [
      { url: 'https://en.wikipedia.org/wiki/Factory_Records', text: 'Factory Records', label: 'Learn about Factory Records on Wikipedia (opens in new tab)' },
      { url: 'https://en.wikipedia.org/wiki/Unknown_Pleasures', text: 'Unknown Pleasures', label: 'Learn about Unknown Pleasures album on Wikipedia (opens in new tab)' },
      { url: 'https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)', text: 'Peter Saville', label: 'Learn about Peter Saville graphic designer on Wikipedia (opens in new tab)' },
      { url: 'https://en.wikipedia.org/wiki/CP_1919', text: 'CP 1919', label: 'Learn about CP 1919 pulsar on Wikipedia (opens in new tab)' },
      { url: 'https://www.anthropic.com/', text: 'Claude', label: 'Visit Anthropic Claude AI website (opens in new tab)' },
      { url: 'https://medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf', text: 'Read my post describing the process', label: 'Read blog post about AI creativity and Unknown Pleasures on Medium (opens in new tab)' }
    ]
  }
];

export const TECHNICAL_EXPERTISE = {
  frontend: [
    'Frontend: React, Angular, TypeScript, Next.js, iOS, Android, JavaScript (ES6+) & Blazor',
    'Backend: C#, .NET, Node',
    'State Management: NgRx, Redux, Angular Signals',
    'Testing: Jest, Playwright, Jasmine, Karma',
    'Build Tools: Vite, Esbuild, Webpack, Angular CLI, NX',
    'Automated component accessibility testing using AI',
    'Architected AI-powered design system compiler reducing creation time by ~50%'
  ],
  backend: [
    'Performance: SSR, Code Splitting, Bundle Optimization',
    'CSS: SCSS, CSS-in-JS, Tailwind, Angular Material',
    'Design Systems: Storybook, Style Dictionary',
    'Version Control: Git, GitHub',
    'CI/CD: Jenkins, GitHub Actions'
  ]
};

export const AWARDS = [
  {
    title: 'Communication Arts Interactive Annual Award',
    description: 'Excellence in Interactive Design',
    url: 'https://www.commarts.com/project/22631/inside-your-scion',
    label: 'View Excellence in Interactive Design award on Communication Arts website (opens in new tab)'
  },
  {
    title: 'Webby Award Nominee',
    description: 'Best User Experience (Google Store)'
  }
];
