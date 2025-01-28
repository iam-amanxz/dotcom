export const SITE = {
  website: "https://www.husnulaman.com",
  author: "Husnul Aman",
  profile: "https://www.husnulaman.com",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Husnul Aman",
  ogImage: "cover.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const NAV_LINKS = {
  About: "/",
  Blog: "/blog",
  Projects: "/projects",
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/iam-amanxz",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/iam-amanxz97",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@iam.amanxz",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/amandesigns",
    linkTitle: `${SITE.title} on Dribbble`,
    active: true,
  },
  {
    name: "Codepen",
    href: "https://codepen.io/iam-amanxz",
    linkTitle: `${SITE.title} on Codepen`,
    active: true,
  },
];
