import {
      Billed00,
      Billed01,
      Billed02,
      Billed03,
      Fisheye00,
      Fisheye01,
      Fisheye02,
      Fisheye03,
      Hrnet00,
      Hrnet01,
      Hrnet02,
      Sportsee00,
      Sportsee01,
      Ohmyfood00,
      Ohmyfood01,
      Ohmyfood02,
      Ohmyfoodmob00,
      Ohmyfoodmob01,
      Ohmyfoodmob02,
      Ohmyfoodmob03,
      Kasa00,
      Kasa01,
      Kasa02,
      Kasa03,
      Kasa04,
      Kasamob00,
      Kasamob01,
      Kasamob02,
      Kasamob03,
      Plats00,
      Plats01,
      Plats02,
      Argentbank00,
      Argentbank01,
      Argentbank02,
      Argentbank03,
} from '../assets/img'

export const devSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Github', 'Responsive Design', 'JIRA', 'Jest', 'Redux/Toolkit']
export const desSkills = ['Figma', 'Adobe Photoshop']
export const projects = [
      {
            name: "HRNet",
            cover: Hrnet00,
            images: [Hrnet01, Hrnet02],
            description: "Transforming a jQuery application internal site for personnel management into a React application and passing a jQuery library to React.",
            tools: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            repo: "https://github.com/mariaroudier/HRNet"
      },
      {
            name: "Billed",
            cover: Billed00,
            images: [Billed01, Billed02, Billed03],
            description: "Unit and integration testing and debagging of SaaS RH.",
            tools: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Jest"],
            repo: "https://github.com/mariaroudier/Billed_Front"
      },
      {
            name: "Fisheye",
            cover: Fisheye00,
            images: [Fisheye01, Fisheye02, Fisheye03],
            description: "Creating an accessible site for photographers and developing a modular web application with the Factory design pattern.",
            tools: ["HTML", "CSS", "JavaScript"],
            repo: "https://github.com/mariaroudier/fisheye"
      },
      {
            name: "Kasa",
            cover: Kasa00,
            images: [Kasa01, Kasa02, Kasa03, Kasa04, Kasamob00, Kasamob01, Kasamob02, Kasamob03],
            description: "Developing a responsive web application with React Router for the real estate agency and filling the site with data from a json.",
            tools: ["HTML", "CSS", "JavaScript", "React"],
            repo: "https://github.com/mariaroudier/Kasa-real-estate"
      },
      {
            name: "Les petits plats",
            cover: Plats00,
            images: [Plats01, Plats02],
            description: "Developing the research algorithm with the filters for a recipe site.",
            tools: ["HTML", "CSS", "JavaScript"],
            repo: "https://github.com/mariaroudier/Les-petits-plats"

      },
      {
            name: "OhmyFood",
            cover: Ohmyfood00,
            images: [Ohmyfood01, Ohmyfood02, Ohmyfoodmob00, Ohmyfoodmob01, Ohmyfoodmob02, Ohmyfoodmob03],
            description: "Developing a site “mobile first” which lists restaurant menus using an animations CSS",
            tools: ["HTML", "CSS", "SASS"],
            repo: "https://github.com/mariaroudier/omf"
      },
      {
            name: "SportSee",
            cover: Sportsee00,
            images: [Sportsee00],
            description: "Developing advanced graphical elements using Recharts and producing technical documentation",
            tools: ["HTML", "CSS", "JavaScript", "React", "Recharts"],
            repo: "https://github.com/mariaroudier/P11-SportSee-front-end-dashboard"
      },
      {
            name: "Argent Bank",
            cover: Argentbank00,
            images: [Argentbank01, Argentbank02, Argentbank03],
            description: "Developing a responsive React web application using Redux for manage the state of the personal account of the banking application and creating a document describing the API for the transactions",
            tools: ["HTML", "CSS", "JavaScript", "React", "Redux", "Swagger"],
            repo: "https://github.com/mariaroudier/Bank-user-s-account"
      },
]