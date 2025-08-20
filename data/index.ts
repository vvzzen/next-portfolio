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
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "flex flex-col",
      titleClassName: "justify-start text-[20px]",
      spareImg: "",
    },
    {
      id: 2,
      title: "Quality-Driven Development",
      description: "I prioritize clean code and best practices",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "grid.svg",
      spareImg: "bento3.svg",
    },
    {
      id: 3,
      title: "My Tech Stack",
      description: "Full-stack expertise with modern technologies",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "grid.svg",
    },
    {
      id: 4,
      title: "About Me - Photo",
      description: "Add your professional photo here",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "opacity-50 w-full h-full object-cover",
      titleClassName: "justify-center items-center text-center",
      img: "profile.svg",
      spareImg: "",
    },
    {
      id: 5,
      title: "Ready to Collaborate",
      description: "Let's build something amazing together!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 w-60",
      titleClassName: "justify-start",
      img: "b5.svg",
      spareImg: "grid.svg",
    },
    {
      id: 6,
      title: "My Resume",
      description: "Updated August 2025",
      className: "lg:col-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "top-5 max-w-60 text-center justify-center items-center",
      img: "",
      spareImg: "",
    },
  ];
  
export const projects = [
  {
    id: 1,
    title: "Enterprise Software Platform",
    des: "Led the development of a scalable enterprise platform using modern tech stack, improving system performance by 40% and user satisfaction scores.",
    expandedContent: {
      overview: [
        "This comprehensive platform serves over 10,000+ users daily with 99.9% uptime. The project involved leading a team of 8 developers to build a modern, scalable enterprise solution.",
        "Key achievements include implementing microservices architecture, optimizing database queries for 3x faster response times, and building automated testing pipelines that reduced bugs by 75%."
      ],
      features: [
        "Microservices architecture with Docker containerization",
        "Real-time collaboration tools and messaging system",
        "Advanced user management and role-based access control",
        "Integration with 15+ third-party APIs and services",
        "Automated testing and CI/CD pipeline deployment",
        "Comprehensive analytics and monitoring dashboard"
      ],
      technical: [
        "Built using React.js with TypeScript for type safety and maintainability. Implemented Redux for state management and React Query for efficient data fetching.",
        "Backend developed with Node.js and Express, using PostgreSQL for primary data storage and Redis for caching. Implemented JWT authentication and OAuth 2.0 integration.",
        "Deployed on AWS using EKS for container orchestration, with CloudFront CDN for global content delivery and RDS for managed database hosting."
      ],
      challenges: [
        "One of the main challenges was migrating from a monolithic architecture to microservices while maintaining zero downtime. This required careful planning and gradual migration strategies.",
        "Performance optimization was crucial due to the large user base. Implemented database indexing, query optimization, and caching strategies that improved response times by 3x."
      ],
      githubLink: "https://github.com/alvinzainul",
      stats: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "+40%",
        bugs: "-75%"
      }
    },
    img: "p5.svg",
    iconLists: ["re.svg", "js.svg", "tail.svg", "na.svg", "mdb.svg"],
    link: "https://github.com/alvinzainul",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    des: "Built an intelligent analytics platform with real-time data processing and machine learning insights for business decision making.",
    expandedContent: {
      overview: [
        "Developed an advanced analytics platform that processes over 1M+ data points daily, providing real-time insights and predictive analytics for business decision making.",
        "The platform combines machine learning algorithms with an intuitive React frontend to deliver actionable insights that reduced manual analysis time by 80%."
      ],
      features: [
        "Predictive analytics using machine learning models",
        "Real-time data processing and visualization",
        "Custom dashboard creation and sharing",
        "Automated report generation and scheduling",
        "Intelligent alerting system with ML-based anomaly detection",
        "Multi-tenant architecture with role-based permissions"
      ],
      technical: [
        "Frontend built with React.js and D3.js for interactive data visualizations. Implemented custom chart components and responsive design for mobile compatibility.",
        "Backend powered by Python with FastAPI framework, using pandas and scikit-learn for data processing and machine learning. Integrated with Apache Kafka for real-time data streaming.",
        "Data infrastructure includes PostgreSQL for structured data, InfluxDB for time-series metrics, and Redis for caching. Deployed using Docker on AWS ECS."
      ],
      challenges: [
        "Processing large volumes of real-time data required implementing efficient streaming architectures and optimizing database queries for sub-second response times.",
        "Ensuring accuracy of machine learning predictions while maintaining system performance was achieved through model optimization and intelligent caching strategies."
      ],
      githubLink: "https://github.com/alvinzainul",
      stats: {
        dataPoints: "1M+ daily",
        accuracy: "+45%",
        efficiency: "+80%",
        responseTime: "<500ms"
      }
    },
    img: "p6.svg",
    iconLists: ["re.svg", "js.svg", "tail.svg", 'ca.svg' ],
    link: "https://github.com/alvinzainul",
  },    
  {
    id: 3,
    title: "Mobile-First E-Commerce Solution",
    des: "Designed and developed a responsive e-commerce platform with seamless user experience across all devices and payment integrations.",
    expandedContent: {
      overview: [
        "Full-stack e-commerce solution designed with mobile-first approach, featuring seamless user experience across all devices and comprehensive payment integrations.",
        "The platform achieved 98% mobile performance score and increased conversion rates by 35% through optimized user flows and fast loading times."
      ],
      features: [
        "Responsive design optimized for mobile, tablet, and desktop",
        "Multiple payment gateways including Stripe, PayPal, and Apple Pay",
        "Real-time inventory management and tracking",
        "Advanced product search and filtering system",
        "Order tracking and automated email notifications",
        "Admin dashboard with comprehensive analytics and reporting"
      ],
      technical: [
        "Built with Next.js for server-side rendering and optimal SEO performance. Styled with Tailwind CSS for responsive design and Framer Motion for smooth animations.",
        "Backend API developed with Node.js and Express, integrated with Stripe for payment processing and SendGrid for email automation. MongoDB used for flexible product catalog management.",
        "Deployed on Vercel with Edge Functions for global performance, integrated with Cloudinary for image optimization and AWS S3 for file storage."
      ],
      challenges: [
        "Optimizing mobile performance required implementing lazy loading, image optimization, and efficient caching strategies to achieve sub-2-second load times.",
        "Integrating multiple payment providers while maintaining PCI compliance and ensuring secure transaction processing across different markets and currencies."
      ],
      githubLink: "https://github.com/alvinzainul",
      stats: {
        performance: "98%",
        conversion: "+35%",
        loadTime: "<2s",
        mobile: "100%"
      }
    },
    img: "p7.svg",
    iconLists: ["re.svg", "js.svg", 'ca.svg', 'f.svg', "tail.svg",],
    link: "https://github.com/alvinzainul",
  },
  {
    id: 4,
    title: "Cloud Infrastructure Automation",
    des: "Implemented DevOps solutions and cloud infrastructure automation, reducing deployment time by 60% and improving system reliability.",
    expandedContent: {
      overview: [
        "Comprehensive DevOps solution implementing cloud infrastructure automation that reduced deployment time by 60% and improved system reliability across multiple environments.",
        "Built CI/CD pipelines using Docker, Kubernetes, and AWS services with automated infrastructure provisioning and monitoring systems."
      ],
      features: [
        "Automated CI/CD pipelines with GitHub Actions",
        "Infrastructure as Code using Terraform and CloudFormation",
        "Container orchestration with Kubernetes and Docker",
        "Comprehensive monitoring and alerting with Prometheus and Grafana",
        "Automated backup and disaster recovery procedures",
        "Security scanning and vulnerability assessment integration"
      ],
      technical: [
        "Infrastructure built on AWS using EKS for Kubernetes orchestration, with auto-scaling groups and load balancers for high availability. Terraform used for infrastructure provisioning and version control.",
        "CI/CD pipelines implemented with GitHub Actions and Jenkins, featuring automated testing, security scanning, and blue-green deployments. Docker images optimized for production with multi-stage builds.",
        "Monitoring stack includes Prometheus for metrics collection, Grafana for visualization, and ELK stack for centralized logging. Integrated with PagerDuty for incident management."
      ],
      challenges: [
        "Migrating legacy applications to cloud-native architecture required careful planning and gradual migration strategies to ensure zero-downtime deployments.",
        "Implementing comprehensive monitoring and alerting systems while managing costs and ensuring security compliance across multiple AWS regions and environments."
      ],
      githubLink: "https://github.com/alvinzainul",
      stats: {
        deployment: "-60%",
        reliability: "99.9%",
        failures: "-90%",
        automation: "100%"
      }
    },
    img: "p8.svg",
    iconLists: ["re.svg", "js.svg", 'ca.svg', "tail.svg",],
    link: "https://github.com/alvinzainul",
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
      desc: "Bridging business requirements with technical solutions to deliver impactful products",
      className: "md:col-span-2",
      thumbnail: "exp4.svg",
    },
    {
      id: 5,
      title: "AI/ML Development & Deployment",
      desc: "Leveraging most recent technologies to build intelligent applications and streamline deployment processes",
      className: "md:col-span-2",
      thumbnail: "exp4.svg",
    },
    {
      id: 6,
      title: "Cross-Disciplinary Communication & Problem Solving",
      desc: "Skilled at translating complex concepts, solving problems, and communicating effectively across diverse disciplines and teams",
      className: "md:col-span-2",
      thumbnail: "exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 2,
      img: "home.svg",
      url:'https://alvinzainul.dev' // Update this to your actual portfolio URL
    },
    {
      id: 1,
      img: "git.svg",
      url:'https://github.com/alvinzainul' // Update this to your actual GitHub
    },
    {
      id: 3,
      img: "link.svg",
      url: 'https://www.linkedin.com/in/alvinzainul/' // Update this to your actual LinkedIn
    },
  ];