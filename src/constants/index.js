import {
    mobile,
    backend,
    login,
    robofriend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    hr,
    python,
    java,
    reactjs,
    gcp,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cisco,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Certifications",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Cybersecurity",
      company_name: "Cisco",
      icon: cisco,
      iconBg: "#383E56",
      date: "November 15, 2021",
      points: [
        "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. ",
        "The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession.",
        "They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.",
        
      ],
    },
    {
      title: "4 star in python",
      company_name: "HackerRank",
      icon: hr,
      iconBg: "#E6DEDD",
      date: "Jan 2022",
      points: [
        
      ],
    },
    {
      title: "Website on Google Cloud",
      company_name: "Google Cloud ",
      icon: gcp,
      iconBg: "#383E56",
      date: "Jun 2022",
      points: [
        "Hands on Google Cloud website architectures available to ensure that your website is available and scalable. ",
        
      ],
    },
    {
      title: "Build Websites with Firebase",
      company_name: "Google Cloud",
      icon: gcp,
      iconBg: "#E6DEDD",
      date: "Jun 2022",
      points: [
        "Firebase is a backend-as-service (Bass) platform for creating mobile and web applications.",
        "Hands on experience in building serverless web apps, importing data into a serverless database, and building a Google Assistant application with Firebase and its Google Cloud integrations",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I enthusiastically endorse Samyak's portfolio, demonstrating exceptional talent in front-end development. Their creative approach and attention to detail result in outstanding user experiences.",
      name: "Hemant Shanu",
      designation: "Data analyst",
      company: "Lowes",
      image: "https://media.licdn.com/dms/image/D4D03AQHhe4-B3rw9ew/profile-displayphoto-shrink_400_400/0/1683013570516?e=1695254400&v=beta&t=1qglBZcLEVJth3OlvYofGsyKBx7RkDMZtAFltA7R0SM",
    },
    {
      testimonial:
        "Showcasing impressive front-end development skills and a keen eye for design.Samyak's ability to create captivating and user-friendly websites is truly remarkable.",
      name: "Akshansh Rai",
      designation: "Consultant",
      company: "ZS",
      image: "https://media.licdn.com/dms/image/C5103AQG1XPUtYfsVKQ/profile-displayphoto-shrink_400_400/0/1531053910821?e=1695254400&v=beta&t=j3EoM4aa97yHy3e-9njH52sA6TDRoJmnOVhPoh6yE9o",
    },
    {
      testimonial:
        "Something that i have said  ",
      name: "Kumari Himadri",
      designation: "IT support Engineer",
      company: "Klipfolio",
      image: "https://media.licdn.com/dms/image/C5103AQEvVBkuoOtjUg/profile-displayphoto-shrink_400_400/0/1586499564183?e=1695254400&v=beta&t=zxTmAepcTNrYFcpwqIwEW_bXC7dbUlp-QAkgVV1IVvQ",
    },
  ];
  
  const projects = [
    {
      name: "Signup and Login",
      description:
        "Login And Signup page build using reactJS on the Client side and NodeJS and ExpressJS on the Server side as well as Json Web tokens (JWT) authentication implemented ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Restapi",
          color: "pink-text-gradient",
        },
      ],
      image: login,
      source_code_link: "https://github.com/KNIGHTW4LKER/blogmaker_signup",
    },
    {
      name: "Robofriends",
      description:
        "Frontend project which implements Json Api producing random robo Avatar on card which you can toggle though and search through",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Json",
          color: "green-text-gradient",
        },
        {
          name: "tachyons",
          color: "pink-text-gradient",
        },
      ],
      image: robofriend,
      source_code_link: "https://github.com/KNIGHTW4LKER/Robofriends",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };