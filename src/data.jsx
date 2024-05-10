import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
   // FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiExternalLink } from 'react-icons/fi';
  
  // import Work1 from './assets/project-1.jpg';
  // import Work2 from './assets/project-2.jpeg';
  // import Work3 from './assets/project-3.jpeg';
  // import Work4 from './assets/project-4.jpeg';
  // import Work5 from './assets/project-5.jpeg';
  // import Work9 from './assets/project-6.jpg';
  //   import Work7 from './assets/project-7.jpg';
    import Work13 from './assets/nationalizeapi.webp';
    import Work10 from './assets/restcountries.png';
    import Work11 from './assets/crudimage.webp';
   // import Work12 from './assets/shoppingapp.jpg';
    //import Work13 from './assets/tirukural.png';
    import Work14 from './assets/zenclass.jpg';
    import Work15 from './assets/expenses.jpg';
    import Work16 from './assets/url-shortener.png';







  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Projects',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Kamaleesh',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'S',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '21 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    // {
    //   id: 5,
    //   title: 'Github : ',
    //   description: 'SsandySANTHOSH',
    // },
  
    {
      id: 6,
      title: 'Location : ',
      description: 'Erode',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91-9345700668',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'skamaleesh@gmail.com',
    },
  
    // {
    //   id: 9,
    //   title: 'LinkedIn : ',
    //   description: 'santhosh6',
    // },
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'English, Tamil',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: 'Fresher',
      title: 'Looking for great  <br /> Opportunity',
    },
    {
      id: 4,
      no: '7+',
      title: ' Years Experience in <br /> Basketball',
    },
  ];

     export const certificate = [
      {
        id: 6,
        category: 'certification',
        icon: <FaGraduationCap />,
        year: ' 2024 - Present',
        title: 'Full Stack Development <span> NSchool Academy</span>',
        desc: '',
      },


     ]
  
  export const resume = [
   
   

    // {
    //   id: 6,
    //   category: 'education',
    //   icon: <FaGraduationCap />,
    //   year: ' 2023 - Present',
    //   title: 'Full Stack Development <span> Guvi</span>',
    //   desc: 'Currently Pursuing',
    // },
  
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020 -  2023',
      title: 'B.Com  <span> Suguna Collage of Arts and Science</span>',
      desc: 'Scored 70%',
      
    },
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2019-2020',
      title: 'HSC <span> Suburban Higher Secondary School </span>',
      desc: 'Scored 60% ',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'HTML',
      percentage: '85',
    },
    {
      id: 2,
      title: 'Tailwind CSS',
      percentage: '80',
    },
    {
      id: 3,
      title: 'JavaScript',
      percentage: '75',
    },
    {
      id: 4,
      title: 'React',
      percentage: '75',
    },
  
    {
      id: 5,
      title: 'Bootstrap',
      percentage: '70',
    },
 
    {
      id: 7,
      title: 'NodeJs',
      percentage: '75',
    },
    {
      id: 8,
      title: 'ExpressJs',
      percentage: '85',
    },
    {
      id: 9,
      title: 'MongoDB',
      percentage: '85',
    },
   
  
  ];
  
  export const portfolio = [

    {
      id: 4,
      img: Work14,
      title: 'Fammus E-Commerce Site',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: 'Crafting digital marketplaces, where clicks turn into purchases, and dreams into deliveries',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' Html,CSS,Javascript,React.js,node.js,Express.js,mongoDB',
        },
        
        {
          icon: <FiExternalLink />,
          title: 'Front End : ',
          desc: 'https://github.com/Kamaleesh3/Mern-Front',
        },
        {
          icon: <FiExternalLink />,
          title: 'Back End : ',
          desc: 'https://github.com/Kamaleesh3/MERN-Site',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://mern-front-kqs2.onrender.com/',
        },
   
  
      ],
    },
    
    
    

  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];