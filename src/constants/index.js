import {
  meta,
  shopify,
  starbucks,
  tesla,
  cybercom,
  fondesk,
  mayash,
  span,
  food,
} from "../assets/images"
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
  PostgreSQL,
  GraphQL,
  firebase,
  googlecloud,
} from "../assets/icons"

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
    imageUrl: PostgreSQL,
    name: "PostgressSQL",
    type: "Database",
  },
  {
    imageUrl: GraphQL,
    name: "GraphQL",
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
    imageUrl: firebase,
    name: "Firebase",
    type: "Backend",
  },
  {
    imageUrl: googlecloud,
    name: "GoogleCloud",
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
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
]

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
    date: "Sept 2020 - April 2022",
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
  {
    title: "Freelance Web Developer",
    company_name: "Kravin, Mayash Foundation",
    icon: mayash,
    iconBg: "#b7e4c7",
    date: "April 2022 - Present",
    points: [
      "Shopping app: Shopping app as per figma design using NextJS,PayloadCMS and stripe.",
      "Kravin: Added several features using graphQL in react",
      "Mayash Foundation: Connected to apis added logic to frontend",
      "Worked with different teams, made end to end applications or added features as per requirements",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SpanSystems",
    icon: span,
    iconBg: "#a2d2ff",
    date: "Sept 2024 - Present",
    points: [
      "Working with python FastAPI and OpenCV for scanning QR codes, barcodes and text",
      "Interfacing machine vision cameras and scanners",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/portfolio/contact",
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
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Gen AI powered T-shirt customization and 3D view",
    description:
      "Integrated AI Image Generation using Flux AI API and hugging-face; 3D view of the t-shirt with the AI-generated image applied to the t-shirt as well as animations",
    link: "https://binarycombinatrix.github.io/Dream-Wear/",
  },
  {
    iconUrl: food,
    theme: "btn-back-yellow",
    name: "Food ordering and a Food social media",
    description:
      "Integration with the Google Maps API; Integration with AWS services - DynamoDB and Lambda functions",
    link: "https://www.kravein.com.au/",
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
    name: "TruthTube - video sharing social media",
    description:
      "Upload videos to AWS S3 bucket, AWS DynamoDB for database-single table design pattern, AWS Amplify Gen2, Next.js Static Site Generation & SSR",
    link: "https://main.d2j2sjrvhdfckf.amplifyapp.com/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Tech shopping site with AI chatbot",
    description: "Developed a shopping site as per client requirements",
    link: "https://github.com/binarycombinatrix/multisys",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Augmented reality with IOT",
    description:
      "Developed an AR android app, through which we can place digital objects which can control Real IOT devices",
    link: "https://github.com/zenoscode/activity-tracker",
  },
  //   {
  //     iconUrl: summiz,
  //     theme: "btn-back-yellow",
  //     name: "AI Summarizer Application",
  //     description:
  //       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //     link: "https://github.com/adrianhajdin/project_ai_summarizer",
  //   },
]
