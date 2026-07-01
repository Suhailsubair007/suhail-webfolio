// — icons used in skills (resume-aligned) —
const javascripticon  = "/icons/javascripticon.svg";
const typescripticon  = "/icons/typescripticon.svg";
const reacticon       = "/icons/reacticon.svg";
const nextjsicon      = "/icons/nextjsicon.svg";
const nextjsiconwhite = "/icons/nextjsiconwhite.svg";
const reactnativeicon = "/icons/reactnativeicon.svg";
const redux           = "/icons/redux.svg";
const reactqueryicon  = "/icons/reactqueryicon.svg";
const tailwindcssicon = "/icons/tailwindicon.svg";
const nodejsicon      = "/icons/nodejsicon.svg";
const expressicon     = "/icons/expressicon.svg";
const expressiconwhite= "/icons/expressiconwhite.svg";
const bunicon         = "/icons/bunicon.svg";
const graphqlicon     = "/icons/graphqlicon.svg";
const apiicon         = "/icons/apiicon.svg";
const websocketicon   = "/icons/websocketicon.svg";
const jwticon         = "/icons/jwticon.svg";
const oauthicon       = "/icons/oauthicon.svg";
const mongodbicon     = "/icons/mongoicon.svg";
const psql            = "/icons/psql.svg";
const redisicon       = "/icons/redisicon.svg";
const aws             = "/icons/aws.svg";
const digitaloceanicon= "/icons/digitaloceanicon.svg";
const gcpicon         = "/icons/gcpicon.svg";
const docker          = "/icons/docker.svg";
const nginx           = "/icons/nginx.svg";
const cicdicon        = "/icons/cicdicon.svg";
const git             = "/icons/git.svg";
const firebaseicon    = "/icons/firebaseicon.svg";
const figmaicon       = "/icons/figmaicon.svg";
const jiraicon        = "/icons/jiraicon.svg";
const postmanicon     = "/icons/postmanicon.svg";
// — legacy icons used in project tech lists —
const htmlicon     = "/icons/htmlicon.svg";
const cssicon      = "/icons/cssicon.svg";
const axiosicon    = "/icons/axiosicon.svg";
const spotifyicon  = "/icons/spotifyicon.svg";
const netlifyicon  = "/icons/netlifyicon.svg";
const rendericon   = "/icons/rendericon.svg";
const trelloicon   = "/icons/trelloicon.svg";
const canvaicon    = "/icons/canvaicon.svg";
// — project assets —
const tastyMockup    = "/img/tasty_mockup.webp";
const instorMockup   = "/img/instor_mockup.webp";
const silentmoonMockup = "/img/silentmoon_mockup.webp";
const profilepicture = "/img/me2.webp";
// — about me icons —
const caricon      = "/icons/car-icon.svg";
const travelicon   = "/icons/travel-icon.svg";
const hardwareicon = "/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  title: "Hi, I'm Suhail",
  subtitle: "Lead Full Stack Engineer",
  description: {
    en: "Full Stack Developer with 2+ years of experience building scalable web and mobile applications using React.js, Next.js, React Native, Node.js, TypeScript, GraphQL, and MongoDB. Experienced in architecting backend systems, cloud infrastructure, and CI/CD pipelines — delivering production-grade products from concept to deployment.",
  },
  buttons: [
    {
      name: "Contact",
      label: { en: "Contact me" },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: { en: "GitHub" },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: redux },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/Suhailsubair007",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: redux },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl: "https://github.com/Suhailsubair007",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: redux },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/Suhailsubair007",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Frontend",
    skills: [
      { title: "React.js",      hash: "#React",        icon: reacticon,       color: "#61DAFB" },
      { title: "Next.js",       hash: "#Next.js",      icon: [nextjsicon, nextjsiconwhite], color: ["#000000", "#FFFFFF"] },
      { title: "React Native",  hash: "#ReactNative",  icon: reactnativeicon,  color: "#61DAFB" },
      { title: "Redux",         hash: "#Redux",        icon: redux,            color: ["#000000", "#FFFFFF"] },
      { title: "React Query",   hash: "#ReactQuery",   icon: reactqueryicon,   color: "#FF4154" },
      { title: "Tailwind CSS",  hash: "#Tailwind",     icon: tailwindcssicon,  color: "#38B2AC" },
      { title: "TypeScript",    hash: "#TypeScript",   icon: typescripticon,   color: "#007ACC" },
      { title: "JavaScript",    hash: "#JavaScript",   icon: javascripticon,   color: "#F7DF1E" },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend & Cloud",
    skills: [
      { title: "Node.js",      hash: "#Node.js",     icon: nodejsicon,      color: "#339933" },
      { title: "Express.js",   hash: "#Express",     icon: [expressicon, expressiconwhite], color: ["#000000", "#FFFFFF"] },
      { title: "Bun.js",       hash: "#Bun",         icon: bunicon,         color: "#F5A623" },
      { title: "GraphQL",      hash: "#GraphQL",     icon: graphqlicon,     color: "#E10098" },
      { title: "REST API",     hash: "#REST",        icon: apiicon,         color: "#FF9900" },
      { title: "WebSocket",    hash: "#WebSocket",   icon: websocketicon,   color: "#00D4FF" },
      { title: "JWT",          hash: "#JWT",         icon: jwticon,         color: "#000000" },
      { title: "OAuth",        hash: "#OAuth",       icon: oauthicon,       color: "#EB5424" },
      { title: "MongoDB",      hash: "#MongoDB",     icon: mongodbicon,     color: "#449C45" },
      { title: "PostgreSQL",   hash: "#PostgreSQL",  icon: psql,            color: "#336791" },
      { title: "Redis",        hash: "#Redis",       icon: redisicon,       color: "#DC382D" },
      { title: "AWS",          hash: "#AWS",         icon: aws,             color: "#FF9900" },
      { title: "DigitalOcean", hash: "#DigitalOcean",icon: digitaloceanicon,color: "#0080FF" },
      { title: "GCP",          hash: "#GCP",         icon: gcpicon,         color: "#4285F4" },
      { title: "Docker",       hash: "#Docker",      icon: docker,          color: "#2496ED" },
      { title: "Nginx",        hash: "#Nginx",       icon: nginx,           color: "#009639" },
      { title: "CI/CD",        hash: "#CICD",        icon: cicdicon,        color: "#21D397" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Tools",
    skills: [
      { title: "Git",      hash: "#Git",      icon: git,          color: "#F05032" },
      { title: "Firebase", hash: "#Firebase", icon: firebaseicon, color: "#FFCA28" },
      { title: "Figma",    hash: "#Figma",    icon: figmaicon,    color: "#F24E1E" },
      { title: "Jira",     hash: "#Jira",     icon: jiraicon,     color: "#0052CC" },
      { title: "Postman",  hash: "#Postman",  icon: postmanicon,  color: "#FF6C37" },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home",     hash: "#home",     icon: GoHome    },
  { en: "Skills",   hash: "#skills",   icon: GoStack   },
  { en: "Projects", hash: "#projects", icon: GoProject },
  { en: "About me", hash: "#about-me", icon: GoPerson  },
  { en: "Contact",  hash: "#contact",  icon: GoMail    },
] as const;

export const sideBarRightMail = {
  link: "mailto:suhailsubair04@gmail.com",
  text: "suhailsubair04@gmail.com",
} as const;

export const sideBarLeftSocials = [
  { link: "https://www.linkedin.com/in/suhail-subair/", icon: FiLinkedin, altimgname: "linkedin" },
  { link: "https://github.com/Suhailsubair007",         icon: FiGithub,   altimgname: "github"   },
  { link: "mailto:suhailsubair04@gmail.com",            icon: FiMail,     altimgname: "mail"     },
] as const;

export const quotesData = [
  {
    en: `"From the first API call to the final user interaction, every layer of the stack is an opportunity to deliver excellence."`,
    author: "Suhail Subair",
  },
  {
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
    author: "Suhail Subair",
  },
] as const;

export const aboutMeData = {
  title_EN: "About me",
  description_EN: "A few code snippets about me",
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: { en: "Contact" },
  description: { en: "Write me a message and I will get back to you." },
  inputfields: [
    {
      name: "name",
      placeholder: { en: "Your Name" },
      type: "text",
      validation: { en: "Please fill in your name" },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: { en: "Your E-Mail" },
      type: "email",
      validation: { en: "Please fill in your email" },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: { en: "Your Subject" },
      type: "text",
      validation: { en: "Please fill in your subject" },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: { en: "Your Message" },
    name: "message",
    rows: 10,
    validation: { en: "Please fill in your message" },
    pattern: "{10}",
  },
  button: {
    value: { en: "Send" },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: { en: "EN" },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": { marginRight: "4rem" },
  "outer-left-to-inner-right": { marginLeft: "4rem", transform: "scaleX(-1)" },
  "inner-right-to-middle": {
    width: "100%", transform: "scaleY(1)", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%", transform: "scaleX(-1)", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden",
  },
  "middle-to-inner-right": { width: "100%", transform: "scale(1,-1)" },
  "middle-to-inner-left": {
    width: "100%", transform: "scale(-1,-1)", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center",
  },
  middle: { width: "100%", transform: "scaleX(-1)", display: "flex", flexDirection: "column", alignItems: "center" },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small:      { heights: ["25rem", "15rem"] },
  middle:     { heights: ["35rem", "25rem"] },
  large:      { heights: ["45rem", "35rem"] },
  extraLarge: { heights: ["55rem", "45rem"] },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": { marginTop: "-6rem",  width: "100%" },
  "outer-left-to-inner-right": { marginTop: "-6rem",  width: "100%" },
  "inner-right-to-middle":     { marginTop: "-20rem", width: "50%", zIndex: "-10" },
  "inner-left-to-middle":      { marginTop: "-10rem", width: "50%", zIndex: "-10" },
  "middle-to-inner-right":     { width: "75%" },
  "middle-to-inner-left":      { marginTop: "-2.5rem", width: "50%" },
  middle:                      { marginTop: "-2.5rem", width: "0%", display: "none" },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": { widths: ["74.45%", "74.45%"] },
  "outer-left-to-inner-right": { widths: ["75%",    "75%"   ] },
  "inner-right-to-middle":     { widths: ["50.1%",  "49%"   ] },
  "inner-left-to-middle":      { widths: ["50.1%",  "49%"   ] },
  "middle-to-inner-right":     { widths: ["33.4%",  "50.03%"] },
  "middle-to-inner-left":      { widths: ["50.1%",  "49%"   ] },
  middle:                      { widths: ["0%",     "0%"    ] },
};
