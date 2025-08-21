export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Innovative Software Engineer & Technical Leader",
      description: "Building scalable solutions for modern challenges",
  className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[18vh]",
      imgClassName: "flex flex-col",
      titleClassName: "justify-start text-[20px]",
      spareImg: "",
    },
    {
      id: 2,
      title: "Quality-Driven Development",
      description: "I prioritize clean code and best practices",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[12vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "grid.svg",
      spareImg: "bento3.svg",
    },
    {
      id: 3,
      title: "My Tech Stack",
      description: "Full-stack expertise with modern technologies",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[12vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "grid.svg",
    },
    {
      id: 4,
      title: "About Me",
      description: "Software Engineer & Technical Leader",
  className: "lg:col-span-1 md:col-span-3 md:row-span-2 lg:min-h-[4vh]",
      imgClassName: "opacity-50 w-full h-full object-cover",
      titleClassName: "justify-center items-center text-center",
      img: "profile.png",
      spareImg: "",
    },
    {
      id: 5,
      title: "Ready to Collaborate",
      description: "Let's build something amazing together!",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[6vh]",
      imgClassName: "absolute right-0 bottom-0 w-60",
      titleClassName: "justify-start",
      img: "b5.svg",
      spareImg: "grid.svg",
    },
    {
      id: 6,
      title: "My Curriculum Vitae",
      description: "Updated August 2025",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[6vh]",
      imgClassName: "",
      titleClassName: "top-5 max-w-60 text-center justify-center items-center",
      img: "",
      spareImg: "",
    },
  ];
  
export const projects = [
  {
    id: 1,
    title: "Integrated Fluid Interpretation System",
    des: "Developed ML-driven workflow and surrounding well module for petrophysical fluid interpretation, integrating Python, Dataiku, Django, and visualization as part of research.",
    expandedContent: {
      overview: [
        "A comprehensive solution for petrophysical fluid interpretation, combining advanced data processing, log interpretations, machine learning, and interactive interface.",
        "Key contributions include a novel surrounding well module for attribute-based calculations, ML scoring for fluid interpretation, and a performant web interface for massive log data."
      ],
      features: [
        "Surrounding well module for petrophysical calculation influenced by logs in the well path surrounding proximity",
        "ML-based scoring for fluid interpretation results based from various interpretation methods' prediction",
        "Interactive log display with three.js/WebGL for large datasets",
        "User-friendly webapp interface with Next.js, TypeScript, and Tailwind CSS combined with backend powered by Python (Django) and PostgreSQL",
      ],
      technical: [
  "Data processing pipelines built in Dataiku using Python for feature engineering and attribute extraction, including development of a surrounding well module to calculate petrophysical values based on neighboring wells' attributes and improve interpretation accuracy. Implemented machine learning models to score and validate fluid interpretation results. Frontend webapp built with Next.js, leveraging three.js/WebGL for efficient rendering of massive log data. Backend services developed in Python with Django, using PostgreSQL for data storage and management."
      ],
      challenges: [
  "Displaying very large log datasets is challenging, which led to leveraging three.js/WebGL for performance; however, three.js/WebGL has a steep learning curve and required significant time investment. Designing a flexible data model to support various well sets was also an interesting issue to tackle. On the other hand, bridging data science, engineering, and geosciences requires tactful communication."
      ],
      // githubLink: "https://github.com/alvinzainul",
      stats: {
        wells: "2900+",
        logs: "3B+ entries",
        // performance: "Real-time rendering",
        accuracy: "In progress +80%"
      }
    },
    img: "mifi.png",
    gallery: [
      "beforesurr.png", "aftersurr.png", "logsidplay.png", "surrwellscribble.png"
    ],
    iconLists: ["ts.svg", "tail.svg", "three.svg", "py.svg", "postgre.svg", "diku.png", "skl.png", "next.svg"],
    // link: "https://github.com/alvinzainul",
  },{
    id: 2,
    title: "SIPAB (Sistem Informasi Pajak Alat Berat)",
    des: "Centralized heavy duty vehicles tax system. Registration, payment, and reporting for users; monitoring, rate settings, and integration for government.",
    expandedContent: {
      overview: [
        "Developed using Next.js, Python, and PostgreSQL.",
        "App that centralizes the heavy duty vehicles tax system: from vehicle’s tax registration (to get vehicle number), payment, and owned vehicle tax report on user side, and general monitoring, province monitoring, and Bapenda province rate settings on government side.",
        "Integrated with other government systems, like SPIONAM, to monitor the mutation of those heavy vehicles and ensure a synchronized governmental system."
      ],
      features: [
        "Vehicle tax registration and number issuance",
        "Online payment and owned vehicle monitoring for users",
        "General and province-level monitoring for government",
        "Bapenda province rate management",
        "Integration with SPIONAM for vehicle mutation tracking"
      ],
      technical: [
        "Frontend built with Next.js for modern web experience with backend services in Python integrated with PostgreSQL and Google Cloud storage for robust data management and integration. Synchronized and integrated with related government systems APIs",
      ],
      challenges: [
        "Ensuring seamless integration and data synchronization with external government systems, while also keeping in mind a flexible system to support both user and government workflows. Also managing complex tax rules and coordinating province-specific rate and rules differences proves to be a challenge."
      ],
      // githubLink: "https://github.com/alvinzainul",
      stats: {
        provinces: "38",
        vehicles: "200,000+"
      }
    },
    img: "sipab.svg",
    gallery: [
      "sipabform.png"
    ],
    iconLists: ["ts.svg", "next.svg", "tail.svg", "py.svg", "postgre.svg", "gcloud.svg"],
    // link: "https://github.com/alvinzainul",
  },{
    id: 3,
    title: "PetroNet",
    des: "Dataiku webapp for ML-driven pore pressure prediction, featuring lithology prediction, log display, chatbot, and ML insights.",
    expandedContent: {
      overview: [
        "Developed as a Dataiku webapp (pure HTML, CSS, JS) serving as an interface to a machine learning model for pore pressure prediction with multiple methods.",
        "The app provides lithology prediction to supplement pore pressure prediction, interactive log display using d3.js, a chatbot for user queries, and ML-generated insights to assist geoscientists and engineers.",
        "Developed as a project for SCALEUP-2025 Hackathon."
      ],
      features: [
        "Interactive log display with d3.js visualization",
        "Chatbot interface for user interaction and support",
        "ML-generated insights for pore pressure and lithology prediction",
        "Seamless integration with Dataiku ML pipelines"
      ],
      technical: [
        "Frontend built as a single-page webapp using HTML, CSS, and JavaScript for maximum compatibility with Dataiku webapp requirements. Log visualization implemented with d3.js for interactive and scalable data display.",
        "Chatbot built with vanilla JS, integrated with backend ML models via Dataiku APIs, on top of ML models for pore pressure and lithology prediction developed and deployed within Dataiku."
      ],
      challenges: [
        "Building a rich, interactive UI using only vanilla JS, HTML, and CSS (no frameworks) to comply with Dataiku webapp constraints. Integrating real-time ML predictions and insights into the webapp interface. Ensuring accurate lithology prediction to support reliable pore pressure results."
      ],
      // githubLink: "https://github.com/alvinzainul",
      stats: {
        models: "4",
        accuracy: "79%"
      }
    },
    img: "petronet.png",
    gallery: [
      "picture1.png", "picture2.png", "picture3.png", "picture4.png", "picture5.png", "eaton.jpg", "picture6.png", "picture7.png", "picture8.png", "picture9.png"
    ],
    iconLists: ["js.svg", "diku.png", "skl.png", "d3.svg", "py.svg"],
    link: ["https://docs.google.com/presentation/d/1H4a7FPSx3gqTmmdi4v5RiD5ZcWb0fGx0/edit?usp=drive_link&ouid=104230775237985945164&rtpof=true&sd=true","Pitch Deck"],
    },
    {
      id: 4,
      title: "Asymmetric Hybrid Attention Transformer",
      des: "Assimilated HAT model and Asymmetric Convolution to upscale medical images, making affordable imaging machines more useful for diagnosis.",
      expandedContent: {
        overview: [
          "Developed a hybrid model combining HAT (Hybrid Attention Transformer) and Asymmetric Convolution to enhance and upscale medical images aimed to make medical imaging more accessible by improving results from lower-end, affordable, and widely available imaging machines. This in turns, supports better diagnosis by providing higher quality images from less capable hardware."
        ],
        features: [
          "Hybrid model: HAT + Asymmetric Convolution",
          "Medical image super-resolution and upscaling",
          "Improved diagnostic value from affordable imaging devices",
          "Accessible Deep Learning for healthcare"
        ],
        technical: [
          "Model architecture based on HAT (Hybrid Attention Transformer) with custom asymmetric convolution layers trained trained on medical imaging datasets of Brain Tumor MRIs, Lung Cancer CTs, and bon fracture X-rays for super-resolution tasks. Implemented in Python using PyTorch and TensorFlow."
        ],
        challenges: [
          "Integrating transformer-based attention with convolutional upscaling. Ensuring model generalizes well to various imaging modalities and device qualities. Balancing performance and computational efficiency for real-world deployment."
        ],
        // githubLink: "https://github.com/alvinzainul",
        stats: {
          trained_on: "17,000+ images",
          improvement: "+10% PSNR"
        }
      },
      img: "skripsicover.png",
      gallery: [
        "skripsiarch.png", "skripsiflow.png", "skripsiprepro.png", "skripsischeme.png", "skripsipsnr.png", "skripsiresult.png"
      ],
      iconLists: ["py.svg", "skl.png", "tf.svg"],
      // link: "https://github.com/alvinzainul",
    },
    {
      id: 5,
      title: "Data Pipeline ETL on Azure",
      des: "Robust ETL pipeline on Azure: ingested SAP and OBD data, transformed with Spark for dynamic pricing, customer, and asset monitoring.",
      expandedContent: {
        overview: [
          "Built a robust ETL pipeline on Azure to ingest and consolidate SAP and generated OBD data. Then transformed and prepared data for use in key business projects such as dynamic pricing, customer monitoring, and asset monitoring."
        ],
        features: [
          "Data ingestion from SAP tables, OBD, and FTP sources",
          "Data consolidation and cleaning",
          "Transformation using Apache Spark",
          "Support for dynamic pricing, customer, and asset monitoring use cases"
        ],
        technical: [
          "Azure Data Factory is used for orchestration and pipeline management, while Apache Spark is used for scalable data transformation and processing. Used and Integrated with Azure Data Lake and downstream analytics platforms."
        ],
        challenges: [
          "Handling large-scale, heterogeneous data sources (SAP, OBD). Ensuring data quality and reliability throughout the pipeline. Optimizing Spark jobs for performance and cost on Azure."
        ],
        // githubLink: "https://github.com/alvinzainul",
        stats: {
          sources: "SAP, OBD",
          volume: "TBs+ daily",
        }
      },
      img: "etl.png",
      // gallery: [
      //   "placeholder.png"
      // ],
      iconLists: ["azure.svg", "spark.svg", "py.svg", "sap.svg"],
      // link: "https://github.com/alvinzainul",
      },
      {
        id: 6,
        title: "180DC UGM Profile Website",
        des: "Profile and inquiry website for 180DC UGM, combining WordPress CMS and React with a functional client inquiry form.",
        expandedContent: {
          overview: [
            "Developed the official profile website for 180DC UGM, integrating WordPress for content management and React for a modern frontend. Implemented a functional inquiry form as a starting point for potential client engagement. Site is no longer maintained by me, but the groundwork and architecture remain the same."
          ],
          features: [
            "WordPress-powered content management",
            "React frontend for dynamic user experience",
            "Functional client inquiry form"
          ],
          technical: [
            "WordPress as headless CMS and React for frontend. Form handling and integration with backend was done for inquiries."
          ],
          challenges: [
            "Integrating WordPress with a custom React frontend and ensuring smooth content updates and form submissions."
          ],
          link: "https://www.180dcugm.org/",
        },
        img: "180dc.png",
        iconLists: ["re.svg", "tail.svg", "wp.svg"],
        link: ["https://www.180dcugm.org/", "Website"],
      },
      {
        id: 7,
        title: "Gelanggang Expo 2022",
        des: "Webapp for GELEX 2022, an expo and festival for new students, featuring GSAP animations and a virtual exhibition with Unity integration.",
        expandedContent: {
          overview: [
            "Developed the webapp for Gelanggang Expo 2022 (GELEX), an event welcoming new students and introducing them to university activities, communities, and organizations.",
            "Used GSAP for advanced, fancy animations and embedded a Unity-based virtual exhibition."
          ],
          features: [
            "Event information and organization showcase",
            "GSAP-powered advanced animations",
            "Virtual exhibition via Unity embedding"
          ],
          technical: [
            "Frontend built with React and GSAP for animation. Unity WebGL embedded for virtual exhibition experience."
          ],
          challenges: [
            "Coordinating content, features, and teams to operate the web for a large-scale university event. Integrating Unity WebGL smoothly into the webapp."
          ],
          link: "https://ukm.ugm.ac.id/2022/gelex/",
          stats: {
            concurrent_visitors: "20000+",
            orgs: "50+",
          }
        },
        img: "gelex.png",
        iconLists: ["re.svg", "ts.svg", "tail.svg", "gsap.svg", "unity.svg"],
        link: ["https://ukm.ugm.ac.id/2022/gelex/", "Website"],
      },
      {
        id: 8,
        title: "Porsenigama 2021",
        des: "Webapp for Porsenigama 2021, the largest inter-faculty sports tournament, with React frontend, Express backend, and Firebase NoSQL.",
        expandedContent: {
          overview: [
            "Developed the webapp for Porsenigama 2021, a major inter-faculty sports tournament in Indonesia.",
            "Featured live tables, standings, and match scores with a React frontend, Express backend, and Firebase NoSQL database.",
            "Site is now archived but was fully functional during the event."
          ],
          features: [
            "Live tables and standings",
            "Real-time match score updates",
            "Comprehensive event information"
          ],
          technical: [
            "Frontend in React, backend in Express.js with Firebase NoSQL for real-time data and updates."
          ],
          challenges: [
            "Handling real-time updates for large numbers of users and ensuring data consistency and reliability with Firebase."
          ],
          link: "https://ukm.ugm.ac.id/2021/porsenigama/",
          stats: {
            faculties: "18",
            matches: "100+",
            concurrent_visitors: "20000+",
          }
        },
        img: "porseni.png",
        gallery: ["porseold.png"],
        iconLists: ["re.svg", "js.svg", "tail.svg", "ex.svg", "fbase.svg"],
        link: ["https://ukm.ugm.ac.id/2021/porsenigama/", "Website"],
      },
];  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineering Leadership",
      desc: "Leading cross-functional teams and driving technical innovation with modern frameworks and best practices",
      className: "md:col-span-2",
      thumbnail: "exp1.svg",
    },
    {
      id: 2,
      title: "Full-Stack Development",
      desc: "Building scalable applications with React, Node.js, Python, and cloud technologies across multiple platforms",
      className: "md:col-span-2",
      thumbnail: "exp2.svg",
    },
    {
      id: 3,
      title: "Technical Architecture",
      desc: "Designing robust system architectures using microservices, databases, and cloud-native solutions",
      className: "md:col-span-2",
      thumbnail: "exp3.svg",
    },
    {
      id: 4,
      title: "Product Strategy & Innovation",
  desc: "Bridging cross-discipline requirements with technical solutions to deliver impactful products",
      className: "md:col-span-2",
      thumbnail: "exp4.svg",
    },
    {
      id: 5,
      title: "AI/ML Development & Deployment",
      desc: "Leveraging most recent technologies to build intelligent applications and streamline deployment processes",
      className: "md:col-span-2",
      thumbnail: "exp5.svg",
    },
    {
      id: 6,
      title: "Cross-Disciplinary Communication & Problem Solving",
      desc: "Skilled at translating complex concepts, solving problems, and communicating effectively across diverse disciplines and teams",
      className: "md:col-span-2",
      thumbnail: "exp6.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "git.svg",
      url:'https://github.com/vvzzen' // Update this to your actual GitHub
    },
    {
      id: 3,
      img: "link.svg",
      url: 'https://www.linkedin.com/in/alvinzainul/' // Update this to your actual LinkedIn
    },
  ];