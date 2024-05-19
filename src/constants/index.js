import {
  meta,
  shopify,
  starbucks,
  tesla,
  cybercom,
  fondesk,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  hengyoon,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
  //   {
  //     imageUrl: tailwindcss,
  //     name: "Tailwind CSS",
  //     type: "Frontend",
  //   },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Intern",
    company_name: "Fondesk services",
    icon: fondesk,
    iconBg: "#accbe1",
    date: "Aug 2020 - Sept 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern stack developer",
    company_name: "Cybercom",
    icon: cybercom,
    iconBg: "#fbc3bc",
    date: "Sept 2020 - March 2022",
    points: [
      "POS-PWA: Worked on a progressive web app for shopping",
      "Using: React,Redux,NextJS, third party components",
      "Built most pages from scratch",
      "Met with client demands and made several versions of the app for different clients",
      "Suggested to use Redux Toolkit and Redux Persist",
      "Added complex features such as nested categories for products",
      "Migrated to NextJS added Server side render",
      "Worked on Mobile App of POS using React Native",
      "HRMS: Made a serverless progressive web app from scratch",
      "Using: React,Firebase (firestore for DB)",
      "Built from scratch",
      "Serverless: made queries to firestore from react",
    ],
  },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/zenoscode",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/raj-panchal-4a0717194/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Shopping application for Laundry service",
    description:
      "Developed a web app for booking laundry for varigated categories of clothing",
    link: "https://103dcs.gosolutions.sg/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Saloon booking site",
    description:
      "Developed saloon booking site with group bookings and made a cross platform mobile app with React-Native",
    link: "https://theeyebrowcity.gosolutions.sg/",
  },
  {
    iconUrl: hengyoon,
    theme: "btn-back-blue",
    name: "Shopping site for food items",
    description: "Developed a shopping site as per client requirements",
    link: "https://hengyoon.gosolutions.sg/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/zenoscode/instaclone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Augmented reality with IOT",
    description:
      "Developed an AR android app, through which we can place digital objects which can control Real IOT devices",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  //   {
  //     iconUrl: summiz,
  //     theme: "btn-back-yellow",
  //     name: "AI Summarizer Application",
  //     description:
  //       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //     link: "https://github.com/adrianhajdin/project_ai_summarizer",
  //   },
];
