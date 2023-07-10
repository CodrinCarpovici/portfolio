import restaurant from "../assets/images/restaurant.jpg";
import mechanic from "../assets/images/mechanic.jpg";
import developer from "../assets/images/developer.jpg";
import luckyshrub from "../assets/images/design garden.jpg";

const data = [
  {
    title: "Little Lemon",
    titleImg: restaurant,
    description: `The aim was to build a website for the Little Lemon restaurant following principles of good design
      and WCAG and to implement the functionality behind a Reserve-a-Table feature.  I was responsible with planning the app, making the design files in Figma and developing a solution
      that resembles those designs. The app was built using React, Semantic HTML5, Bootstrap/SCSS as
      the main stack. I made use of react-router-dom for website navigation, client-side validation,
      state management using react hooks, fetching data through fetch and local storage to keep track of
      form progress.`,
    goals: ["RESPONSIVE", "FORM VALIDATION", "SEO OPTIMIZED", "INTUITIVE"],
    tech: [
      "ReactJS",
      "Bootstrap",
      "JavaScript",
      "Semantic HTML5",
      "CSS/SCSS",
      "react-router-dom",
      "React Hooks",
    ],
    achievements: [
      "Intuitive Form Navigation",
      "Great User Experience",
      "Easy to Reserve a Table",
    ],
    live: "https://codrincarpovici.github.io/projectcapstone/",
    github: "https://github.com/CodrinCarpovici/projectcapstone",
  },
  {
    title: "Eurokit",
    titleImg: mechanic,
    description: `Eurokit is a Hydraulics business. The company needed to expand and part of the expansion involved getting a more permanent online presence. They needed a modern website to present their products and have customers be able to contact them through it. Through the use of a modern Tech Stack I’ve achieved just that and went through the whole Software Development Lifecycle for this project. I picked colors that matched the company’s logo and I’ve ensured responsiveness and a smooth process for the company to receive emails from the customers using the contact form on the website. Each product page is dynamically generated based on the data that is being passed.`,
    goals: ["RESPONSIVE", "MODERN", "SEO OPTIMIZED"],
    tech: ["ReactJS", "Bootstrap", "JavaScript", "Semantic HTML5", "CSS/SCSS"],
    achievements: [
      "Modern Web Application",
      "Clean and Simple Design",
      "Sales increased by 20%",
    ],
    live: "https://eurokit.org/",
    github: "https://github.com/CodrinCarpovici/eurokit-hidraulica",
  },
  {
    title: "Dev Portfolio",
    titleImg: developer,
    description: `The goal was to have a clean, user-friendly portfolio website that I could use to showcase some of
      my projects. I used ReactJS, Bootstrap, custom SASS styles, JavaScript and HTML. I created the design from
      scratch and went on with a very modern and simple look with some clean colours and gradients,
      with some vector graphics. I also animated some of the transitions on the page using framer
      motion. This was one of my first projects and I still consider it a good website, however I now have made this new one
      on which you are viewing this of course.
      `,
    goals: ["MOBILE-FIRST", "SHOWCASE", "SEO OPTIMIZED"],
    tech: ["ReactJS", "Bootstrap", "JavaScript", "Semantic HTML5", "CSS/SCSS"],
    achievements: [
      "Form Is intuitive",
      "Great User Experience",
      "Sales increased by 20%",
    ],
    live: "COMING SOON",
    github: "https://github.com/CodrinCarpovici/carpovici-site",
  },
  {
    title: "Lucky Shrub",
    titleImg: luckyshrub,
    description: `Based in Tuscon, Arizona, Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance and landscaping. The company also runs a small plant nursery that sells indoor and outdoor plants, making them a one-stop shop for clients to "transform any space into an oasis you can be proud of".

      Lucky Shrub was started by a husband and wife team, Jason and Maria, who share a long-time love for plants. Jason is the garden architect. He creates and oversees all designs while managing his team of landscapers. Maria manages all the marketing for the company and oversees the nursery. They need a webiste that represents their firm and adheres to their style.`,
    goals: ["FOLLOWS FIRM DESIGN", "CLEAN LANDING PAGE", "SEO OPTIMIZED", "MOBILE-FRIENLDY"],
    tech: ["Semantic HTML5", "CSS3"],
    achievements: [
      "Landing Page matches business style",
      "Clean and Simple Design"
    ],
    live: "COMING SOON",
    github: "https://github.com/CodrinCarpovici/luckyShrub",
  },
];

export default data;
