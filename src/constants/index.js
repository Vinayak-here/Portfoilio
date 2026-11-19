// Career start date — the "X+ years" text on the site is calculated from this.
const CAREER_START = new Date(2024, 7, 1); // 1 Aug 2024 (month is 0-based)

// Rounds down to the nearest half year, e.g. 2.3 years -> "2+", 2.6 years -> "2.5+"
const getExperienceYears = () => {
  const years = (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return `${Math.floor(years * 2) / 2}+`;
};

const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
 
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Performance First",
      desc: "Optimized data fetching, caching and memoization to cut redundant API calls and improve page performance by up to 50%.",
    },
    {
      imgPath: "/images/chat.png",
      title: "End-to-End Ownership",
      desc: "From client requirements to production on AWS — working with designers, backend and product teams in Agile/Scrum sprints.",
    },
    {
      imgPath: "/images/time.png",
      title: "Solid API & State Handling",
      desc: "REST integrations with auth flows, loading and error states, backed by Redux Toolkit, Zustand and TanStack Query.",
    },
  ];
  
  
  const techStackImgs = [
    { name: "React", imgPath: "/images/logos/react.png", size: "h-28" },
    { name: "Next.js", imgPath: "/images/Nextjslogo.svg", size: "h-24" },
    { name: "TypeScript", imgPath: "/images/logos/typescript.svg", size: "h-24" },
    { name: "Node.js & Express", imgPath: "/images/nodejslogo.png", size: "h-24" },
    { name: "Python & FastAPI", imgPath: "/images/logos/fastapi.svg", size: "h-24" },
    { name: "PostgreSQL, MongoDB & MS SQL", imgPath: "/images/dblogo2.svg", size: "h-24" },
    { name: "AWS (Amplify, EC2, RDS, S3)", imgPath: "/images/logos/aws.svg", size: "h-20" },
    { name: "Docker & CI/CD", imgPath: "/images/logos/docker.svg", size: "h-24" },
    { name: "Tailwind CSS & shadcn/ui", imgPath: "/images/tailwindlogo.svg", size: "h-28" },
    { name: "Agentic AI (LangGraph, RAG)", imgPath: "/images/logos/langchain.svg", size: "h-24" },
  ];
  
  
  
  
  const expCards = [
    {
      review: "He's a talented developer with excellent technical skills. His work on the Truens project was top-notch, showcasing his dedication, versatility and attention to detail. Also he is a reliable team player who consistently delivers high-quality results",
      imgPath: "/images/ALfulllogo.svg",
      logoPath: "/images/ALicon.svg",
      title: "Full Stack Developer · Acelucid Technologies",
      date: "August 2024 - Present",
      responsibilities: [
        "Building responsive React/TypeScript dashboards integrated with ASP.NET and FastAPI backends, with token-based auth, protected routes and centralized state management.",
        "Designing secure REST APIs with JWT auth, role-based access control and input validation, backed by well-structured SQL and NoSQL schemas and server-verified payment flows.",
        "Deploying and running apps on AWS (Amplify, EC2, RDS, S3) with Dockerized builds and CI/CD pipelines for repeatable releases.",
        "Optimizing frontend performance with smarter data fetching, response caching and memoization, cutting redundant API calls and re-renders.",
        "Worked directly with clients on Lapis & Oak (Strapi 5, Razorpay, AWS) and Quibs, a US client product with a timestamped movie commentary stream.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Hemanth Katte",
      mentions: "@hemanth",
      review: "Vinayak has shown impressive growth, quickly mastering React and applying his solid .NET background effectively. His ability to grasp complex concepts and contribute to real-world projects has consistently added value. It’s been a pleasure witnessing his journey, and I’m excited to see where his skills and passion will take him next.",
        // "Vinayak has shown outstanding growth and dedication in a short span of time. His ability to quickly grasp complex concepts, especially in React, has been truly impressive. He’s gone from learning the basics to becoming highly proficient, and it shows in the quality of his work.Along with his solid .NET background, Vinayak brings a strong sense of application and problem-solving to the table. He’s been able to apply his skills effectively in real-world projects, and his contributions have consistently added value.It’s been a pleasure seeing his journey so far, and I’m excited to see where his skills and passion will take him next.",
      imgPath: "/images/Hemanth_Katte.svg",
      linkdin:"https://www.linkedin.com/in/hemanth-katte-62b81b1b7/",
    },
    {
      name: "Tejaswini S",
      mentions: "@tejaswini",
      review:
      "He's a talented full stack developer with excellent technical skills. His work on the Truens project was top-notch, showcasing his dedication, versatility and attention to detail. He’s a reliable team player who consistently delivers high-quality results and approaches challenges with a positive, solution-driven mindset. Working with him has been a great experience.",
      // Vinayak is a talented full stack developer with excellent technical skills. His work on the Truens website was top-notch, showcasing his dedication, versatility and attention to detail. He’s a reliable team player who consistently delivers high-quality results and approaches challenges with a positive, solution-driven mindset. Working with him has been a great experience.
      imgPath: "/images/Tejaswini.svg",
      linkdin:"https://www.linkedin.com/in/tejaswini-s04/",
    },
    
  ];
  
  const socialImgs = [
    
    {
      name: "x",
      imgPath: "/images/x.png",
      url: "https://x.com/Vinayak1616"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/vinayak-patil-081a26212/"
    },
    {
      name: "github",
      imgPath: "/images/giticon.png",
      url: "https://github.com/Vinayak-fr"
    },
    {
      name: "github",
      imgPath: "/images/giticon.png",
      url: "https://github.com/Vinayak-here"
    },
  ];
  
  export {
    getExperienceYears,
    words,
    abilities,
    logoIconsList,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackImgs,
    navLinks,
  };